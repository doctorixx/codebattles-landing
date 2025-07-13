import React from "react";
import {FlipWords} from "@/components/ui/flip-words";
import {getTranslation} from "@/lib/getTranslation";

export function ProgramingLangChapter({lang}) {
    const t = getTranslation(lang);

    const words = ["Python", "Java", "КуМир", "C++", "Pascal"];

    return (
        <div className="h-60 flex justify-center items-center px-4 overflow-hidden text-center">
            <div
                className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
               {t.competition_on}
                <br/>
                <div className="flex justify-center">
                  <FlipWords words={words} duration="2000" /> <br />
                </div>
                <p>{t.with_codebattles}</p>
            </div>
        </div>
    );
}
