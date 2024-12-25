
import Arrivals from "@/components/Arrival";
import DressStyle from "@/components/drassstyle";
import HappyCustomers from "@/components/happycustomer";
import Hero from "@/components/hero";
// import Hero from "@/components/hero";
import LogoBar from "@/components/herobuttom";

import Selling from "@/components/selling";

export default function Home() {
  return (
  <>
  <Hero/>
  <LogoBar/>
  <div className="md:px-[10%] ">
 <Arrivals/>
  <Selling/> 
  <DressStyle/>
  <HappyCustomers/>
  </div>
  </>
  );
}
