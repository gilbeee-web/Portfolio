import { Copyright, Mail } from "lucide-react"

export default function Footer(){

    const socials = [
        {
            id: 1, 
            type: "Email",
            img: Mail,
            value: "gilbertstamaria58@gmail.com"
        },
        {
            id: 2, 
            type: "Facebook",
            img: "/images/logo/fb.png",
            value: "https://www.facebook.com/gilbert.stamaria.52"
        },
        {
            id: 3, 
            type: "GitHub",
            img: "/images/logo/github.png",
            value: "https://github.com/gilbeee-web"
        },
         {
            id: 4, 
            type: "LinkedIn",
            img: "/images/logo/linkedin.png",
            value: "https://www.youtube.com/watch?v=lbSPw7f3FxI&list=RDMMQS04WbSnxok&index=2"
        },
    ]

    return(

        <section className="max-w-4xl md:max-w-5xl lg:max-w-7xl px-4 sm:px-6 md:p-8 lg:px-8 mx-auto mt-12 lg:mt-22 scroll-mt-24">
            
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                
                {/* large devices */}
                <div className="hidden lg:flex gap-x-8 items-center">

                    <a href="#about" className="font-mono text-sm md:text-md lg:text-lg font-semibold text-gray-500 dark:text-gray-200 hover:opacity-60">
                        About
                    </a>

                    <a href="#skills" className="font-mono text-sm md:text-md lg:text-lg font-semibold text-gray-500 dark:text-gray-200 hover:opacity-60">
                        Stacks
                    </a>

                    <a href="#projects" className="font-mono text-sm md:text-md lg:text-lg font-semibold text-gray-500 dark:text-gray-200 hover:opacity-60">
                        Projects
                    </a>

                    <a href="#services" className="font-mono text-sm md:text-md lg:text-lg font-semibold text-gray-500 dark:text-gray-200 hover:opacity-60">
                        Services
                    </a>

                    <a
                        href="#contact"
                        className="font-mono font-semibold text-sm md:text-md lg:text-lg text-gray-500 dark:text-gray-200 hover:opacity-60"
                    >
                        Contact
                    </a>

                </div>

                {/* small-medium devices */}
                <div className="lg:hidden flex flex-col md:flex-row md:gap-x-5 gap-y-3">

                    <div className="space-x-5">
                        <a href="#about" className="font-mono text-sm md:text-md lg:text-lg font-semibold text-gray-500 dark:text-gray-200 hover:opacity-60">
                            About
                        </a>

                        <a href="#skills" className="font-mono text-sm md:text-md lg:text-lg font-semibold text-gray-500 dark:text-gray-200 hover:opacity-60">
                            Stacks
                        </a>

                        <a href="#projects" className="font-mono text-sm md:text-md lg:text-lg font-semibold text-gray-500 dark:text-gray-200 hover:opacity-60">
                            Projects
                        </a>
                    </div>
                    
                    <div className="space-x-5">
                        <a href="#services" className="font-mono text-sm md:text-md lg:text-lg font-semibold text-gray-500 dark:text-gray-200 hover:opacity-60">
                            Services
                        </a>

                        <a
                            href="#contact"
                            className="font-mono font-semibold text-gray-500 dark:text-gray-200 hover:opacity-60"
                        >
                            Contact
                        </a>
                    </div>
                
                </div>

                <div className="mt-8 flex gap-x-3 lg:gap-x-5 lg:justify-center items-center">

                    {
                        socials.map((social) => (
                            <div 
                                className="bg-white border border-gray-200 md:h-8 md:w-8 lg:h-12 lg:w-12 p-2 rounded-full flex items-center justify-center cursor-pointer"
                                key={social.id}
                            >
                                {
                                    social.type === "Email" ? <social.img className="dark:text-black object-contain h-5 w-5 md:w-8 md:h-8  lg:h-10 lg:w-10"/>
                                    : <img src={social.img} alt={`${social.type} logo`}  className="object-contain h-5 w-5 md:w-8 md:h-8 lg:h-10 lg:w-10"/> 
                                }
                            </div>
                        ))
                    }
                    
                </div>

            </div>

            <div className="mt-8 flex gap-x-2 items-center border-t border-gray-200 py-5">
                <Copyright size={15} strokeWidth={1}/>
                <h1 className="text-sm md:text-md lg:text-lg font-mono text-gray-500 font-semibold dark:text-gray-200">2025 Gilbert Sta.Maria</h1>
            </div>

            
        </section>
    )

}