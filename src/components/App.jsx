import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App() {
  const [options, setOptions] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
  });

  const handleIncrement = event => {
    const feedback = event.currentTarget.name;
    setOptions(prevState => ({
      ...prevState,
      [feedback]: prevState[feedback] + 1,
    }));
  };

  const total = options.good + options.bad + options.neutral;
  const handleIncrementTotal = () => total;

  const handleIncrementPositive = () =>
    Math.round((options.good / total) * 100);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} handleFeedback={handleIncrement} />
        {options.good !== 0 || options.bad !== 0 || options.neutral !== 0 ? (
          <Statistics
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
            total={handleIncrementTotal()}
            positivePercentage={handleIncrementPositive()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
