'use client';

import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import store from '../redux/store';

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <Layout>
        {children}
      </Layout>
    </Provider>
  );
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};