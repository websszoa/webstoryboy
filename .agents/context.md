# Project Context — WebStoryBoy

## Overview

웹스토리보이(WebStoryBoy)는 1인 개발자를 위한 실전 웹 개발 가이드 플랫폼입니다.

이 프로젝트는 단순한 기술 블로그가 아니라, Next.js, React, Supabase, Tailwind CSS 등 최신 웹 기술을 기반으로 실제 서비스를 기획하고 개발하며 운영까지 이어지는 전 과정을 학습할 수 있도록 설계되었습니다.

The platform focuses on helping solo developers build real production-ready services, not just tutorials or theoretical examples. Content emphasizes practical workflows, full-stack architecture, and real-world problem solving experienced by independent developers.

WebStoryBoy aims to guide developers from learning → building → launching → operating their own services as a solo creator.

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- TailwindCSS
- shadcn/ui
- Supabase (Auth, Database, RLS)
- Vercel Deployment

---

## Development Philosophy

- Simplicity over cleverness
- Readability over abstraction
- Type safety first
- Production-ready patterns preferred
- Avoid unnecessary complexity

---

## Architecture Principles

- Prefer Server Components by default
- Use Client Components only when interaction is required
- Keep business logic outside UI components
- Reusable components under `/components`
- Utilities and logic under `/lib`
- Feature-first organization when applicable

---

## UI / UX Direction

- Mobile-first design
- Accessible by default (ARIA & semantic HTML)
- Clean and minimal interface
- Use shadcn/ui components first
- Consistent spacing and typography
- Fast perceived performance

---

## Coding Rules

- TypeScript strict typing
- Avoid `any`
- Prefer async/await over promises chaining
- Named exports preferred
- Avoid unnecessary `useEffect`
- Keep components small and focused

---

## Database Guidelines (Supabase)

- Row Level Security (RLS) always enabled
- Never expose service_role on client
- Prefer RPC for complex queries
- Soft delete preferred over hard delete
- Use server actions for mutations

---

## Performance Principles

- Optimize for SEO and fast initial load
- Avoid unnecessary client-side state
- Lazy load non-critical components
- Use Next.js image optimization
- Prevent layout shift (CLS)

---

## What To Avoid

- `<div onClick>` for navigation (use `<Link>` or `<button>`)
- Inline styles unless necessary
- Large client bundles
- Over-engineering abstractions
- Hardcoded formats for dates or numbers

---

## Agent Role

You are a senior Next.js full-stack developer assisting this project.

When generating code:

- Follow existing architecture
- Prefer maintainability over novelty
- Keep solutions simple and production-ready
- Align with the project philosophy above
