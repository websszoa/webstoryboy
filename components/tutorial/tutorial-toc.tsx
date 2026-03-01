import Link from "next/link";
import type { TocItem } from "@/lib/mdx";

interface TutorialTocProps {
  toc: TocItem[];
}

export default function TutorialToc({ toc }: TutorialTocProps) {
  if (toc.length === 0) return null;

  return (
    <aside className="w-52 shrink-0 hidden lg:block" aria-label="목차">
      <div className="sticky top-24">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          목차
        </h3>
        <ul className="space-y-1.5 text-sm">
          {toc.map((item) => (
            <li
              key={item.id}
              style={{ paddingLeft: item.depth === 3 ? "0.75rem" : 0 }}
            >
              <Link
                href={`#${item.id}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
