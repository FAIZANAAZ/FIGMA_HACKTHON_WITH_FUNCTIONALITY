import Image from "next/image";

export default function LogoBar() {
    return (
        <div className="w-full h-auto min-h-[146px] md:h-[122px] bg-black flex flex-wrap items-center justify-around py-4 px-2 sm:px-4 md:px-6 lg:px-8">
            <Image src={"/barImage1.png"} alt="Brand Logo 1" width={166} height={33} className="m-2 sm:m-3 md:m-0" />
            <Image src={"/barImage2.png"} alt="Brand Logo 2" width={91} height={38} className="m-2 sm:m-3 md:m-0" />
            <Image src={"/barImage3.png"} alt="Brand Logo 3" width={156} height={36} className="m-2 sm:m-3 md:m-0" />
            <Image src={"/barImage4.png"} alt="Brand Logo 4" width={194} height={32} className="m-2 sm:m-3 md:m-0" />
            <Image src={"/barImage5.png"} alt="Brand Logo 5" width={206} height={33} className="m-2 sm:m-3 md:m-0" />
        </div>
    );
}

