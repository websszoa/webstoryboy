"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  courseDocList,
  courseTitles,
  type CourseId,
} from "@/lib/tutorial/config";

interface TutorialSidebarProps {
  course: CourseId;
}

export default function TutorialSidebar({ course }: TutorialSidebarProps) {
  const pathname = usePathname();
  const docs = courseDocList[course] ?? [];
  const title = courseTitles[course] ?? course;

  return (
    <aside className="w-56 shrink-0 border-r border-gray-200 p-4">
      <h2 className="text-sm text-foreground mb-3">{title}</h2>
      <nav className="space-y-0.5" aria-label="문서 목록">
        {docs.map((doc) => {
          const href = `/tutorial/${course}/${doc.slug}`;
          const isActive = pathname === href;
          return (
            <Link
              key={doc.slug}
              href={href}
              className={cn(
                "block rounded px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-gray-100"
                  : "text-muted-foreground hover:bg-gray-100 hover:text-foreground",
              )}
            >
              {doc.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
