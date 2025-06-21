import Image from "next/image";
import {Button} from "@/components/ui/button";
import {getTranslation} from "@/lib/getTranslation";
import Link from 'next/link'

export const NavBar = ({lang}) => {

    const t = getTranslation(lang)

    const LangButton = <Button asChild variant="secondary">
        <Link href={t.OTHER_LANG_URL}>
            {t.changeTranslation}
        </Link>
    </Button>

    const DocsButton = <Button asChild>
        <a href="https://docs.codebattles.ru">{t.docs}</a>
    </Button>

    const GithubButton = <Button asChild>
        <a href="https://github.com/codebattles-nn">{t.github}</a>
    </Button>


    return (
        <>
            {/* For desktop */}
            <nav className="sm:flex hidden h-15 items-center justify-between p-4 border-b bg-black text-white shadow-sm">
                {/* Левая часть: иконка */}
                <div className="flex items-center gap-10">
                    <Image src="/logo200.png" alt="logo" height="30" width="30"/>
                    {LangButton}
                </div>

                {/* Правая часть: ссылки */}
                <div className="flex gap-6 text-sm font-medium text-gray-700">
                    {DocsButton}
                    {GithubButton}
                </div>
            </nav>
            {/* For mobile */}
            <nav className="flex sm:hidden h-15 items-center justify-between p-4 border-b bg-black text-white shadow-sm">
                {/* Левая часть: иконка */}
                <div className="flex items-center gap-1">
                    <Image src="/logo200.png" alt="logo" height="30" width="30" className="mr-2"/>
                    {LangButton}
                    {DocsButton}
                    {GithubButton}
                </div>
            </nav>
        </>
    );
};

