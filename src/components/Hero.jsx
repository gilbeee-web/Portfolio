import { ArrowRight, Download } from "lucide-react";

export default function Hero({id}){

    return (

        <div className="max-w-[80%] mx-auto mt-22 scroll-mt-24" id={id}>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-25">

                <div className="">
                    <div className="mt-[16px]">
                        <h1 className="text-4xl text-center lg:text-start leading-[36px] lg:leading-[64px] lg:text-7xl font-bold font-sans">
                        Turning business processes into <span className="text-blue-500">simple, reliable software.</span>
                        </h1>
                    </div>

                    <div className="mt-[24px]">
                        <p className="text-lg text-center lg:text-xl lg:text-start text-gray-500 font-sans">
                           I'm <span className="font-bold text-blue-500">Gilbert Sta. Maria</span> — a Junior Full-Stack Developer focused on business applications, process automation, and data-driven systems.
                        </p>
                    </div>

                    <div className="mt-[32px] flex flex-col gap-y-5 md:flex-row gap-x-8 items-center">
                        <a href="#projects" className="bg-blue-500 hover:bg-blue-400 rounded-lg text-white text-sm lg:text-lg font-semibold px-3 py-2 lg:py-5 lg:px-8 flex gap-x-1 items-center cursor-pointer">
                            View My Projects <span><ArrowRight size={15}/></span> 
                        </a>

                        <button className="bg-white border border-gray-400 hover:bg-gray-50 rounded-lg font-semibold text-sm md:text-lg px-3 py-2 lg:py-5 lg:px-8 flex gap-x-1 items-center cursor-pointer">
                            Download CV <span><Download size={15}/></span> 
                        </button>
                    </div>
                </div>

                <div>
                    <div className="relative p-5 bg-blue-50 rounded-lg border border-blue-50 min-w-60 min-h-80 md:min-w-150 md:min-h-150">

                        <div className="absolute bg-white border border-gray-200 top-2 md:top-5 left-[-25px] p-2 md:p-5 rounded-lg text-center">
                            <h1 className="text-xs md:text-sm text-gray-500 font-mono"><span className="font-bold text-md md:text-xl text-black">3+</span> Projects Shipped</h1>
                        </div>

                        <div className="flex justify-center items-center">
                            <img 
                                className="object-contain w-[250px] h-[250px] md:w-[450px] md:h-[450px]"
                                src="/images/developer-profile.png" 
                                alt="Developer profile" 
                            />
                        </div>


                        <div className="absolute bg-white border border-gray-200 bottom-15 md:bottom-10 right-[-25px] p-2 md:p-5 rounded-lg text-center">
                            <h1 className="text-xs md:text-sm text-gray-500 font-mono"><span className="font-bold text-md md:text-xl text-black">1+</span> Year Experience</h1>
                        </div>

                        <div className="absolute bg-white border border-gray-200 bottom-[-20px] left-[15px] p-2 md:p-5 rounded-lg text-center">
                            <h1 className="text-xs md:text-sm text-gray-500 font-mono"><span className="font-bold text-md md:text-xl text-black"></span> BSIT Graduate</h1>
                        </div>

                        


                    </div>
                    
                </div>


            </div>
        </div>

    )



}