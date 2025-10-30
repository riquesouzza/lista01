import Agendamento from "@/app/_landingpage/agendamento";
import Sobre from "@/app/_landingpage/Sobre";
import Nav from "@/app/_components/Nav";
import Hero from "@/app/_landingpage/Hero";

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