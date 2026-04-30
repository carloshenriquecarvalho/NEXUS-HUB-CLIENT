import { Metadata } from "next";
import { hubContent } from "@/data/content";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HubHero from "@/components/sections/hub/HubHero";
import HubServices from "@/components/sections/hub/HubServices";
import HubAbout from "@/components/sections/hub/HubAbout";
import Benefits from "@/components/sections/landing/Benefits";
import Testimonials from "@/components/sections/landing/Testimonials";
import Faq from "@/components/sections/landing/Faq";

export const metadata: Metadata = {
  title: "Lumière Clínica | Estética Avançada e Bem-estar",
  description: "Clínica especializada em procedimentos estéticos de alto padrão, toxina botulínica, harmonização facial e muito mais.",
  openGraph: {
      title: "Lumière Clínica",
      description: "Descubra uma nova experiência em cuidado pessoal.",
      images: ["/hero-premium.png"],
  }
};

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
                <HubHero {...hubContent.hero} />
                <HubAbout {...hubContent.about} />
                <HubServices services={hubContent.services} />
                <Benefits {...hubContent.results} />
                <Testimonials {...hubContent.testimonials} />
                <Faq {...hubContent.faq} />
            </main>
            <Footer />
        </div>
    )
}
