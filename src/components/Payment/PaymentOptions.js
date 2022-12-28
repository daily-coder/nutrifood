import Button from "../Button";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: var(--space-16);
  flex-direction: column;
`;

const PayPalButton = styled(Button)`
  border: 1px solid;
  color: var(--color-primary);
  background-color: var(--color-silver-light);

  &:hover {
    background-color: var(--color-gray);
  }
`;

function PaymentOptions() {
  return (
    <Wrapper>
      <Button size="medium" href="#">
        guest checkout
      </Button>
      <Button size="medium" href="#">
        member checkout
      </Button>
      <PayPalButton size="medium" href="#">
        paypal
      </PayPalButton>
    </Wrapper>
  );
}

export default PaymentOptions;
