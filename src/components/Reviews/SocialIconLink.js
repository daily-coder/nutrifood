function SocialIconLink({ Icon, href, ariaLabel }) {
  return (
    <a href={href} aria-label={ariaLabel}>
      <Icon width="25" />
    </a>
  );
}

export default SocialIconLink;
