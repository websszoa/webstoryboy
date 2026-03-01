import Link from "next/link";
import { courseIds, courseTitles } from "@/lib/tutorial/config";

export default function TutorialPage() {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-semibold text-foreground mb-2">
        튜토리얼
      </h1>
      <p className="text-muted-foreground mb-8">
        코스를 선택하면 강의 목록과 문서를 볼 수 있습니다.
      </p>
      <ul className="grid gap-4 sm:grid-cols-2">
        {courseIds.map((id) => (
          <li key={id}>
            <Link
              href={`/tutorial/${id}`}
              className="block rounded-lg border border-gray-200 bg-card p-6 transition-colors hover:bg-muted/50 hover:border-gray-300"
            >
              <span className="font-medium text-foreground">
                {courseTitles[id]}
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">
                강의 문서 보기 →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
