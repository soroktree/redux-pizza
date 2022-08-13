import React from "react";
import s from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
    return (
        <div className={s.root}>
            <h1>
                <span>😕</span>
                <br/>
                Ничего не найдено
            </h1>
            <p className={s.description}>
                К сожалению данная страница отсуствует
            </p>
        </div>
    )
}

