import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import {Button} from "@/components/ui/button";

export const NavBar = () => {
    return (
        <>
            <nav className="h-15 flex items-center justify-between p-4 border-b bg-black text-white shadow-sm">
                {/* Левая часть: иконка */}
                <div className="flex items-center gap-2">
                    <Image src="/logo200.png" alt="logo" height="30" width="30" />
                </div>

                {/* Правая часть: ссылки */}
                <div className="flex gap-6 text-sm font-medium text-gray-700">
                    <Button asChild>
                        <a href="https://docs.codebattles.ru">Документация</a>
                    </Button>
                    <Button asChild>
                        <a href="https://github.com/codebattles-nn">GitHub</a>
                    </Button>
                </div>
            </nav>
        </>
    );
};

