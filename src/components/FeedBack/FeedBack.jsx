import React, { Component } from "react";
import css from './FeedBack.module.css'

class FeedBack extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    render() {
        return (
            <>
                <div className={css.feedback}>
                    <h2 className={css.title}>Please leave feedback</h2>
                    <button type='button' className={css.btn}>Good</button>
                    <button type='button' className={css.btn}>Neutral</button>
                    <button type='button' className={css.btn}>Bad</button>
                    <div>
                        <h2 className={css.title}>Statistics</h2>
                        <p className={css.item}>Good:</p>
                        <p className={css.item}>Neutral:</p>
                        <p className={css.item}>Bad:</p>
                    </div>
                </div>
                </>
            )
        }
}

export default FeedBack