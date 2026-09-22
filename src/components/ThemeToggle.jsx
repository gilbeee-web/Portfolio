import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle(){

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        const root = document.documentElement;

        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 sm:p-2 lg:p-3 border border-gray-300 shadow-sm rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle dark mode"
        >
            {darkMode ? (
                <Sun className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6"/>
            ) : (
                <Moon  className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6"/>
            )}
        </button>
    );


}