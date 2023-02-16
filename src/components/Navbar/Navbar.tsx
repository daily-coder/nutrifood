import styled from "styled-components";

import { BREAK_POINTS } from "../../constants";

import NavItem from "./NavItem";
import NAV_LINKS from "./Navbar.constants";

const Wrapper = styled.nav`
  margin: 0;

  @media (min-width: ${BREAK_POINTS.md}) {
    margin: 0 auto;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (min-width: ${BREAK_POINTS.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

function Navbar({ closeMenu }: { closeMenu(): void }) {
  const navItems = NAV_LINKS.map((navLink) => (
    <NavItem key={navLink.label} {...navLink} onClick={closeMenu} />
  ));

  return (
    <Wrapper>
      <NavList>{navItems}</NavList>
    </Wrapper>
  );
}

export default Navbar;
