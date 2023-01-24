import propTypes from "prop-types";
import styled from "styled-components";

import PersonCircleIcon from "../../../public/svg/person-circle.svg";
import { BREAK_POINTS } from "../../constants";
import Navbar from "../Navbar";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-index-20);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(300rem / 16);
  min-height: 100vh;
  padding-top: var(--space-48);
  background-color: var(--color-light);
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? "translateX(0)" : "translateX(-100%)"};

  /* Menu slider is opened slowly compared to closing. */

  transition-property: transform;
  transition-duration: ${({ isMenuOpen }) =>
    isMenuOpen ? "var(--transition-duration)" : "0.125s"};
  transition-timing-function: ${({ isMenuOpen }) =>
    isMenuOpen ? "ease-out" : "ease-in"};

  @media (min-width: ${BREAK_POINTS.md}) {
    position: static;
    flex-direction: row;
    align-items: baseline;
    padding: 0;
    min-height: 0;
    transform: initial;
    background-color: inherit;
  }
`;

const SignUpButton = styled.button`
  color: var(--color-primary);
  background-color: transparent;
  border: none;
  padding: var(--space-16);
  display: flex;

  @media (min-width: ${BREAK_POINTS.md}) {
    padding: 0;
  }
`;

const SignUpLabel = styled.span`
  margin-left: var(--space-16);

  @media (min-width: ${BREAK_POINTS.md}) {
    display: none;
  }
`;

const SignUpIcon = styled(PersonCircleIcon)`
  width: calc(24rem / 16);
`;

function NavSlider({ isMenuOpen, closeMenu, onClick }) {
  return (
    <Wrapper isMenuOpen={isMenuOpen}>
      <Navbar closeMenu={closeMenu} />

      <SignUpButton type="button" aria-label="Sign up button" onClick={onClick}>
        <SignUpIcon aria-hidden="true" />
        <SignUpLabel>SIGN-IN</SignUpLabel>
      </SignUpButton>
    </Wrapper>
  );
}

NavSlider.propTypes = {
  isMenuOpen: propTypes.bool.isRequired,
  closeMenu: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired,
};

export default NavSlider;
