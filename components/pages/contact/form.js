"use client";

import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import useForm from "./useForm";
import validations from "./validations";
import "react-phone-input-2/lib/style.css";

const Form = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validations);

  // Stable list of select options
  const options = [
    { label: "Choose the purpose of your training", value: "" },
    { label: "Keep the whole body in good shape", value: "full_body" },
    {
      label: "Pumping the muscles of the press, legs and buttocks",
      value: "press_legs_buttocks",
    },
    { label: "Increased strength / mass gain", value: "mass_gain" },
    { label: "Weight loss", value: "weight_loss" },
    { label: "Healthy back", value: "healthy_back" },
    { label: "Yoga / Pilates for health", value: "yoga_pilates" },
    {
      label: "Improve flexibility and strength",
      value: "flexibility_strength",
    },
  ];

  // Custom handler to adapt PhoneInput onChange to our form
  const handlePhoneChange = (phone) => {
    handleChange({ target: { name: "phone", value: phone } });
  };

  return (
    <div className="form">
      <h3 className="hcenter text-white">Book a session with our coach</h3>
      <form
        name="contact"
        className="form__form"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          type="text"
          placeholder="Name and surname"
          name="name"
          value={values.name || ""}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          value={values.email || ""}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <PhoneInput
          country="md"
          containerClass="phone"
          inputClass="phone_input"
          inputStyle={{ paddingTop: 25, paddingBottom: 25 }}
          name="phone"
          id="phone"
          placeholder="Enter phone number"
          value={values.phone || ""}
          onChange={handlePhoneChange}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <div className="select">
          <select
            className="select__select"
            name="select"
            id="select"
            value={values.select || ""}
            onChange={handleChange}
          >
            {options.map(({ label, value }) => (
              <option
                key={value || "placeholder"}
                value={value}
                disabled={value === ""}
              >
                {label}
              </option>
            ))}
          </select>
        </div>
        {errors.select && <p className="error">{errors.select}</p>}

        <div className="textarea">
          <textarea
            name="comment"
            id="comment"
            placeholder="Please enter your city or time zone. How can I contact you (phone, whatsapp, etc.) and what time?"
            rows={4}
            spellCheck="false"
            className="textarea__text"
            value={values.comment || ""}
            onChange={handleChange}
          />
        </div>
        {errors.comment && <p className="error">{errors.comment}</p>}

        <div className="btncontainer">
          <button type="submit" className="formbtn">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
