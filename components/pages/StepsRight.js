import { Clock, Package, Trophy } from '../Svgs';

const StepsRight = () => (
  <div className="steps__right">
    <div className="steps__wrapper">
      <div className="steps__svgwrap">
        <Clock />

      </div>
      <div className="steps__textwrap">
        <h4>Запланируйте занятия</h4>
        <p>Выберите удобное время и регулярно занимайтесь с персональным тренером.</p>
      </div>
    </div>

    <div className="steps__wrapper">
      <div className="steps__svgwrap">
        <Package />
      </div>
      <div className="steps__textwrap">
        <h4>Выберите пакет тренировок</h4>
        <p>
          Определите комфортную нагрузку и
          тренируйтесь один, два или три раза в
          неделю от 825 руб./час.
        </p>
      </div>
    </div>

    <div className="steps__wrapper">
      <div className="steps__svgwrap">
        <Trophy />
      </div>
      <div className="steps__textwrap">
        <h4>Достигайте результата</h4>
        <p>Добивайтесь целей с рекомендациями вашего наставника.</p>
      </div>
    </div>
  </div>
);


export default StepsRight;