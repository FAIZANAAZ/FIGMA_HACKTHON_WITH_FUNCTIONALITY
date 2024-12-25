import { TfiEmail } from "react-icons/tfi";
export default function NewsLetter() {
  return (
    <>
   <section className="md:px-[100px]">
   <div className="w-full  h-auto md:h-[180px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4  rounded-[20px] bg-black py-6 md:py-9 px-6 md:px-16">
        {/* left div */}
        <div className="flex-1 text-[24px] md:text-[40px] font-bold leading-[30px] md:leading-[45px] text-white font-integral text-center md:text-left">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </div>

        {/* right div */}
        <div className="flex-1 w-full md:w-[349px] h-auto md:h-[108px] flex flex-col items-center justify-center gap-4">
          <div className="relative w-full md:w-[349px] h-[46px] rounded-[62px] bg-white py-2 px-4">
            <span className="absolute inset-y-0 left-4 flex items-center text-[#00000066]">
              <TfiEmail />
            </span>
            <input
              type="email"
              className="w-full pl-10 pr-4 py-1 rounded-md border-none text-sm"
              placeholder="Enter your email"
            />
          </div>

          <div className="w-full md:w-[349px] h-[46px] flex items-center justify-center rounded-[62px] bg-white">
            <button className="text-[#000000] font-semibold text-sm">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
   </section>
    </>
  );
}
