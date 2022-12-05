import styled from "styled-components";

const SIZES = {
  normal: "var(--space-8) var(--space-16)",
  large: "var(--space-16) var(--space-48)",
};

const Button = styled.button`
  padding: ${({ size }) => SIZES[size]};
  border-radius: var(--border-radius-5);
  text-transform: uppercase;
  background-color: var(--color-primary);
  color: var(--color-light);
`;

export default Button;
