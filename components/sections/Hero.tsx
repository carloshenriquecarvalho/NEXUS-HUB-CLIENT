interface HeroProps {
    title: string;
    subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
    return (
        <section>
            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
        </section>
    )
}