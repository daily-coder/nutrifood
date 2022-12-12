function SocialIconLink({ Icon, href, ariaLabel }) {
  return (
    <a href={href} aria-label={ariaLabel}>
      <Icon width={`${25 / 16}rem`} />
    </a>
  );
}

export default SocialIconLink;
