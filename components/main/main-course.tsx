import Image from "next/image";
import Link from "next/link";
import { mainCourseSectionItems } from "@/lib/course";

export default function MainCourse() {
  return (
    <div className="main__course font-nanumNeo mb-20 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {mainCourseSectionItems.map((course, index) => {
          const isReady = !("comingSoon" in course && course.comingSoon);
          const cardContent = (
            <>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h2 className="text-xl font-paperlogy">{course.title}</h2>
                <div className="flex items-center gap-1.5 shrink-0">
                  {!("comingSoon" in course && course.comingSoon) && course.level && (
                    <div className="inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] text-zinc-600 font-nanumNeo">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      {course.level}
                    </div>
                  )}
                  {"comingSoon" in course && course.comingSoon && (
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground font-nanumNeo">
                      준비중
                    </span>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                {course.description}
              </p>
              {course.skillCards && course.skillCards.length > 0 && (
                <div className="flex gap-2">
                  {course.skillCards.map((skillCard, skillIndex) => (
                    <Image
                      key={skillIndex}
                      src={skillCard.icon.src}
                      width={20}
                      height={20}
                      alt={skillCard.icon.alt}
                    />
                  ))}
                </div>
              )}
            </>
          );

          const cardClass =
            "border rounded-xl p-4 font-nanumNeo transition-shadow block " +
            (isReady
              ? "hover:shadow-md hover:border-red-500 cursor-pointer"
              : "opacity-90 cursor-default");

          if (isReady && "src" in course && course.src) {
            return (
              <Link key={index} href={course.src} className={cardClass}>
                {cardContent}
              </Link>
            );
          }

          return (
            <div key={index} className={cardClass}>
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
}
