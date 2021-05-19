import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'

const ProbeBtn = (props) => {
  const { styling } = props;
  return (
    <Link href="#form">
      <a className={styling}>Записаться на пробную тренировку</a>
    </Link>
  );
};
export default ProbeBtn;

ProbeBtn.propTypes = {
  styling: PropTypes.string.isRequired,
};
