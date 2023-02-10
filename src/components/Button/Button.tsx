import Link from "next/link";
import React from "react";
import styled from "styled-components";

const SIZES = {
  normal: "var(--space-8) var(--space-16)",
  medium: "var(--space-12) var(--space-32)",
  large: "var(--space-16) var(--space-48)",
};

const Wrapper = styled.button<{ size: keyof typeof SIZES }>`
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

interface ButtonProps {
  href?: string;
  type?: string;
  size: keyof typeof SIZES;
  className?: string;
  children: React.ReactNode;
  onClick?(): void;
}

function Button({
  href,
  type,
  size,
  children,
  className,
  onClick,
}: ButtonProps) {
  return (
    <Wrapper
      href={href as string} // if href is undefined it will be removed from element
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

export default Button;
