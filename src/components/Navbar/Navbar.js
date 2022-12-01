import NavItem from "./NavItem";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

function Navbar() {
  return (
    <nav>
      <NavList>
        <NavItem href="/store" label="store" />
        <NavItem href="/#how-it-works" label="how it works" />
        <NavItem href="/#products" label="products" />
        <NavItem href="/#reviews" label="reviews" />
      </NavList>
    </nav>
  );
}

export default Navbar;
