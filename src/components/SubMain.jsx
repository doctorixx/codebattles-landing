import {getTranslation} from "@/lib/getTranslation";

export const SubMain = ({lang}) => {
    const t = getTranslation(lang);

    return (
        <div className='text-center my-40 mx-10'>
            <h3 className="text-2xl text-center my-4">
                {t.subChapter_info}
            </h3>
            <a
                className="w-40 h-10 rounded-xl p-3 bg-black border dark:border-white border-transparent text-white text-sm hover:text-black hover:bg-white transition duration-350"
                href="http://docs.codebattles.ru"
                target="_blank"
            >
                {t.subChapter_toDocs}
            </a>
        </div>
    );
};

