import Link from "next/link";
import styled from "styled-components";

const SIZES = {
  normal: "var(--space-8) var(--space-16)",
  large: "var(--space-16) var(--space-48)",
};

const Wrapper = styled.button`
  padding: ${({ size }) => SIZES[size]};
  border-radius: var(--border-radius-5);
  text-transform: uppercase;
  background-color: var(--color-primary);
  color: var(--color-light);
  // links should be inline-block just like buttons
  display: inline-block;
  text-decoration: none;
  font-weight: bold;

  &:active {
    transform: scale(0.95);
  }
`;

function Button({ href, type, size, children }) {
  return (
    <Wrapper href={href} as={href ? Link : "button"} type={type} size={size}>
      {children}
    </Wrapper>
  );
}

export default Button;
