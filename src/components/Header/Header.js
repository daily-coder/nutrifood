import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

import NutriFoodIcon from "../../../public/svg/nutrifood-logo.svg";
import { BREAK_POINTS } from "../../constants";
import HamburgerIcon from "../HamburgerIcon";
import MaxWidthWrapper from "../MaxWidthWrapper/";
import SignUpForm from "../SignUpForm";

import BagIconLink from "./BagIconLink";
import NavSlider from "./NavSlider";
import Overlay from "./Overlay";
import useScrollPosition from "./use-scroll-position.hook";

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-index-40);
  width: 100%;
  background-color: ${({ scrollY }) =>
    scrollY > 0 ? "var(--color-light)" : "var(--color-silver-light)"};
  box-shadow: ${({ scrollY }) =>
    scrollY > 0 ? "var(--box-shadow-header)" : ""};
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const LogoLink = styled(Link)`
  flex-shrink: 0;
`;

const LogoIcon = styled(NutriFoodIcon)`
  color: var(--color-primary);
  width: calc(140rem / 16);

  @media (min-width: ${BREAK_POINTS.md}) {
    padding: 0;
  }
`;

const SignUpFormWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-index-50);
  display: ${({ isFormOpen }) => (isFormOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const BagIconLinkWrapper = styled.div`
  @media (min-width: ${BREAK_POINTS.md}) {
    margin-left: var(--space-16);
  }
`;

const MenuButton = styled.button`
  position: relative;
  z-index: var(--z-index-30);
  padding: var(--space-16);
  margin: 0 calc(var(--space-16) * -1);

  @media (min-width: ${BREAK_POINTS.md}) {
    display: none;
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [, scrollY] = useScrollPosition(100);

  return (
    <Wrapper scrollY={scrollY}>
      <MaxWidthWrapper>
        <FlexWrapper>
          <MenuButton
            type="button"
            aria-label="Menu button"
            onClick={() => setIsMenuOpen((prevIsOpen) => !prevIsOpen)}
          >
            <HamburgerIcon isMenuOpen={isMenuOpen} />
          </MenuButton>

          <LogoLink href="/" aria-label="link to home page">
            <LogoIcon aria-hidden="true" />
          </LogoLink>

          <NavSlider
            isMenuOpen={isMenuOpen}
            closeMenu={() => setIsMenuOpen(false)}
            onClick={() => setIsFormOpen(true)}
          />

          <BagIconLinkWrapper>
            <BagIconLink />
          </BagIconLinkWrapper>
        </FlexWrapper>

        <SignUpFormWrapper isFormOpen={isFormOpen}>
          {isFormOpen && <SignUpForm onClick={() => setIsFormOpen(false)} />}
        </SignUpFormWrapper>

        <Overlay isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      </MaxWidthWrapper>
    </Wrapper>
  );
}

export default Header;
