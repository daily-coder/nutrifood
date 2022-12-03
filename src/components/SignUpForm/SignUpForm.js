import CloseIcon from "../../../public/svg/close-btn.svg";
import RoundBtn from "../RoundBtn";
import styled from "styled-components";

const Wrapper = styled.form`
  position: relative; // for close-btn-icon
  margin: 0 var(--space-16);
  padding: var(--space-8) var(--space-32);
  border-radius: var(--border-radius-5);
  box-shadow: var(--box-shadow-lg);
  width: 300px;
  min-width: 0;
  background-color: var(--color-light);
`;

const FormControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--space-24) 0;
  padding: 0;
  border: none;

  &:last-child {
    align-items: center;
  }
`;

const TextInput = styled.input`
  margin-top: var(--space-8);
  padding: var(--space-8);
  border: none;
  border-radius: var(--border-radius-5);
  width: 100%;
  background-color: var(--color-silver-light);

  &:focus {
    outline: 2px solid var(--color-primary);
  }
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: $color-silver-light;
  transform: translate(50%, -50%);
`;

const CloseFormIcon = styled(CloseIcon)`
  width: calc(15rem / 16);
`;

function SignUpForm({ onClick }) {
  return (
    <Wrapper action="#">
      <FormControlWrapper>
        <label htmlFor="name">NAME</label>
        <TextInput id="name" name="name" type="text" required />
      </FormControlWrapper>

      <FormControlWrapper>
        <label htmlFor="email">EMAIL</label>
        <TextInput id="email" name="email" type="email" required />
      </FormControlWrapper>

      <FormControlWrapper>
        <label htmlFor="password">PASSWORD</label>
        <TextInput id="password" name="email" type="password" required />
      </FormControlWrapper>

      <FormControlWrapper>
        <button type="submit">SIGN UP</button>
      </FormControlWrapper>

      <CloseButtonWrapper>
        <RoundBtn type="button" onClick={onClick}>
          <CloseFormIcon aria-hidden="true" />
        </RoundBtn>
      </CloseButtonWrapper>
    </Wrapper>
  );
}

export default SignUpForm;
