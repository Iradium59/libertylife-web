import Wave from "./Wave";
import Image from "next/image";

export default function SectionSeparator({image} : {image: string}) {
    return (
        <div className="relative w-full h-[800px]">
            {/* Vague du haut */}
            <div className="absolute top-0 left-0 w-full z-20">
                <Wave color="rgb(234,234,234)" top={true} />
            </div>

            {/* Image de fond */}
            <div className="absolute inset-0 w-full h-full z-10">
                <Image
                    src={image} // Assurez-vous que l'image est dans le dossier public
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="z-10"
                />
            </div>

            {/* Vague du bas */}
            <div className="absolute bottom-80 left-0 w-full z-20">
                <Wave color="rgb(234,234,234)" top={false} />
            </div>
        </div>
    )
}