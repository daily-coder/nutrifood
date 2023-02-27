interface SocialIconLinkProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
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
