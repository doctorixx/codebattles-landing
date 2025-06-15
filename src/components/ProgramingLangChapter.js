import React from "react";
import {FlipWords} from "@/components/ui/flip-words";

export function ProgramingLangChapter() {
    const words = ["Python", "Java", "КуМир", "C++", "Pascal"];

    return (
        <div className="h-60 flex justify-center items-center px-4">
            <div
                className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                Соревнуйтесь на
                <FlipWords words={words} duration="2000" /> <br />
                <p>С помощью Codebattles</p>
            </div>
        </div>
    );
}
