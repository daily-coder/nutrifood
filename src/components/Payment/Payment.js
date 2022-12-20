import { BREAK_POINTS } from "../../constants";
import PaymentOptions from "./PaymentOptions";
import SummaryTable from "./SummaryTable";
import styled from "styled-components";

const Wrapper = styled.aside`
  margin: var(--space-128) auto 0;
  max-width: 400px;

  @media (min-width: ${BREAK_POINTS.md}) {
    margin-top: var(--space-64);
    margin-left: var(--space-64);
  }
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
