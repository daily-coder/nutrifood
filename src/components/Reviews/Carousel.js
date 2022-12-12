import { useMemo, useRef, useState } from "react";
import ChevronLeftIcon from "../../../public/svg/chevron-left.svg";
import ChevronRightIcon from "../../../public/svg/chevron-right.svg";
import RoundBtn from "../RoundBtn";
import styled from "styled-components";
import useDimensions from "../../hooks/use-dimensions.hook";

const Wrapper = styled.div`
  max-width: 600px;
  margin: var(--space-48) auto;
`;

const Slider = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 100%);
  gap: ${({ gap }) => `${gap}px`};
  will-change: transform;
`;

const SlideBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SlideRightBtnWrapper = styled.div`
  margin-left: var(--space-24);
`;

function Carousel({ sliderItems, gap }) {
  // when slider is displayed, the first sliderItem(lastClone) should be hidden,
  // So counter starts from 1 instead of 0;

  const [counter, setCounter] = useState(1);
  const [isTransition, setIsTransition] = useState(false);

  const firstClone = sliderItems[0];
  const lastClone = sliderItems[sliderItems.length - 1];

  const carouselRef = useRef();
  const { width } = useDimensions(carouselRef);
  const size = width + gap;

  // slideItems length + lastClone + firstClone
  const sliderItemsLength = sliderItems.length + 2;

  const sliderStyles = useMemo(() => {
    const transition = "transform var(--transition-duration) ease-in-out";
    const transform = `translateX(${-size * counter}px)`;

    if (!isTransition) {
      return {
        transition: "revert",
        transform,
      };
    }

    return { transform, transition };
  }, [size, counter, isTransition]);

  function incrementCounter() {
    if (counter >= sliderItemsLength - 1) return;
    setIsTransition(true);
    setCounter((prevCounter) => prevCounter + 1);
  }

  function decrementCounter() {
    if (counter <= 0) return;
    setIsTransition(true);
    setCounter((prevCounter) => prevCounter - 1);
  }

  /**
   * we created a clone of the first and the last image to create slide loop which never ends.
   * we need to slide to original image when we reach clone.
   */

  function slideToOriginal() {
    if (counter === sliderItemsLength - 1) {
      setIsTransition(false);
      setCounter((prevCounter) => sliderItemsLength - prevCounter);
    }
    if (counter === 0) {
      setIsTransition(false);
      setCounter(() => sliderItemsLength - 2);
    }
  }

  return (
    <>
      <Wrapper ref={carouselRef}>
        <Slider
          style={sliderStyles}
          gap={gap}
          onTransitionEnd={slideToOriginal}
        >
          {lastClone}

          {sliderItems}

          {firstClone}
        </Slider>
      </Wrapper>

      <SlideBtnWrapper>
        <RoundBtn
          type="button"
          aria-label="slide button left"
          onClick={decrementCounter}
        >
          <ChevronLeftIcon width="1.4rem" aria-hidden="true" />
        </RoundBtn>

        <SlideRightBtnWrapper>
          <RoundBtn
            type="button"
            aria-label="slide button right"
            onClick={incrementCounter}
          >
            <ChevronRightIcon width="1.4rem" aria-hidden="true" />
          </RoundBtn>
        </SlideRightBtnWrapper>
      </SlideBtnWrapper>
    </>
  );
}

export default Carousel;
