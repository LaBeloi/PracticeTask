import React from "react";
import styles from './icon.css';
import classNames from 'classnames';

export enum EColor {
    yellow = 'yellow',
    purple = 'purpure',
    green = 'strangeGreen',
}

export enum EContent {
    number = '#',
    string = '"',
    boolean = 'tf',
}

export enum ESize {
    px17 = 17,
    px24 = 24,
}

interface IIcon {
    color: EColor;
    content: EContent;
    size: ESize;
}

export function Icon( props: IIcon ) {

    const classes = classNames(
        styles.block,
        styles[props.color],
        styles[`s${props.size}`]
    )
    return (
        <div className={classes}>
            <span className={styles.span}>{props.content}</span>
        </div>
    )
}