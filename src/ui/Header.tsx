import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Image de fond */}
            <Image
                src="/bg.png"
                alt="Background"
                fill
                style={{ objectFit: "cover" }}
                className="absolute top-0 left-0 w-full h-full"
                quality={100}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h1 className="text-6xl font-bold mb-5 text-black font-thin uppercase">Liberty Life</h1>
                <p className="test mb-8 text-black uppercase tracking-widestp text-xl font-thin">
                    <span className="inline-block">R</span>
                    <span className="inline-block">e</span>
                    <span className="inline-block">j</span>
                    <span className="inline-block">o</span>
                    <span className="inline-block">i</span>
                    <span className="inline-block">g</span>
                    <span className="inline-block">n</span>
                    <span className="inline-block">e</span>
                    <span className="inline-block">z</span>
                    <span className="inline-block">&nbsp;</span>
                    <span className="inline-block">l</span>
                    <span className="inline-block">e</span>
                    <span className="inline-block">&nbsp;</span>
                    <span className="inline-block">c</span>
                    <span className="inline-block">o</span>
                    <span className="inline-block">n</span>
                    <span className="inline-block">f</span>
                    <span className="inline-block">l</span>
                    <span className="inline-block">i</span>
                    <span className="inline-block">t</span>
                    <span className="inline-block">&nbsp;</span>
                    <span className="inline-block">o</span>
                    <span className="inline-block">p</span>
                    <span className="inline-block">p</span>
                    <span className="inline-block">o</span>
                    <span className="inline-block">s</span>
                    <span className="inline-block">a</span>
                    <span className="inline-block">n</span>
                    <span className="inline-block">t</span>
                    <span className="inline-block">&nbsp;</span>
                    <span className="inline-block">l</span>
                    <span className="inline-block">'</span>
                    <span className="inline-block">o</span>
                    <span className="inline-block">m</span>
                    <span className="inline-block">b</span>
                    <span className="inline-block">r</span>
                    <span className="inline-block">e</span>
                    <span className="inline-block">&nbsp;</span>
                    <span className="inline-block">e</span>
                    <span className="inline-block">t</span>
                    <span className="inline-block">&nbsp;</span>
                    <span className="inline-block">l</span>
                    <span className="inline-block">a</span>
                    <span className="inline-block">&nbsp;</span>
                    <span className="inline-block">l</span>
                    <span className="inline-block">u</span>
                    <span className="inline-block">m</span>
                    <span className="inline-block">i</span>
                    <span className="inline-block">è</span>
                    <span className="inline-block">r</span>
                    <span className="inline-block">e</span>
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/#projet" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">Découvrir</Link>
                </div>
            </div>
        </div>
    );
}
