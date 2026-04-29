import { campaigns } from "@/data/content";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/landing/Hero";


export default async function LandingPage({params}: { params: Promise<{ campaign: string }>}) {
    const resolvedParams = await params;
    const slug = resolvedParams.campaign;

    const data = campaigns[slug as keyof typeof campaigns];

    if(!data) {
        notFound();
    }

    return (
        <main>
            <Hero {...data.hero}></Hero>
        </main>
    )
}