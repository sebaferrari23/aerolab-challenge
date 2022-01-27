import Image from 'next/image'
import HeroImg from '../../../public/images/hero-image.png'
import { Button, Container, Heading } from "../../ui";
import ArrowDown from "../../../assets/svg/arrow-down.svg";
import { 
  HeroWrapper,
  HeroLayout,
  HeroContent, 
  HeroImage,
  HeroSubtitle, 
  HeroText 
} from "./styled";

const Hero = () => {
  return (
    <HeroWrapper>
      <Container>

        <HeroLayout>

          <HeroContent>
            <HeroSubtitle>Explore the</HeroSubtitle>
            <Heading
              level={1}
              uppercase={true}
              strongGradient={true}
              style={{ marginBottom: '1.5rem' }} 
            >
              <strong>Tech</strong><br/>Zone
            </Heading>
            <HeroText>
              Here you’ll be able to exchange all of your hard-earned <br />Aeropoints and exchange them for cool tech.
            </HeroText>
            <Button cta>
              View All Products
              <ArrowDown style={{ marginLeft: '0.75rem' }} />
            </Button>
          </HeroContent>

          <HeroImage>
            <Image
              alt="Mountains"
              src={HeroImg}
              quality={100}
            />
          </HeroImage>

        </HeroLayout>

      </Container>
    </HeroWrapper>
  );
};

export default Hero;
