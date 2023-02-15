import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import styled from "styled-components";

import { Item } from "../../types";
import Button from "../Button";
import { useCartDispatch } from "../CartProvider";

const Wrapper = styled.div`
  width: 100%;
  box-shadow: var(--box-shadow-store-item);
  background-color: var(--color-light);
  border-radius: var(--border-radius-5);
`;

const ImgWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const StoreImg = styled(Image)<{ imgsize: number | undefined }>`
  width: ${({ imgsize }) => (imgsize ? imgsize + "px" : "180px")};
  height: ${({ imgsize }) => (imgsize ? imgsize + "px" : "180px")};
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  text-align: center;
`;

const Title = styled.h3`
  margin: var(--space-16) 0;
  text-transform: capitalize;
`;

const ButtonWrapper = styled.div`
  margin: var(--space-16);
`;

interface StoreItemProps extends Item {
  width: number;
  height: number;
  imgsize?: number;
}

function StoreItem({
  id,
  item,
  price,
  src,
  width,
  height,
  imgsize,
}: StoreItemProps) {
  const dispatch = useCartDispatch();

  function handleClick() {
    dispatch({
      type: "ADD_ITEM",
      payload: { id, item, price, src, width, height, quantity: 1 },
    });
  }

  return (
    <Wrapper>
      <ImgWrapper href={`/articles/${item}`}>
        <StoreImg
          src={src}
          alt={`Image of ${item}`}
          width={width}
          height={height}
          imgsize={imgsize}
          sizes="180px"
        />
      </ImgWrapper>

      <ContentWrapper>
        <Title>{item}</Title>
        <p>${price}</p>
        <ButtonWrapper>
          <Button size="medium" type="button" onClick={handleClick}>
            add to bag
          </Button>
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default memo(StoreItem);
