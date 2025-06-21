import ru from "@/translation/ru.json"
import en from "@/translation/en.json"


export const getTranslation = (language) => {
    if (language === "ru") return ru
    if (language === "en") return en

    return en

}