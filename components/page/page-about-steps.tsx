"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { steps } from "@/lib/steps";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
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

const iconMap = {
  Target,
  Palette,
  Code2,
  Rocket,
  ShieldCheck,
  BarChart3,
  Megaphone,
  Expand,
} as const;

export default function PageAboutSteps() {
  const tabsId = useId();
  const [activeTab, setActiveTab] = useState(steps[0]?.number ?? "01");

  return (
    <section
      className="rounded-2xl border border-dashed border-gray-200 bg-white p-4 md:p-6 font-anyvid"
      aria-labelledby={`${tabsId}-title`}
    >
      <h3
        id={`${tabsId}-title`}
        className="mb-4 text-lg font-semibold text-foreground"
      >
        1인 개발자 8단계 프레임워크
      </h3>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full gap-0"
      >
        {/* 탭 버튼 */}
        <TabsList
          aria-label="1인 개발자 8단계 프레임워크 단계 선택"
          className="mb-6 grid h-auto w-full grid-cols-2 gap-1.5 rounded-none border-b border-gray-200 bg-transparent p-0 pb-4 sm:grid-cols-4 lg:grid-cols-8"
        >
          {steps.map((s) => {
            const StepIcon = iconMap[s.icon as keyof typeof iconMap] ?? Target;
            return (
              <TabsTrigger
                key={s.number}
                value={s.number}
                aria-label={`${s.number}단계 ${s.title}`}
                className={cn(
                  "h-auto w-full min-w-0 justify-center gap-1.5 rounded-lg border-0 px-2 py-2.5 text-sm font-medium transition-colors after:hidden",
                  "data-[state=active]:bg-brand data-[state=active]:text-white",
                  "bg-gray-100 text-muted-foreground hover:bg-gray-200 hover:text-foreground",
                )}
              >
                <StepIcon className="w-4 h-4 shrink-0" aria-hidden />
                <span className="hidden sm:inline">{s.number}</span>
                <span className="truncate">{s.title}</span>
                <span className="sr-only">{`${s.number}단계 ${s.subtitle}`}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {/* 탭 패널 */}
        {steps.map((step) => {
          const Icon = iconMap[step.icon as keyof typeof iconMap] ?? Target;

          return (
            <TabsContent
              key={step.number}
              value={step.number}
              className="space-y-3 focus-visible:outline-none"
            >
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="text-xs font-poppins tracking-widest text-destructive">
                  {step.number}
                </span>
                <span className="text-xs font-poppins uppercase tracking-wider">
                  {step.subtitle}
                </span>
              </div>
              <h4 className="text-xl font-semibold text-foreground">
                {step.title}
              </h4>

              <p className="flex items-center gap-2 rounded-r-full border-l-2 border-brand bg-red-50 py-3 pl-3 text-sm text-muted-foreground">
                <Icon className="w-4 h-4 shrink-0" aria-hidden />
                <span>{step.question}</span>
              </p>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>

              <ul className="space-y-2 pt-2">
                {step.detail.map((paragraph, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="text-brand shrink-0" aria-hidden>
                      ·
                    </span>
                    <span>{paragraph}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
}
