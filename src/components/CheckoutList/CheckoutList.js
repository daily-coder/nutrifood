import { BREAK_POINTS } from "../../constants";
import { CartItemsContext } from "../CartProvider";
import CheckoutItem from "./CheckoutItem";
import styled from "styled-components";
import { useContext } from "react";
import useHasMounted from "../../hooks/use-has-mounted.hook";

const Wrapper = styled.div`
  margin: var(--space-64) auto;
  max-width: 750px;
  flex-grow: 1;
`;

const Message = styled.div`
  text-align: center;

  @media (min-width: ${BREAK_POINTS.md}) {
    text-align: revert;
  }
`;

const CheckoutItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-48);
`;

function CheckoutList() {
  const cartItems = useContext(CartItemsContext);
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    // load empty list to avoid layout shift;
    return <Wrapper></Wrapper>;
  }

  const checkoutItems = cartItems.map((item) => (
    <CheckoutItem key={item.id} {...item} />
  ));

  return (
    <Wrapper>
      {cartItems.length === 0 ? (
        <Message>
          <h3>Bag</h3>
          <p>There are no items in your bag.</p>
        </Message>
      ) : (
        <CheckoutItemsWrapper>{checkoutItems}</CheckoutItemsWrapper>
      )}
    </Wrapper>
  );
}

export default CheckoutList;
