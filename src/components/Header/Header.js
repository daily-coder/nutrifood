import { BREAK_POINTS } from "../../constants";
import HamburgerIcon from "../HamburgerIcon";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper/";
import Navbar from "../Navbar";
import NutriFoodIcon from "../../../public/svg/nutrifood-logo.svg";
import PersonCircleIcon from "../../../public/svg/person-circle.svg";
import styled from "styled-components";
import { useState } from "react";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-index-40);
  width: 100%;
  background-color: var(--color-silver-light);
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const SliderWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: var(--z-index-20);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: calc(300rem / 16);
  min-height: 100vh;
  padding-top: var(--space-48);
  background-color: var(--color-light);
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};

  /* Menu slider is opened slowly compared to closing. */

  transition-property: transform;
  transition-duration: ${({ isOpen }) =>
    isOpen ? "var(--transition-duration)" : "0.125s"};
  transition-timing-function: ${({ isOpen }) =>
    isOpen ? "ease-out" : "ease-in"};

  @media (min-width: ${BREAK_POINTS.md}) {
    position: static;
    flex-direction: row;
    align-items: baseline;
    padding: 0;
    width: 100%;
    min-height: 0;
    transform: initial;
    background-color: inherit;
  }
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

const SignUpButton = styled.button`
  color: var(--color-primary);
  background-color: transparent;
  border: none;
  padding: var(--space-16);
  display: flex;

  @media (min-width: ${BREAK_POINTS.md}) {
    padding: 0;
  }
`;

const SignUpLabel = styled.span`
  margin-left: var(--space-16);

  @media (min-width: ${BREAK_POINTS.md}) {
    display: none;
  }
`;

const SignUpIcon = styled(PersonCircleIcon)`
  width: calc(24rem / 16);
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
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <HeaderWrapper>
      <MaxWidthWrapper>
        <FlexWrapper>
          <LogoLink href="/">
            <LogoIcon aria-hidden="true" />
          </LogoLink>

          <SliderWrapper isOpen={isOpen}>
            <Navbar />

            <SignUpButton type="button" aria-label="Sign up button">
              <SignUpIcon aria-hidden="true" />
              <SignUpLabel>SIGN-IN</SignUpLabel>
            </SignUpButton>
          </SliderWrapper>
        </FlexWrapper>

        <MenuButton
          type="button"
          aria-label="Menu button"
          onClick={handleClick}
        >
          <HamburgerIcon isOpen={isOpen} />
        </MenuButton>
      </MaxWidthWrapper>
    </HeaderWrapper>
  );
}

export default Header;
