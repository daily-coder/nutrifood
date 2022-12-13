import { BREAK_POINTS } from "../../constants";
import HamburgerIcon from "../HamburgerIcon";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper/";
import NavSlider from "./NavSlider";
import NutriFoodIcon from "../../../public/svg/nutrifood-logo.svg";
import Overlay from "./Overlay";
import SignUpForm from "../SignUpForm";
import styled from "styled-components";
import useScrollPosition from "../../hooks/use-scroll-position.hook";
import { useState } from "react";

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
  padding: var(--space-8) 0;

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

const MenuButton = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  z-index: var(--z-index-30);
  padding: var(--space-24) var(--space-16);

  @media (min-width: ${BREAK_POINTS.md}) {
    display: none;
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [, scrollY] = useScrollPosition(100);

  function toggleMenu() {
    setIsMenuOpen((prevIsOpen) => !prevIsOpen);
  }

  function openSignUpForm() {
    setIsFormOpen(true);
  }

  function closeSignUpForm() {
    setIsFormOpen(false);
  }

  return (
    <Wrapper scrollY={scrollY}>
      <MaxWidthWrapper>
        <FlexWrapper>
          <LogoLink href="/">
            <LogoIcon aria-hidden="true" />
          </LogoLink>

          <NavSlider isMenuOpen={isMenuOpen} onClick={() => openSignUpForm()} />
        </FlexWrapper>

        <MenuButton type="button" aria-label="Menu button" onClick={toggleMenu}>
          <HamburgerIcon isMenuOpen={isMenuOpen} />
        </MenuButton>

        <SignUpFormWrapper isFormOpen={isFormOpen}>
          {isFormOpen && <SignUpForm onClick={() => closeSignUpForm()} />}
        </SignUpFormWrapper>

        <Overlay isMenuOpen={isMenuOpen} />
      </MaxWidthWrapper>
    </Wrapper>
  );
}

export default Header;
