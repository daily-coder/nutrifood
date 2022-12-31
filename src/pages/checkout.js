import styled from "styled-components";

import CheckoutList from "../components/CheckoutList";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Payment from "../components/Payment";
import { BREAK_POINTS } from "../constants";

const FlexWrapper = styled.div`
  @media (min-width: ${BREAK_POINTS.md}) {
    display: flex;
  }
`;

function Checkout() {
  return (
    <div>
      <section>
        <MaxWidthWrapper>
          <FlexWrapper>
            <CheckoutList />

            <Payment />
          </FlexWrapper>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}

export default Checkout;
