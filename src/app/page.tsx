import Features from "@/componnets/Feature/Features";
import Hero from "@/componnets/Hero/Hero";

export default function Home() {
  return (
    <>
    <section className="max-w-7xl mx-auto">
      <Hero />
      <div className="max-w-7xl mx-auto px-10 my-12">
        <Features/>
      </div>
    </section>
    </>
  );
}
