import React from "react";
import css from './Statistics.module.css';

export default function Statistics ({good, neutral, bad, total, positivePercentage}) {
    return (
        <>
            <div>
                {/* <h2 className={css.title}>Statistics</h2> */}
                <p className={css.item}>Good: {good}</p>
                <p className={css.item}>Neutral: {neutral}</p>
                <p className={css.item}>Bad: {bad}</p>
                <p className={css.item}>Total: {total}</p>
                <p className={css.item}>Positive feedback: {positivePercentage}%</p>
            </div>
        </>
    )
}