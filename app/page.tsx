import { Footer, NavBar } from "@/components";
import { Banner, Service } from "@/sections";

export default function Home() {
  return (
    <div className="lg:mx-32">
      <NavBar />
      <div>
        <Banner />
        <Service />
      </div>
      <Footer />
    </div>
  );
}
