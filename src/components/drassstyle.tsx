import Image from "next/image";

export default function DressStyle() {
    return (
        <section id="drassstyless" className="w-full max-w-[1239px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 flex flex-col items-center justify-center rounded-[20px] sm:rounded-[30px] md:rounded-[40px] bg-[#F0F0F0]">
            <h1 className="w-full max-w-[687px] font-integral text-2xl sm:text-3xl md:text-[48px] font-bold leading-tight sm:leading-snug md:leading-[57.6px] text-center uppercase mb-6 sm:mb-8 md:mb-10">
                BROWSE BY dress STYLE
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-[1200px]">
                <Image 
                    src={"/grid-p1.png"} 
                    alt="Casual dress style" 
                    width={407} 
                    height={289} 
                    className="col-span-1 w-full h-[190px] sm:h-[240px] md:h-[289px] rounded-[20px] object-cover hover:scale-105 transition-transform duration-300" 
                />
                <Image 
                    src={"/grid-p2.png"} 
                    alt="Formal dress style" 
                    width={684} 
                    height={289} 
                    className="col-span-1 sm:col-span-2 w-full h-[190px] sm:h-[240px] md:h-[289px] rounded-[20px] object-cover hover:scale-105 transition-transform duration-300" 
                />
                <Image 
                    src={"/grid-p3.png"} 
                    alt="Party dress style" 
                    width={684} 
                    height={289}  
                    className="col-span-1 sm:col-span-2 w-full h-[190px] sm:h-[240px] md:h-[289px] rounded-[20px] object-cover hover:scale-105 transition-transform duration-300"
                />
                <Image 
                    src={"/grid-p4.png"} 
                    alt="Gym dress style" 
                    width={407} 
                    height={289} 
                    className="col-span-1 w-full h-[190px] sm:h-[240px] md:h-[289px] rounded-[20px] object-cover hover:scale-105 transition-transform duration-300" 
                />
            </div>
        </section>
    );
}

