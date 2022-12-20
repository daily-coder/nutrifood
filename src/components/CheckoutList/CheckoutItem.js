import Button from "../Button";
import ChevronDownIcon from "../../../public/svg/chevron-down.svg";
import ChevronUpIcon from "../../../public/svg/chevron-up.svg";
import Image from "next/image";
import styled from "styled-components";

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

const Price = styled.p`
  margin-top: var(--space-8);
`;

const DeleteButton = styled(Button)`
  background-color: var(--color-danger);
  color: var(--color-light);
  margin-top: var(--space-24);
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

function CheckoutItem({ src, item, width, height, price, quantity }) {
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
        <h3>Apple</h3>
        <Price>${price}</Price>
        <DeleteButton size="normal" type="button">
          Delete
        </DeleteButton>
      </div>

      <QuantityWrapper>
        <ChevronUpIconBtn type="button">
          <ChevronUpIcon width="24" />
        </ChevronUpIconBtn>

        <Quantity>{quantity}</Quantity>

        <ChevronDownIconBtn type="button">
          <ChevronDownIcon width="24" />
        </ChevronDownIconBtn>
      </QuantityWrapper>
    </Wrapper>
  );
}

export default CheckoutItem;
