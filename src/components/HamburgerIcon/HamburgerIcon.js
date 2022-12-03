import styled from "styled-components";

const HamburgerIcon = styled.div`
  position: relative;
  width: 24px;
  height: 4px;
  background-color: ${({ isMenuOpen }) =>
    isMenuOpen ? "transparent" : "currentColor"};
  will-change: transform;
  transition-property: transform, background-color;
  transition-duration: var(--transition-duration);
  transition-timing-function: ease-out;

  &::before {
    content: "";
    position: absolute;
    top: -8px;
    display: block;
    width: 24px;
    height: 4px;
    background-color: currentColor;
    will-change: transform;
    transform: ${({ isMenuOpen }) =>
      isMenuOpen && "translateY(8px) rotate(45deg)"};
    transition: transform var(--transition-duration) ease-out;
  }

  &::after {
    content: "";
    position: absolute;
    top: 8px;
    display: block;
    width: 24px;
    height: 4px;
    background-color: currentColor;
    will-change: transform;
    transform: ${({ isMenuOpen }) =>
      isMenuOpen && "translateY(-8px) rotate(-45deg)"};
    transition: transform var(--transition-duration) ease-out;
  }
`;

export default HamburgerIcon;
