import AboutCommunityBuilding from "@/components/About/AboutCommunityBuilding";
import AboutOurOrigins from "@/components/About/AboutOurOrigins";
import AboutOurPersonalizedLearning from "@/components/About/AboutOurPersonalizedLearning";
import AboutOurPhilosophy from "@/components/About/AboutOurPhilosophy";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Your digital Sanctuary"
        description="Discover the history and vision behind CodeSanctum, the ultimate learning sanctuary for coders"
      />
      <AboutOurOrigins />
      <AboutOurPhilosophy />
      <AboutOurPersonalizedLearning />
      <AboutCommunityBuilding />
    </>
  );
};

export default AboutPage;
