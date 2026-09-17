import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar(){


    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <nav className="w-full sticky top-0 bg-white h-20 py-6 z-50 border border-gray-50 shadow-xs">
            
            <div className="mx-auto max-w-[80%] px-8 flex justify-between items-center">

                {/* Logo */}
                <a
                    href="#hero"
                    className="font-mono text-blue-500 text-lg font-semibold"
                >
                    GilbeeDev
                </a>

                {/* Desktop Nav bar */}
                <div className="hidden md:flex gap-x-8 items-center">

                    <a href="#about" className="font-mono hover:opacity-60">
                        About
                    </a>

                    <a href="#skills" className="font-mono hover:opacity-60">
                        Stacks
                    </a>

                    <a href="#projects" className="font-mono hover:opacity-60">
                        Projects
                    </a>

                    <a href="#services" className="font-mono hover:opacity-60">
                        Services
                    </a>

                    <a
                        href="#contact"
                        className="px-3 py-2 bg-blue-500 rounded-md hover:opacity-60 flex gap-x-2 items-center"
                    >
                        <span className="text-white font-mono font-semibold ">Let's Talk</span>
                        <ArrowRight size={15} color="white" strokeWidth={2}/>
                    </a>

                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden cursor-pointer"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-20 left-0 right-0 h-[calc(100vh-80px)] w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden ${
                    isOpen ? "translate-y-0" : "-translate-y-full hidden"
                }`}
            >
                <div className="flex flex-col p-8 gap-y-6">

                    <a
                        href="#about"
                        onClick={closeMenu}
                        className="font-mono text-lg"
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        onClick={closeMenu}
                        className="font-mono text-lg"
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        onClick={closeMenu}
                        className="font-mono text-lg"
                    >
                        Projects
                    </a>

                    <a
                        href="#services"
                        onClick={closeMenu}
                        className="font-mono text-lg"
                    >
                        Services
                    </a>

                    <a
                        href="#contact"
                        onClick={closeMenu}
                        className="font-mono text-lg"
                    >
                        Contacts
                    </a>

                </div>
            </div>

        </nav>
    )


}