import React from "react";
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions ({options, onLeaveFeedback}) {
    
    return (
        <>
            {options.map(option => {
                return (
                    <button
                        className={css.btn}
                        type='button'
                        key={option}
                        onClick={onLeaveFeedback}>
                        {option}
                    </button>
                )
            })}
        </>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
