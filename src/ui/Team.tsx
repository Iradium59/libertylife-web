"use client";
import SectionTitle from "./SectionTitle";
import teams from "@/data/team.json";
import Image from "next/image";
import { useState } from "react";
import { TeamMember } from "@/lib/definition";

export default function Team() {
    const [hoveredMember, setHoveredMember] = useState<string | null>(null);
    const [filterValue, setFilterValue] = useState("all");

    // Extraire dynamiquement les rôles présents dans le JSON
    const roles = Array.from(new Set(teams.map((member) => member.role)));

    // Regrouper les membres par rôle
    const groupedTeams = teams.reduce<Record<string, TeamMember[]>>((grouped, member) => {
        if (!grouped[member.role]) {
            grouped[member.role] = [];
        }
        grouped[member.role].push(member);
        return grouped;
    }, {});

    // Filtrer les membres selon le filtre sélectionné
    const filteredTeams =
        filterValue === "all"
            ? groupedTeams
            : Object.fromEntries(
                  Object.entries(groupedTeams).filter(([role]) => role === filterValue)
              );

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterValue(e.target.value); // Met à jour la valeur du filtre
    };

    return (
        <>
            <SectionTitle title="L'équipe" subTitle="Rencontrez notre équipe talentueuse" />

            {/* Barre de filtres dynamiques */}
            <div className="flex justify-center mt-8">
                <div className="shadow-lg flex">
                    {/* Filtre "Tous" */}
                    <label htmlFor="all" className="flex items-center">
                        <input
                            type="radio"
                            id="all"
                            name="teamFilter"
                            value="all"
                            className="hidden peer"
                            checked={filterValue === "all"} // Input contrôlé
                            onChange={handleFilterChange} // Met à jour la valeur de l'input
                        />
                        <span className="peer-checked:bg-blue-500 peer-checked:text-white px-4 py-2 rounded-md cursor-pointer transition-colors duration-200">
                            Tous
                        </span>
                    </label>

                    {/* Génération dynamique des filtres */}
                    {roles.map((role) => (
                        <label key={role} htmlFor={role} className="flex items-center">
                            <input
                                type="radio"
                                id={role}
                                name="teamFilter"
                                value={role}
                                className="hidden peer"
                                checked={filterValue === role} // Input contrôlé
                                onChange={handleFilterChange} // Met à jour la valeur de l'input
                            />
                            <span className="peer-checked:bg-blue-500 peer-checked:text-white px-4 py-2 rounded-md cursor-pointer transition-colors duration-200">
                                {role.charAt(0).toUpperCase() + role.slice(1)} {/* Capitalisation */}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Affichage des membres filtrés */}
            <div className="flex flex-col items-center mt-6">
                {Object.entries(filteredTeams).map(([teamName, members], teamIndex) => (
                    <div key={teamIndex} className="mb-6 w-full">
                        <div className="flex flex-wrap justify-center gap-6">
                            {members.map((member, memberIndex) => (
                                <div key={memberIndex} className="flex flex-col items-center">
                                    <Image
                                        src={
                                            hoveredMember === member.name
                                                ? `/team/active/${member.name.toLowerCase()}.png`
                                                : `/team/${member.name.toLowerCase()}.png`
                                        }
                                        alt={member.name}
                                        className="rounded-full transition-transform duration-300"
                                        width={200}
                                        height={200}
                                        onMouseEnter={() => setHoveredMember(member.name)}
                                        onMouseLeave={() => setHoveredMember(null)}
                                    />
                                    <h2 className="font-bold font-lg mt-2 text-gray-800">
                                        {member.name}
                                    </h2>
                                    <p className="italic text-gray-600 text-medium">
                                        {member.grade}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
