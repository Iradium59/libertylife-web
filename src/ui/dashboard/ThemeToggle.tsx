"use client";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from 'react-icons/fa6';

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") setDarkMode(true);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);
    return (
        <div
            className="flex items-center space-x-2 bg-gray-50 text-sm font-medium rounded-md px-3 py-2 hover:bg-sky-100 hover:text-blue-600"
            onClick={() => setDarkMode(!darkMode)}
        >
            {darkMode ? <FaMoon /> : <FaSun />}
        </div>
    );
}