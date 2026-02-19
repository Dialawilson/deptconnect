import Features from "@/componnets/Feature/Features";
import Hero from "@/componnets/Hero/Hero";
import Activities from "@/componnets/Activities/Activities";
import Simplifed from "@/componnets/Simplified/Simplified";

export default function Home() {
  return (
    <>
    <section className="max-w-7xl mx-auto">
      <Hero />
      <div className="max-w-7xl mx-auto px-10 my-12">
        <Features/>
      </div>
      <div className="max-w-7xl mx-auto px-10 my-12">
        <Activities/>
      </div>
      <div className="max-w-7xl mx-auto px-10 my-12 bg-gray-50/50">
        <Simplifed/>
      </div>
    </section>
    </>
  );
}
