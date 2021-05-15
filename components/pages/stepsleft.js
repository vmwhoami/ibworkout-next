import { Barbel, Question, Present } from '../Svgs';

const StepsLeft = () => (
  <div className="steps__left">
    <div className="steps__wrapper reverse">
      <div className="steps__textwrap">
        <h4>Выберите тип тренинга</h4>
        <p>
          Каждый из них решает разные задачи:
          помогает снизить вес, поддерживает тело в форме,
          укрепляет мышечный корсет или работает с растяжкой.
        </p>
      </div>
      <div className="steps__svgwrap">
        <Barbel />
      </div>
    </div>

    <div className="steps__wrapper reverse">
      <div className="steps__textwrap">
        <h4>Оставьте заявку</h4>
        <p>
          Заполните короткую анкету, и мы составим для
          вас оптимальную программу.
        </p>
      </div>
      <div className="steps__svgwrap">
        <Question />
      </div>
    </div>

    <div className="steps__wrapper reverse">
      <div className="steps__textwrap">
        <h4>Пройдите пробную тренировку</h4>
        <p>
          Начните заниматься с выбранным тренером бесплатно:
          так вы поймете, подходят ли вам программа и формат занятий.
        </p>
      </div>

      <div className="steps__svgwrap">
        <Present />
      </div>
    </div>

  </div>
);

export default StepsLeft;
