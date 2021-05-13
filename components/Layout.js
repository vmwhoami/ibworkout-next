import PropTypes from 'prop-types';

import Nav from './Nav';
import Head from './pages/head';
import How from './pages/how';
import Why from './pages/why';
import Steps from './pages/steps';
import Trainer from './pages/trainer';
import Types from './pages/types';
import Testimonials from './pages/testimonials';
import Footer from './pages/footer';
// import Messenging from './messaging';
// import Form from './pages/contact';

const Layout = ({ children }) => (
  <>
    <Nav />
    <Head />
    <How />
    <Why />
    <Steps />
    <Trainer />
    <Types />
    {/* <Form />
      <Testimonials />
      <Messenging /> */}
    <Footer />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
