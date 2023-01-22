import React, {Component} from "react";
// import FeedBack from './FeedBack/FeedBack';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import css from './FeedBack/FeedBack.module.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = event => {
    const name = event.target.name;
    this.setState(prevState => {
      return { [name]: (prevState[name] += 1) };
    });
  }

  // handleClickGood = () => {
  //       this.setState((prevState) => ({
  //           good: prevState.good + 1 }))
  //   }
  // handleClickNeutral = () => {
  //       this.setState((prevState) => ({neutral: prevState.neutral + 1}))
  //   }
  // handleClickBad = () => {
  //       this.setState((prevState) => ({bad: prevState.bad + 1}))
  //   }

  countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return (good + neutral + bad);
  }
    
  countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
        <div className={css.feedback}>
        
        <Section
          title='Please leave feedback' />
        
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleClick} />
        
        <Section
          title='Statistics' />
        
        {this.countTotalFeedback() ? (
          <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
        ) : (<Notification message="There is no feedback" />)
        }
        </div>
        
      )
}
}