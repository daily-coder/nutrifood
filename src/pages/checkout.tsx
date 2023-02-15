import styled from "styled-components";

import CheckoutList from "../components/CheckoutList";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Meta from "../components/Meta";
import Payment from "../components/Payment";
import { BREAK_POINTS } from "../constants";

const FlexWrapper = styled.div`
  @media (min-width: ${BREAK_POINTS.md}) {
    display: flex;
  }
`;

function Checkout() {
  return (
    <>
      <Meta title="NutriFood Checkout" description="NutriFood Checkout page" />
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
    </>
  );
}

export default Checkout;
