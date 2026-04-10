import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ServiceArea from "@/components/ServiceArea";
import ForLandowners from "@/components/ForLandowners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ServiceArea />
        <ForLandowners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
