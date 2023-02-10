import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled(Link)`
  position: relative;
  min-height: 400px;
  border-radius: var(--border-radius-5);
  box-shadow: var(--box-shadow-md);
  overflow: hidden; // image hides rounded corners(border-radius)
`;

const ProductImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
  transition: transform var(--transition-duration) ease-in-out;

  ${Wrapper}:hover & {
    transform: scale(1.3);
  }
`;

const Title = styled.h3`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding-bottom: var(--space-24);
  color: var(--color-light);
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-500);
  text-transform: capitalize;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0)
  );
`;

interface ProductItemProps {
  title: string;
  href: string;
  alt: string;
  src: StaticImageData;
}

function ProductItem({ title, href, src, alt }: ProductItemProps) {
  return (
    <Wrapper href={href}>
      <ProductImage
        src={src}
        alt={alt}
        sizes="(min-width: 51.5rem) 230px, (min-width: 31.25rem) 50vw, 100vw"
        placeholder="blur"
      />
      <Title>
        <span>{title}</span>
      </Title>
    </Wrapper>
  );
}

export default ProductItem;
