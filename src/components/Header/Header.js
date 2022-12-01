import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper/";
import Navbar from "../Navbar";
import NutriFoodIcon from "../../../public/svg/nutrifood-logo.svg";
import PersonCircleIcon from "../../../public/svg/person-circle.svg";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-index-40);
  width: 100%;
  background-color: var(--color-silver-light);
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const LogoIcon = styled(NutriFoodIcon)`
  color: var(--color-primary);
  width: calc(140rem / 16);
`;

const SignUpButton = styled.button`
  color: var(--color-primary);
  background-color: transparent;
  border: none;
`;

const SignUpIcon = styled(PersonCircleIcon)`
  width: calc(24rem / 16);
`;

function Header() {
  return (
    <HeaderWrapper>
      <MaxWidthWrapper>
        <FlexWrapper>
          <Link href="/">
            <LogoIcon aria-hidden="true" />
          </Link>

          <Navbar />

          <SignUpButton type="button" aria-label="Sign up button">
            <SignUpIcon aria-hidden="true" />
          </SignUpButton>
        </FlexWrapper>
      </MaxWidthWrapper>
    </HeaderWrapper>
  );
}

export default Header;
