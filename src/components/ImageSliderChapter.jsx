"use client";
import { motion } from "motion/react";
import React from "react";
import {ImagesSlider} from "@/components/ui/images-slider";
import {Button} from "@/components/ui/button";
import {getTranslation} from "@/lib/getTranslation";


export function ImageSliderChapter({lang}) {
    // const images = [
    //     "https://docs.codebattles.ru/~gitbook/image?url=https%3A%2F%2F1527359246-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FJAUsvmB78I2ZCHp8dXqy%252Fuploads%252FHTffuvdPZkfuPsqdsXTO%252Fimage.png%3Falt%3Dmedia%26token%3Db0be020d-57db-4457-b8e9-982c4d8bb791&width=768&dpr=4&quality=100&sign=7a6cfc24&sv=2",
    //     "https://docs.codebattles.ru/~gitbook/image?url=https%3A%2F%2F1527359246-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FJAUsvmB78I2ZCHp8dXqy%252Fuploads%252Fo2fb1jOZIaS0610B7ljS%252Fimage.png%3Falt%3Dmedia%26token%3D7cf652b1-7e1d-4b3f-a7c9-876480615a18&width=768&dpr=4&quality=100&sign=e703ec2f&sv=2",
    //     "https://docs.codebattles.ru/~gitbook/image?url=https%3A%2F%2F1527359246-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FJAUsvmB78I2ZCHp8dXqy%252Fuploads%252F4L59CpdPnLcSpc8D39PC%252Fimage.png%3Falt%3Dmedia%26token%3D19ab62f1-901f-4d9e-a452-694da9f3308a&width=768&dpr=4&quality=100&sign=a4a91f2a&sv=2",
    //     "https://docs.codebattles.ru/~gitbook/image?url=https%3A%2F%2F1527359246-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FJAUsvmB78I2ZCHp8dXqy%252Fuploads%252FEXwaUiHae88CZDdJArRz%252Fimage.png%3Falt%3Dmedia%26token%3Df98407c6-b97e-46fd-9441-d9c47d670b93&width=768&dpr=4&quality=100&sign=91ec1288&sv=2"
    // ];
    //

    const t = getTranslation(lang);

    const images = [
        "/previews/1.jpg",
        "/previews/2.jpg",
        "/previews/3.jpg",
        "/previews/4.jpg",
        ];
    return (
        <ImagesSlider className="h-60 md:h-[40rem]" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center">
                <motion.p
                    className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    {t.slides_title}<br /> {t.slides_subTitle}
                </motion.p>

                <Button asChild>
                    <a href="https://github.com/codebattles-nn/codebattles" target="_blank">Github</a>
                </Button>
            </motion.div>
        </ImagesSlider>
    );
}
