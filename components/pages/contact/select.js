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
  const genKey = () => {
    return Math.random().toString(36).slice(2, 10)
  }

  return (
    <div className="select">
      <select className="select__select" name="select">
        {options.map(option => {
          return (
            <option key={genKey()} value={option}>
              option
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Select
