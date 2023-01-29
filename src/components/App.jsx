import { useState } from 'react';
// import React, { Component } from "react";
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
          good={setGood}
          neutral={setNeutral}
          bad={setBad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
        ) : (<Notification message="There is no feedback" />)
        }
        </div>
        
      )
}

export default App

// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }
//   const [good,setGood] = useState()

  // handleClick = event => {
  //   const name = event.target.name;
  //   this.setState(prevState => {
  //     return { [name]: (prevState[name] += 1) };
  //   });
  // }

//   countTotalFeedback = () => {
//         const { good, neutral, bad } = this.state;
//         return (good + neutral + bad);
//   }
    
//   countPositiveFeedbackPercentage = () => {
//         return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   }

//   render() {
//     return (
//         <div className={css.feedback}>
        
//         <Section
//           title='Please leave feedback' />
        
//         <FeedbackOptions
//           options={['good', 'neutral', 'bad']}
//           onLeaveFeedback={this.handleClick} />
        
//         <Section
//           title='Statistics' />
        
//         {this.countTotalFeedback() ? (
//           <Statistics
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={this.countTotalFeedback()}
//           positivePercentage={this.countPositiveFeedbackPercentage()}
//         />
//         ) : (<Notification message="There is no feedback" />)
//         }
//         </div>
        
//       )
// }
// }