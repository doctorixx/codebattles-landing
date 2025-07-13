"use client";
import React from "react";
import {BackgroundBeams} from "@/components/ui/background-beams";
import {getTranslation} from "@/lib/getTranslation";

export function BackgroundBeamsDemo({lang}) {
  const t = getTranslation(lang);

  return (
    <div
      className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <BackgroundBeams text={t.check_demo}/>
    </div>
  );
}
