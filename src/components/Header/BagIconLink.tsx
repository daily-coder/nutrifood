import Link from "next/link";
import styled from "styled-components";

import BagIcon from "../../../public/svg/bag.svg";
import { useCartItems } from "../CartProvider";

const Wrapper = styled(Link)`
  position: relative;
  color: var(--color-primary);
  // If the display is set to inline (default for anchor tag), the notification badge
  // will not be positioned correctly for non-chrome browsers.
  display: inline-block;
`;

const Badge = styled.span`
  position: absolute;
  right: -0.7rem;
  top: -0.7rem;
  min-width: calc(var(--font-size-12) * 2);
  height: calc(var(--font-size-12) * 2);
  border-radius: var(--font-size-12);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size-12);
  color: var(--color-light);
  background-color: var(--color-secondary);
`;

function BagIconLink() {
  const cartItems = useCartItems();

  return (
    <Wrapper href="/checkout" aria-label="checkout bag">
      <BagIcon width="24" />
      {cartItems.length > 0 && <Badge>{cartItems.length}</Badge>}
    </Wrapper>
  );
}

export default BagIconLink;
