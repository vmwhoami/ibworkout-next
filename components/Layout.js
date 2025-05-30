'use client'

import PropTypes from 'prop-types';
import Nav from './navbar/Nav';

const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
