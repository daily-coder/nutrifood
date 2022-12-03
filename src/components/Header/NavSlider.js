import { BREAK_POINTS } from "../../constants";
import Navbar from "../Navbar";
import PersonCircleIcon from "../../../public/svg/person-circle.svg";
import styled from "styled-components";

const SliderWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: var(--z-index-20);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: calc(300rem / 16);
  min-height: 100vh;
  padding-top: var(--space-48);
  background-color: var(--color-light);
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};

  /* Menu slider is opened slowly compared to closing. */

  transition-property: transform;
  transition-duration: ${({ isOpen }) =>
    isOpen ? "var(--transition-duration)" : "0.125s"};
  transition-timing-function: ${({ isOpen }) =>
    isOpen ? "ease-out" : "ease-in"};

  @media (min-width: ${BREAK_POINTS.md}) {
    position: static;
    flex-direction: row;
    align-items: baseline;
    padding: 0;
    width: 100%;
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

function NavSlider({ isOpen }) {
  return (
    <SliderWrapper isOpen={isOpen}>
      <Navbar />

      <SignUpButton type="button" aria-label="Sign up button">
        <SignUpIcon aria-hidden="true" />
        <SignUpLabel>SIGN-IN</SignUpLabel>
      </SignUpButton>
    </SliderWrapper>
  );
}

export default NavSlider;
