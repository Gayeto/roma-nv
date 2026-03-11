import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import QuienesSomos from "@/components/sections/QuienesSomos";
import Diferenciador from "@/components/sections/Diferenciador";
import Servicios from "@/components/sections/Servicios";
import Clientes from "@/components/sections/Clientes";
import Proyectos from "@/components/sections/Proyectos";
import Metodologia from "@/components/sections/Metodologia";
import IntroLoader from "@/components/ui/IntroLoader";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <Navbar />
      <main>
        <Hero />
        <QuienesSomos />
        <Diferenciador />
        <Servicios />
        <Clientes />
        <Proyectos />
        <Metodologia />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
