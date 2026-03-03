// 코스 메뉴 (main-site, main-banner 등에서 사용)
export const courseMenuItems = [
  {
    title: "웹디자인개발기능사",
    thumbnail: "/thumbnail/webdesign.jpg",
    site: "https://www.q-net.or.kr/",
    level: "입문",
    src: "/tutorial/webdesign",
    description:
      "레이아웃 A·B·C·D·E·F 유형과 스크립트(메뉴, 슬라이드, 탭, 팝업)를 단계별로 연습하는 실기 대비 강의입니다.",
    detailDescription:
      "웹디자인기능사 실기 시험 대비 튜토리얼입니다. 웹 표준과 시멘틱 마크업을 바탕으로 flex 레이아웃으로 A-1부터 F-4까지 24가지 레이아웃 유형을 단계별로 구현하고, 스크립트 메뉴(1~6·F-3), 이미지 슬라이드(페이드·좌우·세로·반응형), 탭 메뉴, 팝업까지 jQuery와 자바스크립트로 직접 작성해 봅니다. 총 39개의 실습 문서로 시험 유형을 체계적으로 익힐 수 있습니다.",
    skillCards: [
      {
        category: "frontend",
        icon: { src: "/svg/html5.svg", alt: "html5", width: 40, height: 40 },
        label: "HTML",
      },
      {
        category: "frontend",
        icon: { src: "/svg/css3.svg", alt: "css3", width: 40, height: 40 },
        label: "CSS",
      },
      {
        category: "frontend",
        icon: {
          src: "/svg/javascript.svg",
          alt: "javascript",
          width: 40,
          height: 40,
        },
        label: "JavaScript",
      },
      {
        category: "frontend",
        icon: { src: "/svg/jquery.svg", alt: "jquery", width: 40, height: 40 },
        label: "jQuery",
      },
    ],
    features: [
      {
        name: "레이아웃",
        description:
          " A·B·C·D·E·F 6가지 유형 24단계로 시험에 나오는 레이아웃을 flex로 구현",
      },
      {
        name: "스크립트 메뉴",
        description:
          " 1~6번, F-3 유형으로 드롭다운·서브메뉴 등 네비게이션 스크립트 연습",
      },
      {
        name: "이미지 슬라이드",
        description:
          " 페이드·좌우 무한·세로·반응형(background-image·vh) 등 6가지 유형 구현",
      },
      {
        name: "탭·팝업",
        description:
          " 탭 메뉴로 콘텐츠 전환, 팝업으로 표시/숨김 제어를 jQuery·자바스크립트로 연습",
      },
      {
        name: "실기 대비",
        description:
          " 시험 시간 안에 완성할 수 있도록 구조와 로직을 반복 연습할 수 있는 MDX 문서 구성",
      },
    ],
  },
  {
    title: "마라톤 사이트 만들기",
    thumbnail: "/thumbnail/marathon.png",
    site: "https://www.runzoa.com/",
    level: "준비중",
    src: "/tutorial",
    description:
      "대회 데이터를 수집·정리하고 검색/필터·상세 페이지까지 갖춘 실전 마라톤 서비스를 구현합니다.",
    detailDescription:
      "실제 운영 중인 마라톤 정보 서비스를 처음부터 끝까지 구현하는 실전 프로젝트입니다. 웹 스크래핑을 통해 대회 데이터를 수집하고, Supabase로 체계적으로 관리하며, Next.js 16의 최신 기능을 활용해 검색·필터·정렬 기능이 완비된 사용자 친화적인 인터페이스를 구축합니다. 인증/권한 시스템을 통한 즐겨찾기와 댓글 기능까지 포함하여 확장 가능한 실무 수준의 웹 애플리케이션을 완성합니다.",
    skillCards: [
      {
        category: "framework",
        icon: {
          src: "/svg/nextjs.svg",
          alt: "nextjs",
          width: 40,
          height: 40,
        },
        label: "next.js 16",
      },
      {
        category: "database",
        icon: {
          src: "/svg/supabase.svg",
          alt: "supabase",
          width: 40,
          height: 40,
        },
        label: "supabase",
      },
      {
        category: "css",
        icon: {
          src: "/svg/tailwindcss.svg",
          alt: "tailwindcss",
          width: 40,
          height: 40,
        },
        label: "tailwindcss",
      },
      {
        category: "design",
        icon: {
          src: "/svg/shadcn.svg",
          alt: "shadcn",
          width: 40,
          height: 40,
        },
        label: "shadcn",
      },
      {
        category: "deploy",
        icon: {
          src: "/svg/vercel.svg",
          alt: "vercel",
          width: 40,
          height: 40,
        },
        label: "vercel",
      },
    ],
    features: [
      {
        name: "Next.js 16",
        description:
          " App Router를 활용한 서버 컴포넌트 기반 아키텍처로 성능 최적화된 페이지 구성",
      },
      {
        name: "Supabase",
        description:
          "를 통한 실시간 데이터베이스 관리와 RLS(Row Level Security) 기반 보안 정책 구현",
      },
      {
        name: "Tailwind CSS",
        description:
          "로 반응형 디자인을 구현하고 모바일부터 데스크톱까지 완벽한 사용자 경험 제공",
      },
      {
        name: "Shadcn/ui",
        description:
          " 컴포넌트 라이브러리를 활용하여 접근성과 사용성을 고려한 현대적인 UI 구성",
      },
      {
        name: "Vercel",
        description:
          " 플랫폼을 통한 자동 배포와 글로벌 CDN을 활용한 빠른 페이지 로딩 속도 구현",
      },
    ],
  },
  {
    title: "뮤직 사이트 만들기",
    thumbnail: "/thumbnail/music.png",
    site: "https://www.runzoa.com/",
    level: "준비중",
    src: "/tutorial",
    description:
      "플레이리스트·재생 UI·검색 기능을 중심으로 음악 서비스를 끝까지 완성해봅니다.",
    detailDescription:
      "현대적인 음악 스트리밍 서비스를 처음부터 끝까지 구현하는 실전 프로젝트입니다. React를 활용한 인터랙티브한 음악 재생 UI와 플레이리스트 관리 기능을 구현하고, Node.js 백엔드로 오디오 스트리밍과 실시간 검색 기능을 제공합니다. 사용자별 맞춤 플레이리스트 생성과 음악 추천 시스템까지 포함하여 실제 음악 서비스와 유사한 사용자 경험을 제공하는 웹 애플리케이션을 완성합니다.",
    skillCards: [
      {
        category: "framework",
        icon: { src: "/svg/react.svg", alt: "react", width: 40, height: 40 },
        label: "react",
      },
      {
        category: "backend",
        icon: {
          src: "/svg/nodejs.svg",
          alt: "nodejs",
          width: 40,
          height: 40,
        },
        label: "node.js",
      },
      {
        category: "database",
        icon: {
          src: "/svg/postgresql.svg",
          alt: "postgresql",
          width: 40,
          height: 40,
        },
        label: "postgresql",
      },
      {
        category: "css",
        icon: {
          src: "/svg/tailwindcss.svg",
          alt: "tailwindcss",
          width: 40,
          height: 40,
        },
        label: "tailwindcss",
      },
      {
        category: "deploy",
        icon: {
          src: "/svg/vercel.svg",
          alt: "vercel",
          width: 40,
          height: 40,
        },
        label: "vercel",
      },
    ],
    features: [
      {
        name: "React",
        description:
          " Hooks와 Context API를 활용한 상태 관리로 인터랙티브한 음악 재생 UI와 플레이리스트 기능 구현",
      },
      {
        name: "Node.js",
        description:
          " Express 프레임워크를 활용한 RESTful API 설계와 오디오 스트리밍 처리로 안정적인 백엔드 구축",
      },
      {
        name: "PostgreSQL",
        description:
          "을 통한 음악 메타데이터와 플레이리스트 데이터 관리 및 사용자 정보 저장",
      },
      {
        name: "Tailwind CSS",
        description:
          "로 반응형 디자인을 구현하고 모바일부터 데스크톱까지 완벽한 사용자 경험 제공",
      },
      {
        name: "Vercel",
        description:
          " 플랫폼을 통한 자동 배포와 글로벌 CDN을 활용한 빠른 페이지 로딩 속도 구현",
      },
    ],
  },
];
