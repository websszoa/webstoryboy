import Link from "next/link";
import { Minus } from "lucide-react";
import { footerColumnMenus } from "@/lib/menu";

export default function FooterMenu() {
  return (
    <div className="hidden md:grid font-anyvid grid-cols-3 gap-4 mt-1 md:mt-12">
      {footerColumnMenus.map((column) => (
        <div key={column.title}>
          <h4 className="text-gray-800 dark:text-gray-200 mb-2 text-base">
            {column.title}
          </h4>
          <ul className="text-muted-foreground text-sm space-y-1">
            {column.items.map((item) => (
              <li key={item.href} className="flex items-center gap-2">
                <Minus
                  className="size-3.5 shrink-0 text-muted-foreground"
                  aria-hidden
                />
                <Link
                  href={item.href}
                  className="hover:text-brand transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
