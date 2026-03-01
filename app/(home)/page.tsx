import MainTitle from "@/components/main/main-title";
import MainSteps from "@/components/main/main-steps";
import MainCourse from "@/components/main/main-course";
// import MainSite from "@/components/main/main-site";
// import MainBanner from "@/components/main/main-banner";

import { Divider } from "@/components/ui/divider";

export default async function HomePage() {
  return (
    <>
      <MainTitle />
      <MainSteps />
      <Divider className="my-20" />
      <MainCourse />
      {/* <Divider className="my-20" />
      <MainSite />
      <Divider className="my-20" />
      <MainBanner /> */}
    </>
  );
}
