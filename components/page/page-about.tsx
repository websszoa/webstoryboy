import PageAboutIntro from "./page-about-intro";
import PageAboutSteps from "./page-about-steps";

export default function PageAbout() {
  return (
    <div className="space-y-4">
      <PageAboutIntro />

      {/* 8단계 과정 탭 */}
      <PageAboutSteps />
    </div>
  );
}
