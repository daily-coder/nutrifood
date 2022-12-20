import PaymentOptions from "./PaymentOptions";
import SummaryTable from "./SummaryTable";
import styled from "styled-components";

const Wrapper = styled.aside`
  margin: var(--space-128) auto 0;
  max-width: 400px;
`;

function Payment() {
  return (
    <Wrapper>
      <h3>Summary</h3>

      <SummaryTable subtotal={30.99} shippingCost={0} />

      <PaymentOptions />
    </Wrapper>
  );
}

export default Payment;
