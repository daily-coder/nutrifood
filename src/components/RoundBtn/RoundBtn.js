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

function RoundBtn({ children, onClick, type }) {
  return (
    <Wrapper type={type} onClick={onClick}>
      {children}
    </Wrapper>
  );
}

export default RoundBtn;
