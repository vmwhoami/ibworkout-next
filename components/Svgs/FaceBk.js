import React from "react";
import PropTypes from "prop-types";

const FaceBk = (props) => {
  const { styling } = props;
  return (
    <svg className={styling} id="icon-facebook-official" viewBox="0 0 24 28">
      <path d="M22.672 2c0.734 0 1.328 0.594 1.328 1.328v21.344c0 0.734-0.594 1.328-1.328 1.328h-6.109v-9.297h3.109l0.469-3.625h-3.578v-2.312c0-1.047 0.281-1.75 1.797-1.75l1.906-0.016v-3.234c-0.328-0.047-1.469-0.141-2.781-0.141-2.766 0-4.672 1.687-4.672 4.781v2.672h-3.125v3.625h3.125v9.297h-11.484c-0.734 0-1.328-0.594-1.328-1.328v-21.344c0-0.734 0.594-1.328 1.328-1.328h21.344z" />
    </svg>
  );
};

FaceBk.propTypes = {
  styling: PropTypes.string.isRequired,
};

export default FaceBk;