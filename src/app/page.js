import {BigHeader} from "@/components/BigHeader";
import {NavBar} from "@/components/NavBar";
import {Features} from "@/components/Features";
import {SubMain} from "@/components/SubMain";
import {Footer} from "@/components/Footer";
import {ImageSliderChapter} from "@/components/ImageSliderChapter";
import {ProgramingLangChapter} from "@/components/ProgramingLangChapter";

export default function Home() {
    return (
       <>
           <NavBar />
           <BigHeader />
           <SubMain />
           {/*<ProgramingLangChapter />*/}
           <ImageSliderChapter />
           <Features />
           <div className="h-30" />
           <Footer />
       </>
    );
}
