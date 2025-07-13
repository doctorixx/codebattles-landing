import {BigHeader} from "@/components/BigHeader";
import {NavBar} from "@/components/NavBar";
import {Features} from "@/components/Features";
import {SubMain} from "@/components/SubMain";
import {Footer} from "@/components/Footer";
import {ImageSliderChapter} from "@/components/ImageSliderChapter";
import {getTranslation} from "@/lib/getTranslation";
import {BackgroundBeamsDemo} from "@/components/VideoChapter";
import {ProgramingLangChapter} from "@/components/ProgramingLangChapter";
import {StatefulButtonDemo} from "@/components/WriteInTelegramSection";

export default async function Home(args) {
    const { params } = await args
    const { lang } = await params

    return (
        <>
            <NavBar lang={lang}/>
            <BigHeader lang={lang}/>
            <SubMain lang={lang}/>
            <ImageSliderChapter lang={lang}/>
            <Features lang={lang}/>
            <BackgroundBeamsDemo lang={lang}/>
            <ProgramingLangChapter lang={lang}/>
            <StatefulButtonDemo lang={lang}/>
            <div className="h-30"/>
            <Footer lang={lang}/>
        </>
    );
}
