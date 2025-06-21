import {redirect} from 'next/navigation'
import {headers} from "next/headers";

export default async function Home() {
    const headersList = await headers()
    const acceptLanguage = headersList.get('accept-language') || ""
    const language = acceptLanguage.startsWith('ru') ? 'ru' : 'en';

    redirect(`/${language}`)

    return <></>;
}
