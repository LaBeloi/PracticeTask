import React from "react";
import { useIP } from "../Hooks/useIP";
import { EColor, EContent, ESize, Icon } from "../Icon/Icon";
import { ListOfResults } from "./ListOfResults/ListOfResults";
import styles from './resultField.css';

interface IResultField {
    ip: string
}
export function ResultField(props:IResultField) {
    const data = useIP(props.ip);
    return (
        <div className={styles.resultField}>
            {Object.keys(data).length != 0
                ? Object.keys(data).includes('error') 
                    ?  <span className={styles.error}>Something went wrong 😞. Please try again.</span>
                    : <ListOfResults data={data} />
                : (<span className={styles.loading}>Loading...</span>)
            }
        </div>
    )
}