import { BREAK_POINTS } from "../../constants";
import HamburgerIcon from "../HamburgerIcon";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper/";
import NavSlider from "./NavSlider";
import NutriFoodIcon from "../../../public/svg/nutrifood-logo.svg";
import Overlay from "./Overlay";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.header`
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
    <Wrapper>
      <MaxWidthWrapper>
        <FlexWrapper>
          <LogoLink href="/">
            <LogoIcon aria-hidden="true" />
          </LogoLink>

          <NavSlider isOpen={isOpen} />
        </FlexWrapper>

        <MenuButton
          type="button"
          aria-label="Menu button"
          onClick={handleClick}
        >
          <HamburgerIcon isOpen={isOpen} />
        </MenuButton>

        <Overlay isOpen={isOpen} />
      </MaxWidthWrapper>
    </Wrapper>
  );
}

export default Header;
