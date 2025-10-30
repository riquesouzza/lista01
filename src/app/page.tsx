import Agendamento from "@/app/_landingPage/agendamento";
import Sobre from "@/app/Sobre/Sobre";
import Nav from "@/app/herosection/Nav";
import Hero from "@/app/herosection/Hero";

export default function HomePage() {
  return (
    <>
    <Nav />
    <Hero />
      <main>
        <Sobre />
        <Agendamento />
      </main>
    </>
  );
}