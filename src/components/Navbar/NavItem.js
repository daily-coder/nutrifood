import Link from "next/link";
import styled from "styled-components";

const NavLink = styled(Link)`
  position: relative;
  display: inline-block;
  padding: var(--space-16);
  text-transform: uppercase;
  transition: color var(--transition-duration) ease;

  &:hover {
    color: var(--color-primary);
  }

  ::before {
    content: "";
    position: absolute;
    left: var(--space-16);
    bottom: var(--space-16);
    display: block;
    width: calc(
      100% - var(--space-16) * 2
    ); // 100% - (padding-left + padding-right)
    height: 2px;
    transform-origin: left;
    transform: scaleX(0);
    will-change: transform;
    transition: transform var(--transition-duration) ease;
    background-color: var(--color-primary);
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

function NavItem({ href, label, onClick }) {
  return (
    <li>
      <NavLink href={href} scroll={false} onClick={onClick}>
        {label}
      </NavLink>
    </li>
  );
}

export default NavItem;
