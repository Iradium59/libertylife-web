import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

export const metadata: Metadata = {
  title: "LibertyLife",
  description: "Bienvenue sur Liberty City, la ville où vous serez libre d'être qui vous voulez ! Rejoignez le conflit opposant l'ombre et la lumière",
  authors: [{name: "Iradium", url: "https://samuel-def.fr"}],
  keywords: ["LibertyLife", "Liberty City", "Liberty Life", "LibertyCity", "Liberty", "City", "Life", "Roleplay", "RP", "GTA", "V", "FiveM", "Five", "M", "GTA V", "GTA FiveM", "GTA RP", "GTA Roleplay", "Roleplay GTA"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics/>
        <SpeedInsights />
      </body>
    </html>
  );
}
