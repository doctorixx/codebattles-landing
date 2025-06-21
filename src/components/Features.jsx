import {
    IconAdjustmentsBolt,
    IconCloud,
    IconCurrencyDollar,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconRouteAltLeft,
    IconTerminal2,
} from "@tabler/icons-react";
import {getTranslation} from "@/lib/getTranslation";
import {Feature} from "@/components/ui-custom/feature";

export function Features({lang}) {
    const t = getTranslation(lang);

    const features = [
        {
            title: t.features.topProject.title,
            description: t.features.topProject.description,
            icon: <IconHeart />
        },
        {
            title: t.features.codeCheck.title,
            description: t.features.codeCheck.description,
            icon: <IconTerminal2 />
        },
        {
            title: t.features.easyStart.title,
            description: t.features.easyStart.description,
            icon: <IconEaseInOut />
        },
        {
            title: t.features.free.title,
            description: t.features.free.description,
            icon: <IconCurrencyDollar />
        },
        {
            title: t.features.selfHosted.title,
            description: t.features.selfHosted.description,
            icon: <IconCloud />
        },
        {
            title: t.features.openSource.title,
            description: t.features.openSource.description,
            icon: <IconRouteAltLeft />
        },
        {
            title: t.features.support.title,
            description: t.features.support.description,
            icon: <IconHelp />
        },
        {
            title: t.features.flexibleConfig.title,
            description: t.features.flexibleConfig.description,
            icon: <IconAdjustmentsBolt />
        }
    ];

    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index}/>
            ))}
        </div>
    );
}
