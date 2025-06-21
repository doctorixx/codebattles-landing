import {cn} from "@/lib/utils";
import React from "react";
import {Button} from "@/components/ui/button";
import Link from 'next/link'
import {getTranslation} from "@/lib/getTranslation";

export default async function NotFound() {
    const t = getTranslation("en")

    return (
        <div
            className="relative flex h-[100dvh] flex-col w-full items-center justify-center bg-white dark:bg-black p-10">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:20px_20px]",
                    "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                    "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
                )}/>
            {/* Radial gradient for the container to give a faded look */}
            <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            <p
                className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-2 text-4xl font-bold text-red-400 sm:text-7xl">
                {t.not_found.title}
            </p>
            <p
                className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
                {t.not_found.subtitle}
            </p>
            <Button className="z-20" size="lg">
                <Link href="/">{t.not_found.homeBtn}</Link>
            </Button>
        </div>
    );
}
