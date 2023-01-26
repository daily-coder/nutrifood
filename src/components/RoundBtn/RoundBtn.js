import propTypes from "prop-types";
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

function RoundBtn({ href, children, onClick, type, ariaLabel }) {
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

RoundBtn.propTypes = {
  href: propTypes.string,
  children: propTypes.node.isRequired,
  onClick: propTypes.func,
  type: propTypes.string,
  ariaLabel: propTypes.string,
};

export default RoundBtn;
