"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Instagram, NextIcon, PrevIcon } from "../Svgs";
import Link from "next/link";

const Testimonials = ({ testimonials }) => {
  const { reviews } = testimonials;
  const [index, setIndex] = useState(0);
  const { name, image, comment, instaLink } = reviews[index];

  const checkNum = (num) => {
    if (num < 0) return reviews.length - 1;
    if (num > reviews.length - 1) return 0;
    return num;
  };

  const prevAction = () => {
    setIndex((prev) => checkNum(prev - 1));
  };

  const nextAction = () => {
    setIndex((prev) => checkNum(prev + 1));
  };

  const handleKeyNavigation = (e, action) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      action();
    }
  };

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-gray-50" id="testimonials">
      <h3 className="text-3xl font-bold text-center mb-12">Отзывы</h3>
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-md">
              <img
                src={image}
                alt="клиент"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h5 className="text-xl font-semibold text-gray-800">{name}</h5>
            <Link
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              href={instaLink}
            >
              <Instagram className="w-6 h-6 text-gray-700" />
            </Link>
          </div>

          <p className="text-gray-600 text-center italic mb-8">"{comment}"</p>

          <button
            aria-label="предыдущий"
            type="button"
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full shadow-md p-3 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => handleKeyNavigation(e, prevAction)}
            onClick={prevAction}
          >
            <PrevIcon className="w-6 h-6 text-gray-700" />
          </button>
          <button
            aria-label="следующий"
            type="button"
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full shadow-md p-3 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => handleKeyNavigation(e, nextAction)}
            onClick={nextAction}
          >
            <NextIcon className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

Testimonials.propTypes = {
  testimonials: PropTypes.shape({
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        instaLink: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Testimonials;
