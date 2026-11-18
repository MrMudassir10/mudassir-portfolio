import { ChatWidget } from "@/components/ChatWidget";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About, Contact, Experience, Faq, Footer, Help, Process, Proof, Services, Skills, Ticker } from "@/components/Sections";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main className="wrap" id="top">
        <Hero />
        <Ticker />
        <Proof />
        <Help />
        <Work />
        <Services />
        <Process />
        <Skills />
        <Experience />
        <About />
        <Faq />
        <Contact />
        <Footer />
      </main>
      <ChatWidget />
    </>
  );
}
