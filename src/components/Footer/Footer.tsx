import styled from "styled-components";

import ArrowUpIcon from "../../../public/svg/arrow-up.svg";
import { BREAK_POINTS } from "../../constants";
import MaxWidthWrapper from "../MaxWidthWrapper";
import RoundBtn from "../RoundBtn";

import FooterItem from "./FooterItem";

const Wrapper = styled.footer`
  position: relative;
  margin-top: var(--space-64);
  background-color: var(--color-silver-light);
`;

const FlexWrapper = styled.div`
  padding: var(--space-48) 0;
  text-align: center;

  @media (min-width: ${BREAK_POINTS.sm}) {
    display: flex;
  }
`;

const FooterList = styled.ul`
  @media (min-width: ${BREAK_POINTS.sm}) {
    display: flex;
  }
`;

const ToTopLinkWrapper = styled.div`
  position: absolute;
  top: 0;
  right: var(--space-24);
  transform: translateY(-50%);
  display: flex;
  background-color: var(--color-gray);
  border-radius: 50%;
`;

const CopyRight = styled.p`
  margin: var(--space-16) 0 0 auto;
  text-transform: capitalize;

  @media (min-width: ${BREAK_POINTS.sm}) {
    &:last-child {
      text-align: right;
    }
  }
`;

function Footer() {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <FlexWrapper>
          <FooterList>
            <FooterItem href="#" label="terms of service" />
            <FooterItem href="#" label="privacy policy" />
          </FooterList>

          <CopyRight>Copyright © 2022 All Rights Reserved.</CopyRight>
        </FlexWrapper>
      </MaxWidthWrapper>

      <ToTopLinkWrapper>
        <RoundBtn href="#" ariaLabel="back to top">
          <ArrowUpIcon width="25" aria-hidden="true" />
        </RoundBtn>
      </ToTopLinkWrapper>
    </Wrapper>
  );
}

export default Footer;
