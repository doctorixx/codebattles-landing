"use client";

import React from "react";
import { Button } from "@/components/ui/stateful-button";
import {redirect} from "next/navigation";
import {getTranslation} from "@/lib/getTranslation";

export function StatefulButtonDemo({lang}) {
  const t = getTranslation(lang);

  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 200);
      redirect("https://t.me/doctorixx")
    });
  };
  return (
    <div className="flex h-20 w-full items-center justify-center">
      <Button onClick={handleClick}>{t.write_in_tg}</Button>
    </div>
  );
}