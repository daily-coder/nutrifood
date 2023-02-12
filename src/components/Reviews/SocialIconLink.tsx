interface SocialIconLinkProps {
  // TODO: fix 'any' type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
  href: string;
  ariaLabel: string;
}

function SocialIconLink({ Icon, href, ariaLabel }: SocialIconLinkProps) {
  return (
    <a href={href} aria-label={ariaLabel}>
      <Icon width="25" />
    </a>
  );
}

export default SocialIconLink;
