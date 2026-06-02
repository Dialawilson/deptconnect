import Features from "@/componnets/Feature/Features";
import Hero from "@/componnets/Hero/Hero";
import ActivitiesComponent from "@/componnets/activities/Activities";
import Simplifed from "@/componnets/Simplified/Simplified";
import Started from "@/componnets/started/started"
import BGimg from '@/assets/img/pagentry.jpg';
import QuickStats from "@/componnets/Quick_Stats/QuickStats";


export default function Home() {
  return (
    <>
    <section className=" ">
      <Hero />
      <div className="max-w-7xl mx-auto  my-12">
        <Features/>
      </div>
      <div className="max-w-7xl mx-auto  my-12">
        <ActivitiesComponent/>
      </div>
      <div>
        <QuickStats/>
      </div>
      <div className="max-w-7xl mx-auto px-10 my-12 bg-gray-50/50">
        <Simplifed/>
      </div>
      <div className="max-w-7xl overflow-hidden bg-cover bg-center relative min-h-100 flex items-center justify-center text-center mx-auto px-10 my-12 " style={{ backgroundImage: `url(${BGimg.src})` , backgroundPosition:'center top'}}>
        <Started/>
      </div>
      <div>
        {/* <Btn/> */}
      </div>

    </section>
    </>
  );
}
