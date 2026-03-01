# Database Reference — WebStoryBoy

Supabase (PostgreSQL) 기반. 모든 테이블은 RLS 활성화, soft delete 패턴 사용.

---

## Tables

### `public.profiles`

회원 프로필. `auth.users`와 1:1 연결. 회원가입 시 트리거로 자동 생성.

| 컬럼 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `id` | UUID | PK | `auth.users(id)` 참조 (CASCADE) |
| `email` | TEXT | — | 이메일 |
| `full_name` | TEXT | — | 표시 이름 |
| `avatar_url` | TEXT | — | 프로필 이미지 URL |
| `role` | TEXT | `'user'` | `'user'` \| `'admin'` |
| `visit_count` | INTEGER | `0` | 로그인 누적 횟수 |
| `is_deleted` | BOOLEAN | `false` | 탈퇴 여부 (soft delete) |
| `deleted_at` | TIMESTAMPTZ | — | 탈퇴 시각 |
| `created_at` | TIMESTAMPTZ | `NOW()` | 생성 시각 |
| `updated_at` | TIMESTAMPTZ | `NOW()` | 수정 시각 (트리거 자동 갱신) |

**인덱스:** `email`, `role`, `is_deleted`

**RLS 정책:**
- `SELECT` — 본인(`auth.uid()`) + `is_deleted = FALSE`
- `UPDATE` — 본인(`auth.uid()`) + `is_deleted = FALSE`

**권한:**
- `authenticated`: SELECT, UPDATE만 허용 (INSERT, DELETE 불가)
- `service_role`: 전체 허용

---

### `public.contacts`

문의하기. 로그인 사용자만 등록 가능. 관리자가 답변 처리.

| 컬럼 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `id` | UUID | `gen_random_uuid()` | PK |
| `user_id` | UUID | NOT NULL | `auth.users(id)` 참조 (CASCADE) |
| `user_email` | TEXT | NOT NULL | 문의자 이메일 |
| `message` | TEXT | NOT NULL | 문의 내용 (1~2000자) |
| `status` | TEXT | `'pending'` | `'pending'` \| `'progress'` \| `'resolved'` \| `'closed'` |
| `admin_reply` | TEXT | — | 관리자 답변 |
| `admin_id` | UUID | — | 답변 관리자 ID |
| `resolved_at` | TIMESTAMPTZ | — | 처리 완료 시각 |
| `created_at` | TIMESTAMPTZ | `NOW()` | 생성 시각 |
| `updated_at` | TIMESTAMPTZ | `NOW()` | 수정 시각 (트리거 자동 갱신) |

**인덱스:** `user_id`, `status`, `created_at DESC`

**RLS 정책:**
- `INSERT` — `user_id = auth.uid()`인 경우만
- `SELECT` — `user_id = auth.uid()`인 경우만

**권한:**
- `authenticated`: SELECT, INSERT만 허용 (UPDATE, DELETE 불가)
- `service_role`: 전체 허용

---

## Triggers

### `trg_auth_users_after_insert`
- **테이블:** `auth.users` AFTER INSERT
- **함수:** `fn_trg_insert_profile()`
- **동작:** 회원가입 시 `profiles` 레코드 자동 생성. `raw_user_meta_data`에서 `full_name`, `avatar_url` 추출. `ON CONFLICT DO NOTHING`으로 중복 방지.

### `trg_profiles_before_update`
- **테이블:** `profiles` BEFORE UPDATE
- **함수:** `fn_trg_set_updated_at()`
- **동작:** `updated_at = NOW()` 자동 갱신

### `trg_contacts_before_update`
- **테이블:** `contacts` BEFORE UPDATE
- **함수:** `fn_trg_set_updated_at()`
- **동작:** `updated_at = NOW()` 자동 갱신

---

## RPC Functions

모든 RPC는 `SECURITY DEFINER`, `search_path = public`. `authenticated` role만 실행 가능.

### `increment_visit_count()`
로그인 성공 시 방문 횟수 +1.

```ts
await supabase.rpc("increment_visit_count");
```

- 대상: 현재 로그인 유저(`auth.uid()`) + `is_deleted = FALSE`
- 반환: `void`

---

### `soft_delete_account()`
회원 탈퇴 (soft delete). `is_deleted = TRUE`, `deleted_at = NOW()` 처리.

```ts
await supabase.rpc("soft_delete_account");
```

- 대상: 현재 로그인 유저 + `is_deleted = FALSE` (이미 탈퇴한 계정은 무반응)
- 반환: `void`
- 주의: 탈퇴 후 `supabase.auth.signOut()` 별도 호출 필요

---

### `is_full_name_available(name_text: TEXT)`
프로필 이름 중복 확인. 대소문자/공백 무시.

```ts
const { data } = await supabase.rpc("is_full_name_available", { name_text: "홍길동" });
// true = 사용 가능, false = 중복
```

- 본인 이름은 중복으로 간주하지 않음 (`id != auth.uid()`)
- `is_deleted = FALSE`인 계정만 검사
- 반환: `boolean`

---

### `is_my_account_deleted()`
현재 로그인 유저의 탈퇴 여부 확인. 콜백 라우트에서 탈퇴 계정 차단에 사용.

```ts
const { data: isDeleted } = await supabase.rpc("is_my_account_deleted");
// true = 탈퇴한 계정
```

- 프로필이 없으면 `FALSE` 반환 (COALESCE)
- 반환: `boolean`

---

## 사용 패턴

### 클라이언트에서 RPC 호출
```ts
// Client Component
const supabase = createClient(); // lib/supabase/client.ts
await supabase.rpc("increment_visit_count");
```

### 서버에서 RPC 호출
```ts
// Server Component / Route Handler
const supabase = await createClient(); // lib/supabase/server.ts
const { data } = await supabase.rpc("is_my_account_deleted");
```

### 관리자 전용 작업 (RLS 우회)
```ts
// 서버 전용. service_role 키 필요
const supabase = createServiceRoleClient(); // lib/supabase/server.ts
```

---

## 주의 사항

- `profiles.is_deleted = TRUE`인 유저는 RLS에 의해 본인도 조회 불가 → 탈퇴 처리 후 즉시 로그아웃 필요
- `contacts` 수정/삭제는 `authenticated`에게 불가 → 관리자는 `service_role`로만 처리
- 모든 RPC는 `SECURITY DEFINER`이므로 함수 내부 로직이 RLS를 우회함. 함수 내 WHERE 조건으로 권한 제어
