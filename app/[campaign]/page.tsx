import { campaigns } from "@/data/content";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";



export default async function LandingPage({params}: { params: Promise<{ campaign: string }>}) {
    const resolvedParams = await params;
    const slug = resolvedParams.campaign;

    console.log("====== SLUG NA URL: ", slug);
    const data = campaigns[slug as keyof typeof campaigns];
    console.log("====== DADOS ACHADOS: ", data);

    if(!data) {
        notFound();
    }

    return (
        <main>
            <Hero {...data.hero}></Hero>
        </main>
    )
}