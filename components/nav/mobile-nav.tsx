"use client";

import Link from "next/link";
import { TentTree } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { mobileMenuItems } from "@/lib/menu";
import { useSheet } from "@/contexts/sheet-context";

export default function MobileNav() {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const { setIsOpen } = useSheet();

  const handleMoreClick = (e: React.MouseEvent, href: string) => {
    if (href === "#more") {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  // 모바일일 경우: 하단 고정 아이콘+라벨 네비
  if (isMobile) {
    return (
      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background md:hidden">
        <div className="flex items-center justify-around px-2 py-2">
          {mobileMenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            const isMore = item.href === "#more";

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => isMore && handleMoreClick(e, item.href)}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 rounded-lg px-3 py-2 text-xs transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="font-nanumNeo">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    );
  }

  // PC일 경우: 하단 가운데, 제목만 + 해당 영역만 표시
  return (
    <nav className="fixed bottom-6 right-8 z-30 hidden md:flex justify-center pointer-events-none">
      <div className="pointer-events-auto bg-black px-7 py-3 rounded-full flex items-center gap-5">
        <TentTree className="size-4.5 text-white shrink-0" aria-hidden />
        {mobileMenuItems.map((item) => {
          const isActive = pathname === item.href;
          const isMore = item.href === "#more";

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => isMore && handleMoreClick(e, item.href)}
              className={cn(
                "text-sm font-anyvid transition-colors",
                isActive
                  ? "text-white font-medium"
                  : "text-white/60 hover:text-white hover:opacity-100",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
