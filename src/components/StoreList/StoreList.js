import MaxWidthWrapper from "../MaxWidthWrapper";
import StoreItem from "./StoreItem";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: var(--space-64) 0;
`;

const StoreListSection = styled.section`
  padding: 0;
`;

const StoreItemsGrid = styled.div`
  margin: var(--space-64) 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-24);
`;

const Divider = styled.hr`
  margin: var(--space-32) 0;
  border: var(--border-4) solid var(--color-primary);
  width: var(--space-64);
  margin: 0 auto;
  background-color: var(--color-primary);
`;

function StoreList({ storeItemsData }) {
  const fruitItems = storeItemsData.fruits.map((fruit) => (
    <StoreItem key={fruit.id} {...fruit} />
  ));

  const vegetableItems = storeItemsData.vegetables.map((vegetables) => (
    <StoreItem key={vegetables.id} {...vegetables} />
  ));

  const nutItems = storeItemsData.nuts.map((nuts) => (
    <StoreItem key={nuts.id} {...nuts} imgSize={170} />
  ));

  return (
    <Wrapper>
      <StoreListSection id="fruits">
        <MaxWidthWrapper>
          <StoreItemsGrid>{fruitItems}</StoreItemsGrid>
        </MaxWidthWrapper>
      </StoreListSection>

      <Divider />

      <StoreListSection id="vegetables">
        <MaxWidthWrapper>
          <StoreItemsGrid>{vegetableItems}</StoreItemsGrid>
        </MaxWidthWrapper>
      </StoreListSection>

      <Divider />

      <StoreListSection id="nuts">
        <MaxWidthWrapper>
          <StoreItemsGrid>{nutItems}</StoreItemsGrid>
        </MaxWidthWrapper>
      </StoreListSection>
    </Wrapper>
  );
}

export default StoreList;
