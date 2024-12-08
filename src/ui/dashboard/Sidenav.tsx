"use client";
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type Section = {
	title: string;
	items: string[];
};

const sections: Section[] = [
	{
		title: "Informations",
		items: ["Identité", "Garages"],
	},
	{
		title: "Dévelopemment",
		items: ["Signalez un bug", "Faire une suggestions", "suivi"],
	},
	{
		title: "Settings",
		items: ["Profile", "Notifications", "Security"],
	},
];

export default function Sidenav() {
	const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
		{}
	);

	const toggleSection = (sectionTitle: string) => {
		setOpenSections((prev) => ({
			...prev,
			[sectionTitle]: !prev[sectionTitle],
		}));
	};

	return (
		<aside className="bg-gray-900 text-white w-72 min-h-screen p-6 shadow-lg">
			{/* Header */}
			<Image src={"/logo.png"} alt="Logo" width={250} height={200} />

			{/* Navigation */}
			<nav className="mt-10">
				{sections.map((section) => (
					<div key={section.title} className="">
						<button
							onClick={() => toggleSection(section.title)}
							className="flex items-center justify-between w-full p-3 text-left rounded-lg hover:bg-gray-700 transition"
						>
							<span className="text-lg font-medium">{section.title}</span>
							{openSections[section.title] ? (
								<ChevronUpIcon className="w-5 h-5" />
							) : (
								<ChevronDownIcon className="w-5 h-5" />
							)}
						</button>
						<ul
							className={`mt-2 space-y-2 pl-4 transition-all ${openSections[section.title] ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
								}`}
						>
							{section.items.map((item) => (
								<li key={item}>
									<a
										href={`#${item.toLowerCase()}`}
										className="block p-2 rounded-lg text-gray-300 hover:bg-teal-500 hover:text-white transition"
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>
				))}
			</nav>
		</aside>
	);
};

