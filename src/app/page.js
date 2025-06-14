import {BigHeader} from "@/components/BigHeader";
import {NavBar} from "@/components/NavBar";
import {Features} from "@/components/Features";
import {SubMain} from "@/components/SubMain";
import {Footer} from "@/components/Footer";

export default function Home() {
    return (
       <>
           <NavBar />
           <BigHeader />
           <SubMain />
           <Features />
           <div className="h-30" />
           <Footer />
       </>
    );
}
