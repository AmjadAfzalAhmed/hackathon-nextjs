
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeSection2 from "@/components/HomeSection2";
import HomeSection3 from "@/components/HomeSection3";
import HomeSection4 from "@/components/HomeSection4";
import HomeSection5 from "@/components/HomeSection5";
import HomeSection6 from "@/components/HomeSection6";
import HomeSection7 from "@/components/HomeSection7";
import HomeSection8 from "@/components/HomeSection8";
import HomeSection9 from "@/components/HomeSection9";


export default function Home() {
  return (
    <main className="w-[1920px] h-[8479px] bg-[#0d0d0d]">  
    <Hero />
    <HomeSection2 />
    <HomeSection3 />
    <HomeSection4 />
    <HomeSection5 />
    <HomeSection6 />
    <HomeSection7 />
    <HomeSection8 />
    <HomeSection9 />
    <div className='absolute top-[7759px]'>      
    <Footer  />    

    </div>
    </main>
  );
}
