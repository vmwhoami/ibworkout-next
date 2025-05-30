import React from "react";
import PropTypes from "prop-types";

const PhoneSvg = ({ styling }) => (
  <svg className={styling} id="icon-phone" viewBox="0 0 20 20">
    <path d="M11.229 11.229c-1.583 1.582-3.417 3.096-4.142 2.371-1.037-1.037-1.677-1.941-3.965-0.102-2.287 1.838-0.53 3.064 0.475 4.068 1.16 1.16 5.484 0.062 9.758-4.211 4.273-4.274 5.368-8.598 4.207-9.758-1.005-1.006-2.225-2.762-4.063-0.475s-0.936 2.927 0.103 3.965c0.722 0.725-0.791 2.559-2.373 4.142z" />
  </svg>
);

PhoneSvg.propTypes = {
  styling: PropTypes.string.isRequired,
};

export default PhoneSvg;