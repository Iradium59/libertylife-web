"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function MenuItem({ item }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<li>
			{item.child ? (
				<div>
					<button 
						onClick={() => setIsOpen(!isOpen)} 
						className="flex items-center justify-start gap-2 rounded-full px-3 py-2.5 text-sm font-medium text-textLight dark:text-textDark hover:bg-backgroundLight dark:hover:bg-backgroundDark">
						<FontAwesomeIcon icon={item.icon} />
						{item.label}
						<FontAwesomeIcon icon={faChevronDown} className="ml-auto" />
					</button>
					{isOpen && (
						<ul className="ml-6 mt-2 space-y-2">
							{item.child.map((subItem, index) => (
								<li key={index}>
									<Link href={subItem.href}>
										<div className="flex items-center gap-2 rounded-md px-3 py-2 text-textLight dark:text-textDark hover:bg-backgroundLight dark:hover:bg-backgroundDark">
											<FontAwesomeIcon icon={subItem.icon} />
											{subItem.label}
										</div>
									</Link>
								</li>
							))}
						</ul>
					)}
				</div>
			) : (
				<Link href={item.href || "#"}>
					<div className="flex items-center gap-2 rounded-full px-3 py-2.5 text-sm font-medium text-textLight dark:text-textDark hover:bg-backgroundLight dark:hover:bg-backgroundDark">
						<FontAwesomeIcon icon={item.icon} />
						{item.label}
					</div>
				</Link>
			)}
		</li>
	);
}
