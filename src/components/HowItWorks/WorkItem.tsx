import styled from "styled-components";

const Wrapper = styled.div`
  padding: var(--space-32) var(--space-16);
  border-radius: var(--border-radius-5);
  box-shadow: var(--box-shadow-md);
  background-color: var(--color-light);
  cursor: pointer;
  will-change: transform;
  transition: transform var(--transition-duration) ease-in-out;

  &:hover {
    color: var(--color-light);
    background-color: var(--color-primary);
    transform: scale(1.1);
  }
`;

/**
 * Note:
 * To keep all icons consistent following changes are made:
 * stroke-width for bowl icon is changed from 2 to 3
 * fill for house icon is set to currentColor
 * stroke for all icons except house is set to currentColor
 *
 * all changes are made in .svg files
 */

const IconWrapper = styled.div`
  ${Wrapper} &:hover {
    color: var(--color-light);
  }
`;

const Title = styled.h3`
  margin: var(--space-24) 0 var(--space-8);
  text-transform: capitalize;
`;

interface WorkItemProps {
  WorkIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconSize: number;
  title: string;
  description: string;
}

function WorkItem({ WorkIcon, iconSize, title, description }: WorkItemProps) {
  return (
    <Wrapper>
      <IconWrapper>
        <WorkIcon width={iconSize} aria-hidden="true" />
      </IconWrapper>
      <Title>{title}</Title>
      <p>{description}</p>
    </Wrapper>
  );
}

export default WorkItem;
