import React from "react";
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions ({options, handleClickGood, handleClickNeutral, handleClickBad}) {
    
    return (
        <>
            <button
                className={css.btn}
                type='button'
                key={options.good}
                name={options.good}
                onClick={handleClickGood}>
                good
            </button>
            <button
                className={css.btn}
                type='button'
                key={options.neutral}
                name={options.neutral}
                onClick={handleClickNeutral}>
                neutral
            </button>
            <button
                className={css.btn}
                type='button'
                key={options.bad}
                name={options.bad}
                onClick={handleClickBad}>
                bad
            </button>
        </>
    )

    // return (
    //     <>
    //         {options.map(option => {
    //             return (
    //                 <button
    //                     className={css.btn}
    //                     type='button'
    //                     key={option}
    //                     name={option}
    //                     onClick={onLeaveFeedback}>
    //                     {option}
    //                 </button>
    //             )
    //         })}
    //     </>
    // )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
