"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("splash_shown");

    if (!hasVisited) {
      setIsVisible(true);

      const fadeTimer = setTimeout(() => {
        setIsFading(true);
      }, 1500);

      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("splash_shown", "true");
      }, 2000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-white transition-opacity duration-500 ease-in-out ${
        isFading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/icons/favicon.svg"
          alt="webstoryboy"
          width={72}
          height={78}
          style={{ width: "72px", height: "78px" }}
          priority
        />
        <span className="font-paperlogy uppercase font-black text-xl text-brand tracking-widest">
          webstoryboy
        </span>
      </div>
    </div>
  );
}
