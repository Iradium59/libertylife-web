import { NavItem } from "@/lib/definition";

export const navItems: NavItem[] = [
	{
		label: "Informations",
		link: "#",
		children: [
			{
				label: "Les entreprises",
				link: "#"
			},
			{
				label: "Les Gangs / Groupes",
				link: "#"
			},
			{
				label: "Les Touches",
				link: "#"
			},
		]
	},
	{
		label: "Règlement",
		link: "#",
		children: [
			{
				label: "Légal",
				link: "#"
			},
			{
				label: "Illégal",
				link: "#"
			},
			{
				label: "SASP",
				link: "#"
			},
			{
				label: "SAMS",
				link: "#"
			},
		]
	},
	{
		label: "Autre",
		link: "#",
		children: [
			{
				label: "Launcher",
				link: "#"
			}
		]
	},
	{
		label: "Lives",
		link: "#"
	}
];