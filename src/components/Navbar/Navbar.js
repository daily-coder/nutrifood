import { BREAK_POINTS } from "../../constants";
import NAV_LINKS from "./Navbar.constants";
import NavItem from "./NavItem";
import styled from "styled-components";

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

function Navbar() {
  const navItems = NAV_LINKS.map((navLink) => (
    <NavItem key={navLink.label} {...navLink} />
  ));

  return (
    <Wrapper>
      <NavList>{navItems}</NavList>
    </Wrapper>
  );
}

export default Navbar;
