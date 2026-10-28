import BannerPage from "./components/banner";
import SkillSection from "./components/skill";
import ProjectSection from "./components/projectSection";
import ContactSection from "./components/contactSection";
import AboutSection from "./components/aboutMe";


const page = () => {
  return (
    <main>
      <BannerPage />
      <AboutSection/>
      <SkillSection />
      <ProjectSection />
      <ContactSection/>
    </main>
  );
};

export default page;
