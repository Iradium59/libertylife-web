import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type NavItem = {
    label: string;
    link?: string;
    children?: NavItem[];
    iconImage?: string;
}

export interface TeamMember {
    name: string;
    role: string;
    grade: string;
}


export type Guild = {
    id: string;
    name: string;
    icon: string;
    permissions: string;
};


export interface Item {
    icon: IconDefinition;
    label: string;
    href?: string;
    child?: SubItem[];
}

export interface SubItem {
    href: string;
    icon: IconDefinition;
    label: string;
}
