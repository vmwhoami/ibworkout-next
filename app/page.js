// app/page.js
import reviewsData from "../data/reviews.json";
import { Suspense } from "react";
import Heading from "../components/pages/head";
import How from "../components/pages/how";
import Why from "../components/pages/why";
import Steps from "../components/pages/steps";
import Trainer from "../components/pages/trainer";
import Types from "../components/pages/types";
import Testimonials from "../components/pages/testimonials";
import Contact from "../components/pages/contact/contact";
import Messenging from "../components/messaging";
import Footer from "../components/pages/footer";

// Metadata
export const metadata = {
  title: "Inna Bogdan Personal Trainer",
  description: "Inna Bogdan vmwhoami",
};

async function getTestimonialData() {
  // reviewsData.reviews is an Array of your three objects
  return reviewsData.reviews;
}

export default async function Home() {
  const testimonialData = await getTestimonialData();

  return (
    <main>
      <Heading />
      <How />
      <Why />
      <Steps />
      <Trainer />
      <Types />
      <Suspense fallback={<div>Loading testimonials...</div>}>
        <Testimonials testimonials={testimonialData} />
      </Suspense>
      <Contact />
      <Messenging />
      <Footer />
    </main>
  );
}
