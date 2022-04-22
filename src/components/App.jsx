import {useState} from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App ()  {
  const [good, setGood]=useState(0)
  const [neutral, setNeutral]=useState(0)
  const [bad, setBad]=useState(0)
  
  const handleIncrement = event => {
    switch(event.target.name){
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

    default:
      return;
    }
  }
  

  const handleIncrementTotal = () =>
    ( good + bad + neutral);

  const handleIncrementPositive = () =>
    ( Math.round((good/(good+bad+neutral) ) * 100));

  
    
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            handleFeedback={handleIncrement}
          />
          {good !== 0 || bad !== 0 || neutral !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
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

