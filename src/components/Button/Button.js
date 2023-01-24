import Link from "next/link";
import propTypes from "prop-types";
import styled from "styled-components";

const SIZES = {
  normal: "var(--space-8) var(--space-16)",
  medium: "var(--space-12) var(--space-32)",
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
  text-align: center;

  &:hover {
    background-color: var(--color-primary-dark);
  }

  &:active {
    transform: scale(0.95);
  }
`;

function Button({ href, type, size, children, className, onClick }) {
  return (
    <Wrapper
      href={href}
      as={href ? Link : "button"}
      type={type}
      size={size}
      className={className}
      onClick={onClick}
    >
      {children}
    </Wrapper>
  );
}

Button.propTypes = {
  href: propTypes.string,
  type: propTypes.string,
  size: propTypes.string.isRequired,
  className: propTypes.string,
  children: propTypes.node.isRequired,
  onclick: propTypes.func,
};

export default Button;
