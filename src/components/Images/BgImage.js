import React from "react";
import PropTypes from "prop-types";

const BgImage = ({
  fluid,
  title,
  height,
  mobileHeight,
  overlayColor,
  children,
  className,
}) => (
  <div>
    <div
      fluid={fluid}
      title={title}
      height={height}
      mobileHeight={mobileHeight}
    />
    <div className={className}>{children}</div>
  </div>
);
BgImage.propTypes = {
  fluid: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  overlayColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};
BgImage.defaultProps = {
  height: null,
  mobileHeight: null,
  overlayColor: "transparent",
  children: null,
  className: null,
};

export default BgImage;