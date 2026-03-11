import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ScrollReveal direction="up" delay={0}>
        <About />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0}>
        <Services />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0}>
        <Process />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0}>
        <WhyUs />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0}>
        <Gallery />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0}>
        <Contact />
      </ScrollReveal>
      <ScrollReveal direction="none" delay={0}>
        <Footer />
      </ScrollReveal>
      <FloatingActions />
    </main>
  );
}
