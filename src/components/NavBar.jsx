import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export const NavBar = () => {
    return (
        <>
            <nav className="flex items-center justify-between p-4 border-b bg-black text-white shadow-sm">
                {/* Левая часть: иконка */}
                <div className="flex items-center gap-2">
                    <Image src="/logo200.png" alt="logo" height="30" width="30" />
                </div>

                {/* Правая часть: ссылки */}
                <div className="flex gap-6 text-sm font-medium text-gray-700">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <a href="/docs">Документация</a>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <a href="/docs">Репозиторий задач</a>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <a href="/docs">Гитхаб</a>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </nav>
        </>
    );
};

