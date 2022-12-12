import Carousel from "./Carousel";
import REVIEWS_DATA from "./Reviews.constants";
import ReviewItem from "./ReviewItem";
import styled from "styled-components";

const Wrapper = styled.section`
  overflow: hidden;
  padding: var(--space-64) var(--space-16);
`;

const Description = styled.p`
  text-align: center;
`;

function Reviews() {
  const reviewItems = REVIEWS_DATA.map((item) => (
    <ReviewItem key={item.name} {...item} />
  ));

  return (
    <Wrapper>
      <h2>REVIEWS</h2>
      <Description>
        Don&lsquo;t just take our word for it. Trust our customers.
      </Description>

      <Carousel sliderItems={reviewItems} gap={64} />
    </Wrapper>
  );
}

export default Reviews;
