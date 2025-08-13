import Footer from "@/components/Footer";
import ExtensionSection from "@/components/sections/ExtensionSection";
import FavoriteAppsSection from "@/components/sections/FavoriteAppsSection";
import HeaderSection from "@/components/sections/HeaderSection";
import PlanSection from "@/components/sections/PlanSection";
import ProjectManagment from "@/components/sections/ProjectManagment";
import SponsorsSection from "@/components/sections/SponsorsSection";
import WorkEverywhere from "@/components/sections/WorkEverywhere";
import YourDataSection from "@/components/sections/YourDataSection";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <HeaderSection/>
      <ProjectManagment/>
      <ExtensionSection/>
      <PlanSection/>
      <WorkEverywhere/>
      <YourDataSection/>
      <SponsorsSection/>
      <FavoriteAppsSection/>
      <TestimonialsCarousel />
      <Footer />
    </div>
  );
}
