import { notFound } from "next/navigation";
import TutorialSidebar from "@/components/tutorial/tutorial-sidebar";
import { courseIds, type CourseId } from "@/lib/tutorial/config";

interface TutorialCourseLayoutProps {
  children: React.ReactNode;
  params: Promise<{ course: string }>;
}

export default async function TutorialCourseLayout({
  children,
  params,
}: TutorialCourseLayoutProps) {
  const { course } = await params;
  if (!courseIds.includes(course as CourseId)) notFound();

  return (
    <div className="flex min-h-0 w-full">
      <TutorialSidebar course={course as CourseId} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
