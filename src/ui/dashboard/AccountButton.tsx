'use client';
import { useSession, signOut } from 'next-auth/react';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FaSun, FaMoon } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function AccountButton() {
    const { data: session, status } = useSession();
    const [loading, setLoading] = useState(true);
    const [menuVisible, setMenuVisible] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    // const router = useRouter();

    useEffect(() => {
        if (status !== "loading") {
            setLoading(false);
        }
    }, [status]);

    // useEffect(() => {
    //     if (session && session.user && !session.user.isInGuild) {
    //         // Rediriger l'utilisateur vers l'invitation Discord si pas membre
    //         router.push('https://discord.gg/faYVcgPApd'); // Remplace par ton lien d'invitation
    //     }
    // }, [session, router]);

    // Charger le thème depuis le localStorage
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') setDarkMode(true);
    }, []);

    // Appliquer le thème sur le document
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    // Gérer la fermeture du menu en dehors du clic
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current && !menuRef.current.contains(event.target as Node) &&
                buttonRef.current && !buttonRef.current.contains(event.target as Node)
            ) {
                setMenuVisible(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className={`mt-auto border-t ${darkMode ? 'border-slate-800' : 'border-gray-300'} px-2 py-2`}>
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                    {loading ? (
                        <p className={`text-sm ${darkMode ? 'text-white' : 'text-black'}`}>Loading...</p>
                    ) : session?.user ? (
                        <>
                            {session.user.image && (
                                <Image
                                    src={session.user.image}
                                    alt={`${session.user.name}'s avatar`}
                                    className="h-8 w-8 rounded-full"
                                    width={32}
                                    height={32}
                                />
                            )}
                            <div>
                                <p className={`text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{session.user.name}</p>
                                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>{session.user.id}</p>
                            </div>
                        </>
                    ) : (
                        <p className="text-sm text-red-400">Please log in</p>
                    )}
                </div>
                <button
                    ref={buttonRef}
                    className={`relative ml-auto flex h-6 w-6 items-center justify-center rounded-full ${darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-200'}`}
                    onClick={() => setMenuVisible((prev) => !prev)}
                >
                    <FontAwesomeIcon icon={faEllipsisH} className={`h-4 w-4 ${darkMode ? 'text-white' : 'text-black'}`} />
                    {menuVisible && (
                        <div
                            ref={menuRef}
                            className={`absolute bottom-7 left-0 z-10 mt-2 w-48 rounded-lg ${darkMode ? 'bg-slate-950' : 'bg-white'} text-left text-sm shadow-lg`}
                            onClick={(e) => e.stopPropagation()} 
                        >
                            <div className="p-1">
                            <div className={`flex items-center justify-between w-full px-3 py-2 rounded-md ${darkMode ? 'text-slate-300 hover:bg-slate-700 hover:text-slate-100' : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'}`}>
                                    <span>Theme</span>
                                    <div className="flex items-center">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                        <span className="mr-2">{darkMode ? <FaMoon /> : <FaSun />}</span>
                                            <input
                                                type="checkbox"
                                                className="sr-only peer"
                                                checked={darkMode}
                                                value={darkMode ? 'dark' : 'light'}
                                                onChange={() => setDarkMode(!darkMode)}
                                            />
                                            <div className={`w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer-checked:bg-blue-600 relative`}>
                                                <div className={`w-6 h-6 bg-white rounded-full absolute transition-all ${darkMode ? 'right-0' : 'left-0'}`}></div>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <div className={`my-2 h-[1px] bg-gradient-to-r from-transparent via-${darkMode ? 'slate-600' : 'gray-400'} to-transparent`}></div>

                                <div className={`flex w-full items-center gap-2 px-3 py-2 ${darkMode ? 'text-slate-300 hover:bg-slate-700 hover:text-slate-100' : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'}`}>
                                    <Link href="/" className="hover:text-blue-500">
                                        Profil
                                    </Link>
                                </div>
                                <div className={`flex w-full items-center gap-2 px-3 py-2 ${darkMode ? 'text-slate-300 hover:bg-slate-700 hover:text-slate-100' : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'}`}>
                                    <span onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })} className="hover:text-blue-500">
                                        Quitter
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
}
