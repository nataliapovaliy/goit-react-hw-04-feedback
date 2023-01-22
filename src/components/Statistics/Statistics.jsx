import React from "react";
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
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

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};

export default Statistics;