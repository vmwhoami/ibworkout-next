import React from 'react'

const Select = () => {
  const options = [
    "Выберите цель ваших тренировок",
    "Держать все тело в тонусе",
    "Прокачка мышц пресса, ног и ягодиц",
    "Увеличение силы / набор массы",
    "Снижение веса",
    "Здоровая спина ",
    "Йога / Пилатес для здоровья",
    "Улучшить гибкость и растяжку"
  ]
  return (
    <>
      <select className="select__select" name="select">
      </select>
    </>
  )
}

export default Select
