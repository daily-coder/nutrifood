import styled from "styled-components";

import { BREAK_POINTS } from "../../constants";
import MaxWidthWrapper from "../MaxWidthWrapper";

import WORK_ITEMS_DATA from "./HowItWorks.constants";
import WorkItem from "./WorkItem";

const Description = styled.p`
  text-align: center;
`;

const WorkList = styled.div`
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

function HowItWorks() {
  const workItems = WORK_ITEMS_DATA.map(
    ({ title, WorkIcon, iconSize, description }) => (
      <WorkItem
        key={title}
        title={title}
        WorkIcon={WorkIcon}
        iconSize={iconSize}
        description={description}
      />
    )
  );

  return (
    <section id="how-it-works">
      <MaxWidthWrapper>
        <h2>HOW IT WORKS</h2>
        <Description>
          Ordering healthy food online doesn&lsquo;t need to be difficult.
        </Description>

        <WorkList>{workItems}</WorkList>
      </MaxWidthWrapper>
    </section>
  );
}

export default HowItWorks;
