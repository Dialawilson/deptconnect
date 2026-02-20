import Features from "@/componnets/Feature/Features";
import Hero from "@/componnets/Hero/Hero";
import Activities from "@/componnets/Activities/Activities";
import Simplifed from "@/componnets/Simplified/Simplified";
import Started from "@/componnets/started/started"
import BGimg from '@/assets/img/pagentry.jpg';


export default function Home() {
  return (
    <>
    <section className="max-w-7xl mx-auto">
      <Hero />
      <div className="max-w-7xl mx-auto  my-12">
        <Features/>
      </div>
      <div className="max-w-7xl mx-auto  my-12">
        <Activities/>
      </div>
      <div className="max-w-7xl mx-auto px-10 my-12 bg-gray-50/50">
        <Simplifed/>
      </div>
      <div className="max-w-7xl overflow-hidden bg-cover bg-center relative min-h-[400px] flex items-center justify-center text-center mx-auto px-10 my-12 " style={{ backgroundImage: `url(${BGimg.src})` , backgroundPosition:'center top'}}>
        <Started/>
      </div>

    </section>
    </>
  );
}
