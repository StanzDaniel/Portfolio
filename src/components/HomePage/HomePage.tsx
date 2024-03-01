import PhotoHome from "./PhotoHome";
import Typewriter from "./Typewriter";
import HomePageSection from "./HomePageSection";
import WelcomeText from "./WelcomeText";
import DownArrow from "./DownArrow";

function HomePage() {
  return (
    <HomePageSection>
      <PhotoHome />
      <WelcomeText>
        <Typewriter text="¡Hola! Soy Daniel" delay={100} />
      </WelcomeText>
      <DownArrow />
    </HomePageSection>
  );
}

export default HomePage;
