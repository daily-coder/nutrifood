import styled from "styled-components";

const Line1 = styled.div<{ isMenuOpen: boolean }>`
  width: 24px;
  height: 4px;
  border-radius: 4px;
  background-color: currentColor;
  will-change: transform;
  transform: ${({ isMenuOpen }) =>
    isMenuOpen && "translateY(4px) rotate(45deg)"};
  transition: transform var(--transition-duration) ease-out;
`;

const Line2 = styled.div<{ isMenuOpen: boolean }>`
  width: 24px;
  height: 4px;
  border-radius: 4px;
  margin-top: var(--space-8);
  background-color: currentColor;
  will-change: transform;
  transform: ${({ isMenuOpen }) =>
    isMenuOpen && "translateY(-8px) rotate(-45deg)"};
  transition: transform var(--transition-duration) ease-out;
`;

function HamburgerIcon({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <div>
      <Line1 isMenuOpen={isMenuOpen}></Line1>
      <Line2 isMenuOpen={isMenuOpen}></Line2>
    </div>
  );
}

export default HamburgerIcon;
