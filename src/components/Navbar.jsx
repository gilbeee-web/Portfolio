import { ArrowRight, Menu, Moon, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar(){

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <nav 
            className={`w-full sticky top-0 h-20 py-5 z-50 bg-white dark:bg-gray-950 dark:text-white transition-colors duration-300 ${
                isScrolled
                    ? "border-b border-gray-200 dark:border-gray-800"
                    : "border-b border-transparent"
            }`}
        >
            
            <div className="mx-auto max-w-4xl md:max-w-5xl lg:max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">

                {/* Logo */}
                <a
                    href="#hero"
                    className="font-mono text-lg md:text-xl font-bold"
                >
                    Gil<span className="text-blue-500">Dev</span>
                </a>

                {/* Desktop Nav bar */}
                <div className="hidden lg:flex gap-x-8 items-center">

                    <a href="#about" className="font-mono font-bold text-lg text-gray-500 hover:bg-gray-100 hover:text-black rounded-full py-2 px-4 dark:text-white">
                        About
                    </a>

                    <a href="#skills" className="font-mono font-bold text-lg text-gray-500 hover:bg-gray-100 hover:text-black rounded-full py-2 px-4 dark:text-white">
                        Stacks
                    </a>

                    <a href="#projects" className="font-mono font-bold text-lg text-gray-500 hover:bg-gray-100 hover:text-black rounded-full py-2 px-4 dark:text-white">
                        Projects
                    </a>

                    <a href="#services" className="font-mono font-bold text-lg text-gray-500 hover:bg-gray-100 hover:text-black rounded-full py-2 px-4 dark:text-white">
                        Services
                    </a>
                </div>

                <div className="flex gap-x-5 items-center">
                    <a
                        href="#contact"
                        className="hidden md:flex px-5 py-3 bg-blue-500 rounded-full hover:bg-blue-400 flex gap-x-2 items-center"
                    >
                        <span className="text-white font-semibold text-sm lg:text-lg">Let's Talk</span>
                        <ArrowRight 
                            className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" 
                            color="white" 
                            strokeWidth={2}
                        />
                    </a>

                    <ThemeToggle />
                    
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"/> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />}
                    </button>

                </div>

                

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