import CheckoutItem from "./CheckoutItem";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: var(--space-64) auto;
  max-width: 750px;
`;

const CheckoutItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-48);
`;

function checkoutList({ checkoutItemsData }) {
  const checkoutItems = checkoutItemsData.map((item) => (
    <CheckoutItem key={item.id} {...item} />
  ));

  return (
    <Wrapper>
      <CheckoutItemsWrapper>{checkoutItems}</CheckoutItemsWrapper>
    </Wrapper>
  );
}

export default checkoutList;
