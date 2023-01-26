import propTypes from "prop-types";

function SocialIconLink({ Icon, href, ariaLabel }) {
  return (
    <a href={href} aria-label={ariaLabel}>
      <Icon width="25" />
    </a>
  );
}

SocialIconLink.propTypes = {
  Icon: propTypes.func.isRequired,
  href: propTypes.string.isRequired,
  ariaLabel: propTypes.string.isRequired,
};

export default SocialIconLink;
