import CartContext from "../CartContext";
import CheckoutItem from "./CheckoutItem";
import styled from "styled-components";
import { useContext } from "react";

const Wrapper = styled.div`
  margin: var(--space-64) auto;
  max-width: 750px;
`;

const CheckoutItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-48);
`;

function CheckoutList() {
  const { cartItems } = useContext(CartContext);

  const checkoutItems = cartItems.map((item) => (
    <CheckoutItem key={item.id} {...item} />
  ));

  return (
    <Wrapper>
      <CheckoutItemsWrapper>{checkoutItems}</CheckoutItemsWrapper>
    </Wrapper>
  );
}

export default CheckoutList;
