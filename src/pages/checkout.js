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

const mockData = [
  {
    id: 1,
    item: "apple",
    price: 5.99,
    src: "/images/store/apple.jpg",
    height: 1201,
    width: 1056,
    type: "jpg",
    quantity: 1,
  },
  {
    id: 2,
    item: "strawberry",
    price: 6.99,
    src: "/images/store/strawberry.jpg",
    height: 1201,
    width: 1056,
    type: "jpg",
    quantity: 1,
  },
];

function Checkout() {
  return (
    <div>
      <section>
        <MaxWidthWrapper>
          <FlexWrapper>
            <CheckoutList checkoutItemsData={mockData} />

            <Payment />
          </FlexWrapper>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}

export default Checkout;
