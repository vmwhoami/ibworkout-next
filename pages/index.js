import Head from 'next/head';
import Heading from '../components/pages/head';
import How from '../components/pages/how';
import Why from '../components/pages/why';
import Steps from '../components/pages/steps';
import Trainer from '../components/pages/trainer';
import Types from '../components/pages/types';
import Testimonials from '../components/pages/testimonials';
import Footer from '../components/pages/footer';
import Messenging from '../components/messaging';
import Form from '../components/pages/contact';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Inna Bogdan Personal trainer</title>
        <meta name="description" content="Inna Bogdan vmwhoami" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading />
      <How />
      <Why />
      <Steps />
      <Trainer />
      <Types />
      <Testimonials />
      <Form />
      <Messenging />
      <Footer />
    </div>
  );
}
