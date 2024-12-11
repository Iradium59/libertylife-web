"use client";
import { faTachometerAlt, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "@/ui/dashboard/MenuItem";
import AccountButton from "./AccountButton";
import Image from "next/image";

export default function Sidebar() {
	const menuItems = [
		{
			icon: faTachometerAlt,
			label: "Dashboard",
			child: [
				{ href: "#page1", icon: faNewspaper, label: "Page 1" },
				{ href: "#page2", icon: faNewspaper, label: "Page 2" },
			],
		},
		{ icon: faNewspaper, label: "Feed", href: "#feed", active: false },
	];

	return (
		<div className="flex h-screen w-[250px] flex-col bg-backgroundLight dark:bg-backgroundDark pt-10">
			<ul className="flex w-full flex-col gap-3 px-3">
				<div className="flex justify-center items-center mb-10">
					<Image src="/logo.png" width={150} height={150} alt="logo" />
				</div>
				{menuItems.map((item, index) => (
					<MenuItem key={index} item={item} />
				))}
			</ul>
			<AccountButton />
		</div>
	);
}
