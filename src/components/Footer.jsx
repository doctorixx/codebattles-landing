import React from 'react';
import {Separator} from "@/components/ui/separator";

export const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer>
            <Separator />
            <p className="text-center text-sm text-gray-400 p-2">© Doctorixx 2023-{year}</p>
        </footer>
    );
};
