import Agendamento from "@/app/_landingpage/agendamento";
import Sobre from "@/app/_landingPage/Sobre";
import Nav from "@/app/_components/Nav";
import Hero from "@/app/_landingpage/Hero";
import Beneficios from "@/app/_landingPage/beneficios";

export default function HomePage() {
  return (
    <>
    <Nav />
    <Hero />
      <main>
        <Sobre />
          <br></br>
          <br></br>
        <Beneficios />
        <Agendamento />
      </main>
    </>
  );
}