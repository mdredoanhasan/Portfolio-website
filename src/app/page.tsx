import BannerPage from "./components/banner";
import SkillSection from "./components/skill";
import ProjectSection from "./components/projectSection";
import ContactSection from "./components/contactSection";
import AboutSection from "./components/aboutMe";
import Education from "./components/education";


const page = () => {
  return (
    <main>
      <BannerPage />
      <AboutSection />
      <Education />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
};

export default page;
