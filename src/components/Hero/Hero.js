import { BREAK_POINTS } from "../../constants";
import Button from "../Button";
import HeroImage from "../../../public/images/hero-image.jpg";
import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper/";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 0;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  // 6.6rem(header-height) / 2 - 1rem(nav-links-padding-bottom) = 2.3rem
  margin-top: calc(23rem / 16);
  min-height: 100vh;

  @media (min-width: ${BREAK_POINTS.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

const ContentWrapper = styled.div`
  margin: var(--space-80) 0;
  text-align: center;
  min-width: 50%;

  @media (min-width: ${BREAK_POINTS.md}) {
    padding-right: var(--space-80);
    margin: 0;
    text-align: left;
  }
`;

const ImageWrapper = styled.div`
  min-width: 50%;
`;

const Highlight = styled.span`
  color: var(--color-primary);
`;

const CallToActionWrapper = styled.div`
  margin-top: var(--space-48);
`;

function Hero() {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <FlexWrapper>
          <ContentWrapper>
            <h1>
              FOOD FOR <Highlight>HEALTHY</Highlight> LIFESTYLE
            </h1>
            <p>
              Join the community of healthy food lovers and become the hero you
              aspire to be.
            </p>

            <CallToActionWrapper>
              <Button href="/store" size="large">
                ORDER NOW
              </Button>
            </CallToActionWrapper>
          </ContentWrapper>

          <ImageWrapper>
            <Image
              src={HeroImage}
              alt="Image of plate with fruits and vegetables."
              sizes="(min-width: 56.5rem) 500px, 100vw"
              placeholder="blur"
              priority="true"
            />
          </ImageWrapper>
        </FlexWrapper>
      </MaxWidthWrapper>
    </Wrapper>
  );
}

export default Hero;
