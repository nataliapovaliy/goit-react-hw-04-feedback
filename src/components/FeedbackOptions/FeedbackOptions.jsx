import React from "react";
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions(options, onLeaveFeedback) {
    
    return (
        <>
        <button className={css.btn} key={options.good} onClick={onLeaveFeedback.handleClickGood}>Good</button>
        <button className={css.btn} key={options.neutral} onClick={onLeaveFeedback.handleClickNeutral}>Neutral</button>
        <button className={css.btn} key={options.bad} onClick={onLeaveFeedback.handleClickBad}>Bad</button>
        </>
    )
}


