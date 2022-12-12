import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.li`
  margin-right: var(--space-16);
  margin-top: var(--space-16);
`;

const FooterLink = styled(Link)`
  text-transform: capitalize;
`;

function FooterItem({ href, label }) {
  return (
    <Wrapper>
      <FooterLink href={href}>{label}</FooterLink>
    </Wrapper>
  );
}

export default FooterItem;
