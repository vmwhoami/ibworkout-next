
import StepsLeft from './stepsleft';
import StepsRight from './StepsRight';

const Steps = () => (
  <>
    <div className="steps">
      <StepsLeft />
      <div className="steps__imgcon">
        <img className="steps__img" src="/images/iphone12black.png " alt="iphone12" />
      </div>
      <StepsRight />
    </div>
  </>
);

export default Steps;
