import { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import css from '../components/App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = event => {
    const name = event.target.name;
    if (name === 'good') { setGood(good + 1) }
    if (name === 'neutral') { setNeutral(neutral + 1) }
    if (name === 'bad') { setBad(bad + 1) }
    }
  
  function countTotalFeedback () {
        return (good + neutral + bad);
  }
    
  function countPositiveFeedbackPercentage () {
        return Math.round((good / countTotalFeedback()) * 100);
  }

    return (
        <div className={css.feedback}>
        
        <Section
          title='Please leave feedback' />
        
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
          />
        
        <Section
          title='Statistics' />
        
        {countTotalFeedback() ? (
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
        ) : (<Notification message="There is no feedback" />)
        }
        </div>
        
      )
}

export default App