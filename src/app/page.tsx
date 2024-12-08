import Navbar from "@/ui/Navbar";
import Header from "@/ui/Header";
import Timeline from "@/ui/Timeline";
import Team from "@/ui/Team";
import SectionSeparator from "@/ui/SectionSeparator";
import Footer from "@/ui/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Timeline/>
      <SectionSeparator image="/bg.jpg"/>
      <Team/>
      <Footer/>
    </>
  );
}
