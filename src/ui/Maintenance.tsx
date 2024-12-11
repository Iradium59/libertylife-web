'use client';

import Image from 'next/image';

export default function Maintenance() {
    return (
        <div className="flex items-center justify-center h-screen bg-backgroundDark">
            <div className="text-center p-8 rounded-lg ">
                {/* <Image
                    src="/assets/gta-construction.png"
                    alt="GTA RP Under Maintenance"
                    width={200}
                    height={200}
                    className="mx-auto mb-4"
                /> */}

                <h1 className="text-4xl font-extrabold text-yellow-500 mb-4">
                    🚧 Site en maintenance 🚧
                </h1>

                <p className="text-gray-300 text-lg mb-6">
                    Des travaux sont en cours.
                    <br />
                    Revenez plus tard pour découvrir les nouveautés !
                </p>

                <p className="text-sm text-gray-500">
                    Pour toute question, contactez-nous sur discord !.
                </p>
            </div>
        </div >
    );
}
