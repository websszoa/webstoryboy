import Image from "next/image";
import { courseMenuItems } from "@/lib/course";
import { ExternalLink } from "lucide-react";

export default function MainSite() {
  return (
    <div className="main__site pt-20">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 font-nanumNeo">
        {courseMenuItems.map((course, index) => (
          <div
            key={index}
            className="group relative border rounded-xl overflow-hidden hover:shadow-lg hover:border-red-500 transition-all duration-300"
          >
            <div className="relative w-full aspect-video bg-muted">
              <Image
                src={course.thumbnail}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <a
                href={course.site}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-red-500 hover:bg-red-600 px-4 py-2 text-white rounded-full font-nanumNeo text-sm font-medium flex items-center gap-2 shadow-lg group-hover:shadow-xl backdrop-blur-sm z-10 justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ExternalLink className="w-4 h-4" />
                실제 사이트 보기
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
