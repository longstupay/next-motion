import { Footer, NavBar } from "@/components";
import DotNav from "@/components/DotNav";
import Landing from "@/sections/Landing";
import useMediaQuery from "@/utils/hooks/useMediaQuery";

export default function Home() {
  return (
    <div className="app relative bg-deep-blue">
      <NavBar />
      <main className="h-full">
        <DotNav />
        <section id="home" className="mx-auto w-5/6 md:h-full">
          <Landing />
        </section>
        <section id="skills" className=" h-screen">
          2
        </section>
        <section id="projects" className="mt-24 h-screen">
          3
        </section>
        <section id="testimonials" className="mt-24 h-screen">
          4
        </section>
        <section id="contact" className="mt-24 h-screen">
          5
        </section>
      </main>
      <Footer />
    </div>
  );
}
