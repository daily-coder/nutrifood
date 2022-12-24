import { BREAK_POINTS } from "../../constants";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import PRODUCT_ITEMS_DATA from "./Products.constants";
import ProductItem from "./ProductItem";
import RightArrowIcon from "../../../public/svg/right-arrow.svg";
import styled from "styled-components";

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${BREAK_POINTS["sm-35"]}) {
    flex-direction: row;
  }
`;

const StoreLink = styled(Link)`
  margin-top: var(--space-24);
  cursor: pointer;

  &:hover {
    color: var(--color-primary);
  }

  @media (min-width: ${BREAK_POINTS["sm-35"]}) {
    margin-top: 0;
  }
`;

const RightArrowIconWrapper = styled.span`
  display: inline-block;
  margin-left: var(--space-8);
`;

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-24);
  grid-auto-rows: 1fr;
  margin-top: var(--space-48);

  @media (min-width: ${BREAK_POINTS.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${BREAK_POINTS.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

function Products() {
  const productItems = PRODUCT_ITEMS_DATA.map(({ title, src, alt, href }) => (
    <ProductItem key={title} title={title} src={src} alt={alt} href={href} />
  ));

  return (
    <section id="products">
      <MaxWidthWrapper>
        <h2>PRODUCTS</h2>

        <DescriptionWrapper>
          <p>The list of products we currently offer worldwide.</p>
          <StoreLink href="/store">
            STORE
            <RightArrowIconWrapper>
              <RightArrowIcon width="18" />
            </RightArrowIconWrapper>
          </StoreLink>
        </DescriptionWrapper>

        <ProductsList>{productItems}</ProductsList>
      </MaxWidthWrapper>
    </section>
  );
}

export default Products;
