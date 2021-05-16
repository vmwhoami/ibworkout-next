import PropTypes from 'prop-types';

const Select = ({ handleChange, value }) => {
  const options = [
    'Держать все тело в тонусе',
    'Прокачка мышц пресса, ног и ягодиц',
    'Увеличение силы / набор массы',
    'Снижение веса',
    'Здоровая спина ',
    'Йога / Пилатес для здоровья',
    'Улучшить гибкость и растяжку',
  ];
  const genKey = () => Math.random().toString(36).slice(2, 10);

  return (
    <div className="select">
      <select className="select__select" name="select" id="select" value={value} onChange={(e) => handleChange(e)}>
        <option key={genKey()} value="Выберите цель ваших тренировок">
          Выберите цель ваших тренировок
        </option>
        {options.map((option) => (

          <option key={genKey()} value={option}>
            {option}
          </option>

        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Object).isRequired,
};
export default Select;
