import { BREAK_POINTS } from "../../constants";
import NavItem from "./NavItem";
import styled from "styled-components";

const NavWrapper = styled.nav`
  margin: 0;

  @media (min-width: ${BREAK_POINTS.md}) {
    margin: 0 auto;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  @media (min-width: ${BREAK_POINTS.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

function Navbar() {
  return (
    <NavWrapper>
      <NavList>
        <NavItem href="/store" label="store" />
        <NavItem href="/#how-it-works" label="how it works" />
        <NavItem href="/#products" label="products" />
        <NavItem href="/#reviews" label="reviews" />
      </NavList>
    </NavWrapper>
  );
}

export default Navbar;
