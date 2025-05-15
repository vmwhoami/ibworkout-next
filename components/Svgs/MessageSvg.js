import React from "react";
import PropTypes from "prop-types";

const MessageSvg = ({ styling }) => (
  <svg className={styling} id="icon-mesaj" viewBox="0 0 35 32">
    <path d="M11.3 16h12.1v1h-12.1v-1z" />
    <path d="M17.5 0.5c-9.4 0-17 6.4-17 14.3 0 3.3 1.4 6.5 3.9 9.1l0.1 0.1v7.8l7.6-3.4c1.7 0.5 3.5 0.7 5.4 0.7 9.4 0 17-6.4 17-14.3s-7.6-14.3-17-14.3zM17.6 28.1c-1.8 0-3.5-0.2-5.3-0.7h-0.3l-6.4 2.9v-6.6l-0.4-0.4c-2.4-2.4-3.7-5.4-3.7-8.5 0-7.3 7.2-13.3 16-13.3s16 6 16.1 13.3c0 7.3-7.2 13.3-16 13.3z" />
    <path d="M11.3 12.2h12.1v1h-12.1v-1z" />
  </svg>
);

MessageSvg.propTypes = {
  styling: PropTypes.string.isRequired,
};

export default MessageSvg;
