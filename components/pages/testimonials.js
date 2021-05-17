import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Instagram, NextIcon, PrevIcon } from '../Svgs';

const Testimonials = ({ testimonials }) => {
  const { reviews } = testimonials;
  const [index, setIndex] = useState(0);
  const {
    name, image, comment, instaLink,
  } = reviews[index];
  const checkNum = (num) => {
    if (num < 0) {
      return reviews.length - 1;
    } if (num > reviews.length - 1) {
      return 0;
    }
    return num;
  };
  const prevAction = () => {
    setIndex((index) => {
      const current = index - 1;
      return checkNum(current);
    });
  };
  const nextAction = () => {
    setIndex((index) => {
      const current = index + 1;
      return checkNum(current);
    });
  };
  return (
    <div className="testimonials" id="testimonials">
      <h3 className="hcenter">Отзывы наших клиентов</h3>
      <div className="testimonials__container">

        <div className="client__comment">

          <div className="client__img">
            <img src={image} alt="client" />
          </div>
          <div className="client__name">
            <h5>{name}</h5>
            <a className="nav__roundbtn client__svg" target="blank" href={instaLink}>
              <Instagram styling="nav__svg" />
            </a>
          </div>
          <p>{comment}</p>

          <button
            aria-label="previous-btn"
            type="button"
            className="switchbtn left"
            onKeyDown={(e) => (e.key === 37 ? prevAction : null)}
            onClick={prevAction}
          >
            <PrevIcon styling="switch-icon" />
          </button>
          <button
            aria-label="next-btn"
            type="button"
            className="switchbtn right"
            onKeyDown={(e) => (e.key === 40 ? nextAction : null)}
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
  testimonials: PropTypes.instanceOf(Object).isRequired,
};

export default Testimonials;
