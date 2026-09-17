import { Brain, Code, Goal, Lightbulb } from "lucide-react"

export default function About({id}){

    function AboutDescription({ number, title, icon: Icon, text }) {
        return (
            <div className="w-full flex gap-x-10">
                <h1 className="font-mono text-2xl font-bold text-blue-500">
                    {number}
                </h1>

                <div>
                    <div className="flex items-center gap-x-3">
                        <h1 className="md:text-2xl font-semibold">
                            {title}
                        </h1>

                        <div>
                            <Icon size={25} />
                        </div>
                    </div>

                    <p className="text-sm text-gray-500 md:text-lg">
                        {text}
                    </p>
                </div>
            </div>
        );
    }



    return(

        <div className="max-w-[80%] mx-auto mt-22 scroll-mt-24" id={id}>
            
            <div className="flex flex-col gap-y-10 md:flex-row gap-x-15 items-center">

                <div className="md:max-w-200">
                    <div>
                        <h1 className="font-semibold text-sm md:text-lg">ABOUT ME</h1>
                    </div>
                    
                    <div className="mt-[16px] w-full">
                        <h1 className="text-3xl md:text-5xl font-bold">Building software <span className="text-blue-500">with purpose.</span></h1>
                    </div>

                    <div className="mt-12 md:max-w-200">
                        <p className="text-lg md:text-xl leading-8 md:leading-10">
                            I'm Gilbert Sta. Maria, a BSIT fresh graduate and aspiring <span className="font-semibold">Full-Stack Developer.</span>
                        </p>
                        <p className="mt-4 text-lg leading-8 md:leading-7">
                            I build practical web applications that turn real-world problems into simple, useful solutions. My experience includes developing business management systems, government information systems, and educational applications using technologies like Laravel, React, Vue, Inertia, and Tailwind CSS.
                        </p>

                        <p className="mt-4 text-lg leading-8 md:leading-7">
                            I care about writing maintainable code, creating thoughtful user experiences, and building software that solves problems—not just software that works.
                        </p>
                    </div>

                </div>

                <div className="grid grid-cols-2 gap-[56px]">

                    <div className="space-y-8">
                        <AboutDescription 
                            number={"01"}
                            title={"Problem Solver"}
                            text={"Understand the problem before building the solution."}
                            icon={Lightbulb}
                        />

                        <AboutDescription 
                            number={"03"}
                            title={"Continuous Learner"}
                            text={"Improve through projects and hands-on experience."}
                            icon={Brain}
                        />
                       
                    </div>
                    

                    <div className="space-y-8">

                        
                        <AboutDescription 
                            number={"02"}
                            title={"Clean & Practical"}
                            text={"Write code that's simple to understand and maintain."}
                            icon={Code}
                        />

                        <AboutDescription 
                            number={"04"}
                            title={"User-Focused"}
                            text={"Build systems that are useful and easy to use."}
                            icon={Goal}
                        />
                    </div>
                </div>

            </div>

        </div>

    )


}