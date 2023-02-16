import styled from "styled-components";

const Overlay = styled.div<{ isMenuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-index-10);
  display: ${({ isMenuOpen }) => (isMenuOpen ? "block" : "none")};
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export default Overlay;
