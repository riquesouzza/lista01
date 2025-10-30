import Agendamento from "@/app/_landingPage/agendamento";
import Hero from "@/app/_landingPage/heroSection";
import Nav from "@/app/herosection/Nav";
import Hero from "@/app/herosection/Hero";

export default function HomePage() {
  return (
    <>
      <Nav/>
      <main>
       <Agendamento />
       <Hero/>
      </main>
    </>
  );
}