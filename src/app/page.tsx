
import Arrivals from "@/components/Arrival";
import DressStyle from "@/components/drassstyle";
import HappyCustomers from "@/components/happycustomer";
import Hero from "@/components/hero";
// import Hero from "@/components/hero";
import LogoBar from "@/components/herobuttom";
import Selling from "@/components/selling";
import { GetMethod } from "@/services/shipment";


export default async function Home() {
  try {
    const GetDataApi = await GetMethod();

    if (!GetDataApi || !Array.isArray(GetDataApi.carriers) || GetDataApi.carriers.length === 0) {
      throw new Error("Invalid or empty data received from API");
    }

    const carrierId = GetDataApi.carriers[0].carrier_id;
    
    const serviceCode = GetDataApi.carriers[0].services;
    const serviceCodeArray = serviceCode.map((item: any) => item.service_code);

    return (
      <>
  <Hero/>
  <LogoBar/>
  <div className="md:px-[100px] ">
 <Arrivals/>
  <Selling/> 
  <DressStyle/>
  <HappyCustomers/>
  </div>
  </>
    );
  } catch (error) {
    console.error("Error in Home component:", error);
    return <div>Error loading data. Please try again later.</div>;
  }
}