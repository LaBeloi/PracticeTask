import React, { ChangeEvent, FormEvent, useState } from "react";
import { ResultField } from "../ResultField/ResultField";
import styles from './searchBlock.css';

export function SearchBlock() {
    const [ip, setIp] = useState('');
    const [open, isOpen] = useState(false);

    function handleSubmit(e:FormEvent) {
        e.preventDefault()
        if (ip !== "") {
            isOpen(true)
        }
    }

    function handleChange(e:ChangeEvent<HTMLInputElement>) {
        isOpen(false)
        setIp(e.target.value)
    }

    return (
        <div className={styles.searchBlock}>
            <form className={styles.searchForm} onSubmit={handleSubmit}>
                <input className={styles.searchInput} value={ip} onChange={handleChange} type="text" placeholder="_._._._"/>
                <button type="submit" className={styles.searchSubmit}>Search</button>
            </form>
            {open ? <ResultField ip={ip} /> : <span className={styles.info}>Enter IP and press “Search” to get geolocation data</span>}
        </div>
    )   
}