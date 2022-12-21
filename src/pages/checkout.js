import { BREAK_POINTS } from "../constants";
import CheckoutList from "../components/CheckoutList";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Payment from "../components/payment";
import styled from "styled-components";

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
