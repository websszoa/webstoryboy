import type { LucideIcon } from "lucide-react";
import {
  Target,
  Palette,
  Code2,
  Rocket,
  ShieldCheck,
  BarChart3,
  Megaphone,
  Expand,
} from "lucide-react";

const steps: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  question: string;
  icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "기획",
    subtitle: "Strategy",
    description: "사이트의 방향성과 목표를 설정하고, MVP 범위를 정의합니다.",
    question: "무엇을 왜 만드는가?",
    icon: Target,
  },
  {
    number: "02",
    title: "디자인",
    subtitle: "Experience",
    description: "UI/UX를 설계하고, 사용자 경험 중심의 인터페이스를 만듭니다.",
    question: "어떤 경험을 줄 것인가?",
    icon: Palette,
  },
  {
    number: "03",
    title: "개발",
    subtitle: "Build",
    description: "실제 코드를 구현하고, 핵심 기능을 완성합니다.",
    question: "어떻게 구현할 것인가?",
    icon: Code2,
  },
  {
    number: "04",
    title: "배포",
    subtitle: "Launch",
    description: "서비스를 세상에 공개하고, 인프라와 SEO를 설정합니다.",
    question: "어떻게 세상에 내놓을 것인가?",
    icon: Rocket,
  },
  {
    number: "05",
    title: "운영",
    subtitle: "Maintain",
    description: "모니터링, 백업, 버그 수정으로 안정적인 서비스를 유지합니다.",
    question: "어떻게 유지할 것인가?",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "분석",
    subtitle: "Analyze",
    description:
      "트래픽, 전환율, 사용자 행동 데이터를 수집하고 인사이트를 도출합니다.",
    question: "데이터로 무엇을 개선할 것인가?",
    icon: BarChart3,
  },
  {
    number: "07",
    title: "마케팅",
    subtitle: "Grow",
    description: "콘텐츠, SEO, 커뮤니티를 통해 사용자를 확보합니다.",
    question: "어떻게 알릴 것인가?",
    icon: Megaphone,
  },
  {
    number: "08",
    title: "확장",
    subtitle: "Scale",
    description: "인프라 확장, 국제화, 수익 다각화로 성장에 대응합니다.",
    question: "성장에 어떻게 대응할 것인가?",
    icon: Expand,
  },
];

export default function MainSteps() {
  return (
    <section className="pt-6 pb-6" aria-label="1인 개발자 8단계 프레임워크">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-full">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <article
              key={step.number}
              className="flex flex-col rounded-lg border border-border bg-card p-4 md:p-5 min-h-[180px] md:min-h-[200px] transition-colors hover:bg-muted/30 hover:border-border"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-xs font-poppins font-medium tracking-widest text-destructive">
                  {step.number}
                </span>
                <span className="text-xs font-poppins uppercase tracking-wider text-muted-foreground shrink-0">
                  {step.subtitle}
                </span>
              </div>
              <h4 className="mt-2.5 text-lg md:text-xl font-anyvid text-foreground">
                {step.title}
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-nanumNeo line-clamp-3 flex-1">
                {step.description}
              </p>
              <p className="mt-3 pt-3 border-t border-border text-sm text-muted-foreground font-anyvid flex items-center gap-2">
                <Icon
                  className="size-3.5 shrink-0 text-muted-foreground"
                  aria-hidden
                />
                <span>{step.question}</span>
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
