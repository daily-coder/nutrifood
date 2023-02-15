import Image from "next/image";
import { memo } from "react";
import styled from "styled-components";

import ChevronDownIcon from "../../../public/svg/chevron-down.svg";
import ChevronUpIcon from "../../../public/svg/chevron-up.svg";
import { Item } from "../../types";
import Button from "../Button";
import { useCartDispatch } from "../CartProvider";

const Wrapper = styled.div`
  display: flex;
  gap: var(--space-16);
`;

const ImageWrapper = styled.div`
  flex-basis: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-light);
`;

const Title = styled.h3`
  text-transform: capitalize;
`;

const Price = styled.p`
  margin-top: var(--space-8);
`;

const DeleteButton = styled(Button)`
  background-color: var(--color-danger);
  color: var(--color-light);
  margin-top: var(--space-24);

  &:hover {
    background-color: var(--color-danger-dark);
  }
`;

const QuantityWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  flex-basis: 24px;
  flex-shrink: 0;
`;

const ChevronUpIconBtn = styled.button`
  color: var(--color-primary);
`;

const ChevronDownIconBtn = styled.button`
  color: var(--color-primary);
`;

const Quantity = styled.p`
  font-size: var(--font-size-20);
`;

interface CheckoutItemProps extends Item {
  width: number;
  height: number;
  quantity: number;
}

function CheckoutItem({
  id,
  src,
  item,
  width,
  height,
  price,
  quantity,
}: CheckoutItemProps) {
  const dispatch = useCartDispatch();

  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={src}
          alt={`Image of ${item}`}
          height={height}
          width={width}
        />
      </ImageWrapper>

      <div>
        <Title>{item}</Title>
        <Price data-testid="checkout-item-price">
          ${(price * quantity).toFixed(2)}
        </Price>
        <DeleteButton
          size="normal"
          type="button"
          onClick={() => dispatch({ type: "DELETE_ITEM", payload: id })}
        >
          Delete
        </DeleteButton>
      </div>

      <QuantityWrapper>
        <ChevronUpIconBtn
          type="button"
          onClick={() => dispatch({ type: "INCREMENT_QUANTITY", payload: id })}
          aria-label="Increment item quantity"
        >
          <ChevronUpIcon width="24" />
        </ChevronUpIconBtn>

        <Quantity>{quantity}</Quantity>

        <ChevronDownIconBtn
          type="button"
          onClick={() => dispatch({ type: "DECREMENT_QUANTITY", payload: id })}
          aria-label="Decrement item quantity"
        >
          <ChevronDownIcon width="24" />
        </ChevronDownIconBtn>
      </QuantityWrapper>
    </Wrapper>
  );
}

export default memo(CheckoutItem);
