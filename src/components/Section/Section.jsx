import React from "react";
import css from './Section.module.css'


export default function Section ({title}) {
    return (
        <h2 className={css.title}>{title}</h2>
    )
}