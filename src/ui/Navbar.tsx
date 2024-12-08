"use client";
import Image from "next/legacy/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { navItems } from "@/lib/navItem";
import { NavItem } from "@/lib/definition";

export default function Navbar() {
	const [animationParent] = useAutoAnimate();
	const [isSideMenuOpen, setSideMenu] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	function openSideMenu() {
		setSideMenu(true);
	}

	function closeSideMenu() {
		setSideMenu(false);
	}

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div  className={`fixed top-0 left-0 right-0 z-50 py-1 transition-all ${
			isScrolled ? "md:bg-fond md:bg-opacity-90" : "bg-transparent"
		  }`}>
			<div className="mx-auto max-w-7xl px-4 flex justify-between items-center">
				<Link href="/">
					<Image src="/logo.png" alt="Logo" width={70} height={70} />
				</Link>

				<section ref={animationParent} className="flex items-center gap-10">
					<div className="hidden md:flex items-center gap-4">
						{navItems.map((d, i) => (
							<span key={i} className="relative group px-2 transition-all ">
								{d.children ? (
									<p className={`flex cursor-pointer items-center gap-2 ${isScrolled ? "text-black" : "text-white"} group-hover:text-blue-400`}>
										<span>{d.label}</span>
										<IoIosArrowDown className="rotate-0 transition-all group-hover:rotate-180" />
									</p>
								) : (
									<Link href={d.link ?? "#"} className={`flex cursor-pointer items-center gap-2  ${isScrolled ? "text-black" : "text-white"} group-hover:text-blue-400`}>
										<span>{d.label}</span>
									</Link>
								)}
								{d.children && (
									<div className="absolute right-0 top-6 hidden w-auto flex-col gap-1 rounded-lg bg-white bg-opacity-90 py-3 shadow-md transition-all group-hover:flex">
										{d.children.map((ch, i) => (
											<Link key={i} href={ch.link ?? "#"}
												className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:text-blue-400">
												{ch.iconImage && (
													<Image src={ch.iconImage} alt="item-icon" width={20} height={20} />
												)}
												<span className="whitespace-nowrap pl-3">{ch.label}</span>
											</Link>
										))}
									</div>
								)}
							</span>
						))}
					</div>
				</section>

				<section className="hidden md:flex items-center gap-8">
					<a href="/dashboard" className={`h-fit rounded-xl border-2  ${isScrolled ? "text-black border-black" : "text-white border-white"} px-4 py-2  hover:border-blue-400 hover:text-blue-400`}>
						Panel
					</a>
				</section>

				<FiMenu onClick={openSideMenu} className="cursor-pointer text-4xl md:hidden text-white" />
			</div>

			{isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
		</div>
	);
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
	return (
		<div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end  md:hidden">
			<div className="h-full w-[65%] bg-white bg-opacity-90 px-4 py-4">
				<section className="flex justify-end">
					<AiOutlineClose onClick={closeSideMenu} className="cursor-pointer text-4xl text-black" />
				</section>
				<div className="flex flex-col text-black gap-2 transition-all">
					{navItems.map((d, i) => (
						<SingleNavItem key={i} label={d.label} iconImage={d.iconImage} link={d.link}>
							{d.children}
						</SingleNavItem>
					))}
				</div>

				<section className="flex flex-col gap-8 mt-4 items-center">
					<button className="w-full max-w-[200px] rounded-xl border-2 border-black px-4 py-2 text-black hover:border-black hover:text-black">
						Panel
					</button>
				</section>
			</div>
		</div>
	);
}

function SingleNavItem(d: NavItem) {
	const [animationParent] = useAutoAnimate();
	const [isItemOpen, setItem] = useState(false);

	function toggleItem() {
		return setItem(!isItemOpen);
	}

	return (
		<>
			{d.children ? (
				<span ref={animationParent} onClick={toggleItem} className="relative px-2 py-3 transition-all">
					<p className="flex cursor-pointer items-center gap-2 text-black">
						<span>{d.label}</span>
						{d.children && (
							<IoIosArrowDown className={`text-xs transition-all ${isItemOpen && "rotate-180"}`} />
						)}
					</p>

					{isItemOpen && d.children && (
						<div className="w-auto flex-col gap-1 rounded-lg bg-dark bg-opacity-90 py-3 transition-all flex">
							{d.children.map((ch, i) => (
								<Link key={i} href={ch.link ?? "#"} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black">
									{ch.iconImage && <Image src={ch.iconImage} alt="item-icon" width={20} height={20} />}
									<span className="whitespace-nowrap pl-3">{ch.label}</span>
								</Link>
							))}
						</div>
					)}
				</span>
			) : (
				<Link ref={animationParent} onClick={toggleItem} href={d.link ?? "#"} className="relative px-2 py-3 transition-all">
					<p className="flex cursor-pointer items-center gap-2 text-black">
						<span>{d.label}</span>
						{d.children && (
							<IoIosArrowDown className={`text-xs transition-all ${isItemOpen && "rotate-180"}`} />
						)}
					</p>
				</Link>
			)}

		</>
	);
}
