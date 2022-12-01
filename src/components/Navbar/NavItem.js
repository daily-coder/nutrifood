import Link from "next/link";
import styled from "styled-components";

const NavLink = styled(Link)`
  display: inline-block;
  padding: var(--space-16);
  text-transform: uppercase;

  &:hover {
    color: var(--color-primary);
  }
`;

function NavItem({ href, label }) {
  return (
    <li>
      <NavLink href={href}>{label}</NavLink>
    </li>
  );
}

export default NavItem;
