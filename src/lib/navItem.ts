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
				link: "https://wiki.libertylife.ovh/tutos/touches"
			},
		]
	},
	{
		label: "Règlement",
		link: "#",
		children: [
			{
				label: "Légal",
				link: "https://wiki.libertylife.ovh/reglement/legal"
			},
			{
				label: "Illégal",
				link: "https://wiki.libertylife.ovh/reglement/illegal"
			},
			{
				label: "SASP",
				link: "https://wiki.libertylife.ovh/reglement/sasp"
			},
			{
				label: "SAMS",
				link: "https://wiki.libertylife.ovh/reglement/sams"
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