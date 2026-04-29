'use client'

import Button from "@/components/ui/Button";

interface HeroProps {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonUrl: string;
    imgUrl: string;
}

export default function Hero({ title, subtitle, buttonText, buttonUrl, imgUrl }: HeroProps) {
    return (
        <section 
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="w-full flex flex-col h-screen items-center justify-center bg-cover bg-center lg:bg-top" 
        >
            <div className="flex flex-col lg:px-20 items-center">
                <div className="flex flex-col px-10 gap-4 pr-40 lg:gap-4 lg:pr-180 sm:pr-110 ">
                    <h1 className="bold text-[56px] leading-12 text-title">{title}</h1>
                    <h2>{subtitle}</h2>
                    <Button text={buttonText} url={buttonUrl} />
                </div>
            </div>
        </section>
    )
}