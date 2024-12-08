import SectionSeparator from './SectionSeparator';
import Wave from './Wave'; // Si tu utilises le même composant pour les vagues

export default function Footer() {
    return (
        <>
            <SectionSeparator image="/bg2.jpg" />
            <div className="w-full font-thin py-8">
                {/* Contenu du footer */}
                <div className="flex justify-between items-center px-6">
                    {/* Copyright à gauche */}
                    <p className="text-lg text-[#8d8d8d]">Copyright © 2024 LibertyLife.</p>

                    {/* Liens à droite */}
                    <div className="flex gap-6">
                        <a href="/about" className="hover:underline">À propos</a>
                        <a href="/contact" className="hover:underline">Contact</a>
                        <a href="/privacy" className="hover:underline">Politique de confidentialité</a>
                    </div>
                </div>
            </div>
        </>

    );
}
