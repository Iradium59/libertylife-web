export type NavItem = {
    label: string;
	link?: string;
	children?: NavItem[];
	iconImage?: string;
}

export interface TeamMember {
    name: string;
    role: string;
}
