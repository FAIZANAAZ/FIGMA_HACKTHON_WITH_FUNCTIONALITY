import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export default async function Hero() {
    const res = await client.fetch(`*[_type=='landingpage'][1]{'frontWebImage':sections[0].frontWebImage.asset->url}`);

    const { frontWebImage } = res;
    
    return (
        <section className="w-full h-auto bg-[#F2F0F1] flex flex-col md:flex-row justify-between font-sans">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center items-start gap-4 sm:gap-6 p-6 sm:p-8 md:px-[100px] lg:px-[120px] xl:px-[140px]">
                <h1 className="text-black text-2xl sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-extrabold leading-tight sm:leading-8 md:leading-[1.2] lg:leading-[64px] mb-2 sm:mb-3 md:mb-5 font-integral">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className="text-sm sm:text-[16px] leading-snug sm:leading-[22px] text-[#00000099] mb-3 sm:mb-5 font-satoshi">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </p>
               <div className="w-full justify-center items-center"><Link href="/Product"> <button className="w-full sm:w-[358px] md:w-[210px] h-[52px] flex justify-center items-center px-4 sm:px-[54px] py-4 bg-black text-white rounded-[62px] hover:bg-gray-800 mb-6 sm:mb-[38px]">
                    Shop Now
                </button></Link></div>
            </div>                                

            {/* Right Background */}
            <div className="relative overflow-hidden w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[700px] md:flex-1 flex justify-center items-center">
                <Image
                    src={frontWebImage}
                    alt="hero image"
                    fill
                    className="object-contain md:object-cover"
                />
                <Image
                    src={"/star.png"}
                    alt={"star image"}
                    width={56}
                    height={56}
                    className="hidden lg:block absolute lg:left-10 lg:top-[40%]"
                />
                <Image
                    src={"/star.png"}
                    alt={"star image"}
                    width={104}
                    height={104}
                    className="hidden lg:block absolute lg:top-[10%] right-3 sm:right-5"
                />
            </div>
        </section>
    );
}
