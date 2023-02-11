interface SocialIconLinkProps {
  Icon: any; // TODO: fix 'any' type
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
