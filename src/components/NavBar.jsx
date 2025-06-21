import Image from "next/image";
import {Button} from "@/components/ui/button";
import {getTranslation} from "@/lib/getTranslation";
import Link from 'next/link'

export const NavBar = ({lang}) => {

    const t = getTranslation(lang)

    return (
        <>
            <nav className="h-15 flex items-center justify-between p-4 border-b bg-black text-white shadow-sm">
                {/* Левая часть: иконка */}
                <div className="flex items-center gap-10">
                    <Image src="/logo200.png" alt="logo" height="30" width="30" />
                    <Button asChild>
                        <Link href={t.OTHER_LANG_URL}>
                            {t.changeTranslation}
                        </Link>
                    </Button>
                </div>

                {/* Правая часть: ссылки */}
                <div className="flex gap-6 text-sm font-medium text-gray-700">
                    <Button asChild>
                        <a href="https://docs.codebattles.ru">{t.docs}</a>
                    </Button>
                    <Button asChild>
                        <a href="https://github.com/codebattles-nn">{t.github}</a>
                    </Button>
                </div>
            </nav>
        </>
    );
};

