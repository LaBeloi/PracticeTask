import React from "react";
import styles from './header.css';
import img from '../../img/tick.png';
import { Icon, EContent, EColor, ESize } from "../Icon/Icon";

export function Header() {
    return (
        <header className={styles.header}>
            <img src={`${img}`} alt="" />
            Find My Ip
        </header>
    );
}