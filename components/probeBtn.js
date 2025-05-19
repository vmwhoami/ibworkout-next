"use client";

import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const ProbeBtn = ({ styling, text }) => {
  return (
    <Link href="#form" className={styling}>
      {text}
    </Link>
  );
};

ProbeBtn.propTypes = {
  styling: PropTypes.string.isRequired,
  text: PropTypes.string,
};

ProbeBtn.defaultProps = {
  text: "Запишитесь на бесплатную пробную тренировку!",
};

export default ProbeBtn;
