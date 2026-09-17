import { ArrowUpRight, Dot, Mail, MapPin, PhoneCall } from "lucide-react"

export default function Contact({id}){

    const contacts = [
        {
            id: 1,
            type: "Email",
            icon: Mail,
            value: "gilbertstamaria58@gmail.com"
        },
        {
            id: 2,
            type: "Phone number",
            icon: PhoneCall,
            value: "+63 981 5170381"
        },
        {
            id: 3,
            type: "Address",
            icon: MapPin,
            value: "Nueva Ecija, Philippines"
        }
    ];

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

        <section className="w-full bg-blue-50 mt-22 scroll-mt-24" id={id}>

            <div className="w-[80%] py-12 mx-auto">
                
                <div className="flex justify-between">
                    <h1 className="text-md font-mono font-semibold">CONTACT</h1>
                    
                    <div className="bg-white px-8 h-10 rounded-full flex gap-x-2 items-center text-center">
                        <div className="rounded-full h-5 w-5 bg-gray-300 flex items-center justify-center" >
                            <div className="rounded-full bg-green-500 h-3 w-3" />
                        </div>
                        <h1 className="text-lg font-bold text-blue-500 font-mono">Available for new projects</h1>
                    </div>
                </div>
                
                
                <div className="mt-4">
                    <h1 className="font-semibold text-5xl leading-15">
                        Let's build something <br /> <span className="text-blue-500">meaningful together.</span> 
                    </h1>
                </div>

                <div className="mt-4">
                    <p className="text-lg">
                        I’m currently available for freelance work. 
                        <br />
                        Let’s discuss how can I help your business grow.
                    </p>
                </div>

                <div className="mt-8">
                    <div className="flex flex-col gap-y-5">
                        {
                            socials.map((social) => (

                                <div 
                                    className="border-t border-gray-300 flex justify-between py-3 px-3 cursor-pointer hover:bg-white" 
                                    key={social.id}
                                >

                                    <div className="flex gap-x-8 items-center">
                                        <h1 className="font-mono font-semibold text-gray-500 text-lg">
                                            0{social.id}
                                        </h1>

                                        <div className="bg-white min-h-12 w-12 rounded-full flex items-center justify-center">
                                            {
                                                social.type === "Email" ? <social.img size={25}/>
                                                : <img src={social.img} alt={`${social.type} logo`}  className="object-contain h-10 w-10"/> 
                                            }
                                        </div>

                                        <h1 className="capitalize text-2xl font-bold">
                                            {social.type}
                                        </h1>

                                        <p className="text-sm text-gray-500">
                                        {social.value} 
                                        </p>
                                    </div>

                                    <div className="flex justify-center items-center">
                                        <a href="">
                                           <ArrowUpRight size={25} strokeWidth={1} />
                                        </a>
                                    </div>
                                    
                                    

                                </div>
                            ))
                        }


                        <div className="border-t border-gray-300 pt-5">
                            <div className="flex gap-x-2 items-center">
                                <MapPin />
                                <h1 className="font-mono font-semibold text-gray-500">Philippines</h1>
                                <Dot />
                                <h1 className="font-mono font-semibold text-gray-500">
                                    Remote-friendly worldwide
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        

            
            
        </section>

    )



}