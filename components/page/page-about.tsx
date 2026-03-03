import PageAboutIntro from "./page-about-intro";
import PageAboutSteps from "./page-about-steps";

interface PageAboutProps {
  initialTab?: string;
}

export default function PageAbout({ initialTab }: PageAboutProps) {
  return (
    <div className="space-y-4">
      <PageAboutIntro />

      {/* 8단계 과정 탭 */}
      <PageAboutSteps key={initialTab ?? "01"} initialTab={initialTab} />
    </div>
  );
}
