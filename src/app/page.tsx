import Agendamento from "@/app/_landingPage/agendamento";
import Sobre from "@/app/_landingPage/Sobre";
import Nav from "@/app/_components/Nav";
import Beneficios from "@/app/_landingPage/beneficios";
import Hero from "@/app/_landingPage/Hero";

export default function HomePage() {
  return (
    <>
    <Nav />
    <Hero />
      <main>
        <Sobre />
        <br></br>
        <Beneficios />
        <br></br>
        <Agendamento />
      </main>
    </>
  );
}