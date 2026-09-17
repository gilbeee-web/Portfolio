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

        <div className="w-full mt-16 scroll-mt-18 mb-5">
            <div className="w-[80%] mx-auto">

                <div className="flex justify-between items-center">

                    <div className="flex gap-x-5 items-center">

                        <a href="#about" className="font-mono font-semibold text-gray-500 hover:opacity-60">
                            About
                        </a>

                        <a href="#skills" className="font-mono font-semibold text-gray-500 hover:opacity-60">
                            Stacks
                        </a>

                        <a href="#projects" className="font-mono font-semibold text-gray-500 hover:opacity-60">
                            Projects
                        </a>

                        <a href="#services" className="font-mono font-semibold text-gray-500 hover:opacity-60">
                            Services
                        </a>

                        <a
                            href="#contact"
                            className="font-mono font-semibold text-gray-500 hover:opacity-60"
                        >
                            Contact
                        </a>

                    </div>

                    <div className="flex gap-x-5 items-center">

                        {
                            socials.map((social) => (
                                <div 
                                    className="bg-white border border-gray-200 min-h-12 w-12 rounded-full flex items-center justify-center cursor-pointer"
                                    key={social.id}
                                >
                                    {
                                        social.type === "Email" ? <social.img size={25}/>
                                        : <img src={social.img} alt={`${social.type} logo`}  className="object-contain h-10 w-10"/> 
                                    }
                                </div>
                            ))
                        }
                        
                    </div>

                </div>

                <div className="mt-8 flex gap-x-2 items-center border-t border-gray-200 py-5">
                    <Copyright size={15} strokeWidth={1}/>
                    <h1 className="font-mono text-gray-500 font-semibold">2025 Gilbert Sta.Maria</h1>
                </div>

            </div>
        </div>
    )

}