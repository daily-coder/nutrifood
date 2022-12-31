import Image from "next/image";
import styled from "styled-components";

import FacebookIcon from "../../../public/svg/facebook.svg";
import InstagramIcon from "../../../public/svg/instagram.svg";
import TwitterIcon from "../../../public/svg/twitter.svg";
import { BREAK_POINTS } from "../../constants";

import SocialIconLink from "./SocialIconLink";

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "info"
    "para"
    "icons";
  row-gap: var(--space-24);
  align-items: center;
  padding: var(--space-32);
  border-radius: var(--border-radius-5);
  box-shadow: var(--box-shadow-md);
  background-color: var(--color-light);

  @media (min-width: ${BREAK_POINTS.sm}) {
    padding: var(--space-64);
  }

  @media (min-width: ${BREAK_POINTS["sm-35"]}) {
    grid-template-areas:
      "info icons"
      "para para";
  }
`;

const Info = styled.div`
  grid-area: info;
  display: flex;
  align-items: center;
`;

const UserImage = styled(Image)`
  width: 100px;
  border-radius: 50%;
`;

const TitleWrapper = styled.div`
  margin-left: var(--space-8);
  text-transform: capitalize;
`;

const Name = styled.h3`
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-500);

  @media (min-width: ${BREAK_POINTS.sm}) {
    font-size: var(--font-size-24);
  }
`;

const Date = styled.time`
  color: var(--color-dark-light);
  font-weight: var(--font-weight-500);
`;

const SocialIconsWrapper = styled.div`
  grid-area: icons;
  justify-self: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);

  @media (min-width: ${BREAK_POINTS["sm-35"]}) {
    justify-self: end;
  }
`;

const ReviewPara = styled.p`
  grid-area: para;
`;

const SOCIAL_MEDIA = [
  {
    media: "twitter",
    Icon: TwitterIcon,
  },
  {
    media: "instagram",
    Icon: InstagramIcon,
  },
  {
    media: "facebook",
    Icon: FacebookIcon,
  },
];

function ReviewItem({ src, name, date, reviewPara }) {
  const socialIconLinks = SOCIAL_MEDIA.map(({ media, Icon }) => (
    <SocialIconLink
      key={media}
      Icon={Icon}
      href={`#https://www.${media}.com/${name}`} // fake link
      ariaLabel={`Link to ${name} ${media} page`}
    />
  ));

  return (
    <Wrapper>
      <Info>
        <div>
          <UserImage
            src={`/${src}`} // relative path requires "/"
            alt={`image of user ${name}`}
            width="1000"
            height="1000"
          />
        </div>

        <TitleWrapper>
          <Name>{name}</Name>
          <Date>{date}</Date>
        </TitleWrapper>
      </Info>

      <SocialIconsWrapper>{socialIconLinks}</SocialIconsWrapper>

      <ReviewPara>{reviewPara}</ReviewPara>
    </Wrapper>
  );
}

export default ReviewItem;
