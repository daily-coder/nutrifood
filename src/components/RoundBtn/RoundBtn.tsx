import { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: revert;

  &:hover {
    background-color: var(--color-silver-dark);
  }
`;

interface RoundBtnProps {
  href?: string;
  children: ReactNode;
  onClick?(): void;
  type?: string;
  ariaLabel?: string;
}

function RoundBtn({ href, children, onClick, type, ariaLabel }: RoundBtnProps) {
  return (
    <Wrapper
      as={href ? "a" : "button"}
      href={href}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </Wrapper>
  );
}

export default RoundBtn;
