import { Suspense } from "react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { loadMdx, mdxRemoteOptions } from "@/lib/mdx";
import { courseDocList, courseIds, courseTitles, type CourseId } from "@/lib/tutorial/config";

import TutorialToc from "@/components/tutorial/tutorial-toc";
import { PreWithCopy } from "@/components/tutorial/code-block-copy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string; slug: string }>;
}): Promise<Metadata> {
  const { course, slug } = await params;
  if (!courseIds.includes(course as CourseId)) return {};
  const doc = await loadMdx(course as CourseId, slug);
  if (!doc) return {};
  const title = (doc.frontmatter.title as string) ?? slug;
  const description = (doc.frontmatter.description as string) ?? undefined;
  const keywords = doc.frontmatter.keywords as string[] | string | undefined;
  const courseTitle = courseTitles[course as CourseId];
  return {
    title: `${title} | ${courseTitle}`,
    description: description ?? undefined,
    keywords: Array.isArray(keywords) ? keywords.join(", ") : keywords,
  };
}

export function generateStaticParams() {
  const params: { course: string; slug: string }[] = [];
  for (const course of courseIds) {
    const docs = courseDocList[course];
    for (const doc of docs) {
      params.push({ course, slug: doc.slug });
    }
  }
  return params;
}

interface TutorialDocPageProps {
  params: Promise<{ course: string; slug: string }>;
}

export default async function TutorialDocPage({
  params,
}: TutorialDocPageProps) {
  const { course, slug } = await params;
  if (!courseIds.includes(course as CourseId)) notFound();

  const doc = await loadMdx(course as CourseId, slug);
  if (!doc) notFound();

  return (
    <div className="flex gap-8 p-6">
      <article className="min-w-0 flex-1 py-4">
        <div className="tutorial-prose">
          <Suspense
            fallback={
              <div className="animate-pulse text-muted-foreground">
                로딩 중...
              </div>
            }
          >
            <MDXRemote
              source={doc.raw}
              options={mdxRemoteOptions}
              components={{ pre: PreWithCopy }}
            />
          </Suspense>
        </div>
      </article>
      <TutorialToc toc={doc.toc} />
    </div>
  );
}
