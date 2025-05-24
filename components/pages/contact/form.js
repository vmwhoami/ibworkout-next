"use client";

import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import useForm from "./useForm";
import validations from "./validations";
import "react-phone-input-2/lib/style.css";

const Form = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validations);

  const options = [
    { label: "Выберите цель тренировок", value: "" },
    { label: "Поддержание формы всего тела", value: "full_body" },
    {
      label: "Прокачка мышц пресса, ног и ягодиц",
      value: "press_legs_buttocks",
    },
    { label: "Увеличение силы/набор массы", value: "mass_gain" },
    { label: "Похудение", value: "weight_loss" },
    { label: "Здоровая спина", value: "healthy_back" },
    { label: "Йога/Пилатес для здоровья", value: "yoga_pilates" },
    {
      label: "Улучшение гибкости и силы",
      value: "flexibility_strength",
    },
  ];

  const handlePhoneChange = (phone) => {
    handleChange({ target: { name: "phone", value: phone } });
  };

  return (
    <div className="form"> {/* Сохраняем существующий класс для фона */}
      <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
        Записаться на тренировку с тренером
      </h3>
      <form
        name="contact"
        className="max-w-2xl mx-auto flex flex-col gap-6"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Поле имени */}
        <div>
          <input
            type="text"
            placeholder="Имя и фамилия"
            name="name"
            value={values.name || ""}
            onChange={handleChange}
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="mt-2 text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Поле email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Электронная почта"
            value={values.email || ""}
            onChange={handleChange}
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="mt-2 text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Телефон */}
        <div className="relative w-full">
          <PhoneInput
            country="md"
            containerClass="w-full"
            inputClass="w-full !py-6 !rounded-lg !border-gray-300 focus:!outline-none focus:!ring-2 focus:!ring-blue-500"
            name="phone"
            placeholder="Введите номер телефона"
            value={values.phone || ""}
            onChange={handlePhoneChange}
          />
          {errors.phone && <p className="mt-2 text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* Выпадающий список */}
        <div className="relative w-full">
          <select
            name="select"
            value={values.select || ""}
            onChange={handleChange}
            className="w-full p-4 rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {options.map(({ label, value }) => (
              <option
                key={value || "placeholder"}
                value={value}
                disabled={value === ""}
                className="text-gray-700"
              >
                {label}
              </option>
            ))}
          </select>
          {errors.select && <p className="mt-2 text-red-500 text-sm">{errors.select}</p>}
        </div>

        {/* Текстовое поле */}
        <div>
          <textarea
            name="comment"
            placeholder="Укажите ваш город или часовой пояс. Как с вами связаться (телефон, WhatsApp и т.д.) и в какое время?"
            rows={4}
            spellCheck="false"
            value={values.comment || ""}
            onChange={handleChange}
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          {errors.comment && <p className="mt-2 text-red-500 text-sm">{errors.comment}</p>}
        </div>

        {/* Кнопка отправки */}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;