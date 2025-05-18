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
    <div className="testimonials" id="testimonials">
      <h3 className="hcenter">Testimonials</h3>
      <div className="testimonials__container">
        <div className="client__comment">
          <div className="client__img">
            <img src={image} alt="client" loading="lazy" />
          </div>
          <div className="client__name">
            <h5>{name}</h5>
            <Link
              className="nav__roundbtn client__svg"
              target="_blank"
              rel="noopener noreferrer"
              href={instaLink}
            >
              <Instagram styling="nav__svg" />
            </Link>
          </div>
          <p>{comment}</p>

          <button
            aria-label="previous-btn"
            type="button"
            className="switchbtn left"
            onKeyDown={(e) => handleKeyNavigation(e, prevAction)}
            onClick={prevAction}
          >
            <PrevIcon styling="switch-icon" />
          </button>
          <button
            aria-label="next-btn"
            type="button"
            className="switchbtn right"
            onKeyDown={(e) => handleKeyNavigation(e, nextAction)}
            onClick={nextAction}
          >
            <NextIcon styling="switch-icon" />
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
