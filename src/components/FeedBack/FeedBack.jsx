import React, { Component } from 'react'
import css from './FeedBack.module.css'

class FeedBack extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    
    handleClickGood = () => {
        this.setState((prevState) => ({
            good: prevState.good + 1
        }))
    }
    
    handleClickNeutral = () => {
        this.setState((prevState) => ({neutral: prevState.neutral + 1}))
    }
    
    handleClickBad = () => {
        this.setState((prevState) => ({bad: prevState.bad + 1}))
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return (good + neutral + bad);
    }
    
    countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }

    render() {
        return (
            <>
                <div className={css.feedback}>
                    <h2 className={css.title}>Please leave feedback</h2>
                    <button className={css.btn} onClick={this.handleClickGood}>Good</button>
                    <button className={css.btn} onClick={this.handleClickNeutral}>Neutral</button>
                    <button className={css.btn} onClick={this.handleClickBad}>Bad</button>
                    <div>
                        <h2 className={css.title}>Statistics</h2>
                        <p className={css.item}>Good: {this.state.good}</p>
                        <p className={css.item}>Neutral: {this.state.neutral}</p>
                        <p className={css.item}>Bad: {this.state.bad}</p>
                        <p className={css.item}>Total: {this.countTotalFeedback()}</p>
                        <p className={css.item}>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
                    </div>
                </div>
                </>
            )
        }
}

export default FeedBack