import React from "react";
import { Icon, EColor, EContent, ESize } from "../../Icon/Icon";
import styles from './ListOfResults.css';

export interface IErrorData {
    error: boolean,
    ip: string,
    reason: string,
}

export interface IResultFieldData {
    ip?: string,
    version?: string,
    city?: string,
    region?: string,
    region_code?: string,
    country_code?: string,
    country_code_iso3?: string,
    country_name?: string,
    country_capital?: string,
    country_tld?: string,
    continent_code?: string,
    in_eu?: boolean,
    postal?: string,
    latitude?: number,
    longitude?: number,
    timezone?: string,
    utc_offset?: string,
    country_calling_code?: string,
    currency?: string,
    currency_name?: string,
    languages?: string,
    country_area?: number,
    country_population?: number,
    asn?: string,
    org?: string,
};

interface IResultProps {
    data: IResultFieldData
}

export function ListOfResults(data:IResultProps) {
    return (
        <ul className={styles.resultList}>
            <li className={styles.resultItem}>
                <Icon color={EColor.yellow} content={EContent.string} size={ESize.px24}/>
                <span className={styles.resultName}> ip: {typeof data.data.ip === typeof '' ? <span className={styles.yellow}>{data.data.ip}</span> : typeof data.data.ip === typeof 1 ? <span className={styles.green}>{data.data.ip}</span> : <span className={styles.purple}>{`${data.data.ip}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.yellow} content={EContent.string} size={ESize.px24}/>
                <span className={styles.resultName}> version: {typeof data.data.version === typeof '' ? <span className={styles.yellow}>{data.data.version}</span> : typeof data.data.version === typeof 1 ? <span className={styles.green}>{data.data.version}</span> : <span className={styles.purple}>{`${data.data.version}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.yellow} content={EContent.string} size={ESize.px24}/>
                <span className={styles.resultName}> city: {typeof data.data.city === typeof '' ? <span className={styles.yellow}>{data.data.city}</span> : typeof data.data.city === typeof 1 ? <span className={styles.green}>{data.data.city}</span> : <span className={styles.purple}>{`${data.data.city}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.yellow} content={EContent.string} size={ESize.px24}/>
                <span className={styles.resultName}> region: {typeof data.data.region === typeof '' ? <span className={styles.yellow}>{data.data.region}</span> : typeof data.data.region === typeof 1 ? <span className={styles.green}>{data.data.region}</span> : <span className={styles.purple}>{`${data.data.region}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.yellow} content={EContent.string} size={ESize.px24}/>
                <span className={styles.resultName}> region_code: {typeof data.data.region_code === typeof '' ? <span className={styles.yellow}>{data.data.region_code}</span> : typeof data.data.region_code === typeof 1 ? <span className={styles.green}>{data.data.region_code}</span> : <span className={styles.purple}>{`${data.data.region_code}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.yellow} content={EContent.string} size={ESize.px24}/>
                <span className={styles.resultName}> country_code: {typeof data.data.country_code === typeof '' ? <span className={styles.yellow}>{data.data.country_code}</span> : typeof data.data.country_code === typeof 1 ? <span className={styles.green}>{data.data.country_code}</span> : <span className={styles.purple}>{`${data.data.country_code}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.yellow} content={EContent.string} size={ESize.px24}/>
                <span className={styles.resultName}> country_code_iso3: {typeof data.data.country_code_iso3 === typeof '' ? <span className={styles.yellow}>{data.data.country_code_iso3}</span> : typeof data.data.country_code_iso3 === typeof 1 ? <span className={styles.green}>{data.data.country_code_iso3}</span> : <span className={styles.purple}>{`${data.data.country_code_iso3}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.yellow} content={EContent.string} size={ESize.px24}/>
                <span className={styles.resultName}> country_name: {typeof data.data.country_name === typeof '' ? <span className={styles.yellow}>{data.data.country_name}</span> : typeof data.data.country_name === typeof 1 ? <span className={styles.green}>{data.data.country_name}</span> : <span className={styles.purple}>{`${data.data.country_name}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.yellow} content={EContent.string} size={ESize.px24}/>
                <span className={styles.resultName}> country_capital: {typeof data.data.country_capital === typeof '' ? <span className={styles.yellow}>{data.data.country_capital}</span> : typeof data.data.country_capital === typeof 1 ? <span className={styles.green}>{data.data.country_capital}</span> : <span className={styles.purple}>{`${data.data.country_capital}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.yellow} content={EContent.string} size={ESize.px24}/>
                <span className={styles.resultName}> country_tId: {typeof data.data.country_tld === typeof '' ? <span className={styles.yellow}>{data.data.country_tld}</span> : typeof data.data.country_tld === typeof 1 ? <span className={styles.green}>{data.data.country_tld}</span> : <span className={styles.purple}>{`${data.data.country_tld}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.yellow} content={EContent.string} size={ESize.px24}/>
                <span className={styles.resultName}> continent_code: {typeof data.data.continent_code === typeof '' ? <span className={styles.yellow}>{data.data.continent_code}</span> : typeof data.data.continent_code === typeof 1 ? <span className={styles.green}>{data.data.continent_code}</span> : <span className={styles.purple}>{`${data.data.continent_code}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.purple} content={EContent.boolean} size={ESize.px17}/>
                <span className={styles.resultName}> in_eu: {typeof data.data.in_eu === typeof '' ? <span className={styles.yellow}>{data.data.in_eu}</span> : typeof data.data.in_eu === typeof 1 ? <span className={styles.green}>{data.data.in_eu}</span> : <span className={styles.purple}>{`${data.data.in_eu}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.yellow} content={EContent.string} size={ESize.px24}/>
                <span className={styles.resultName}> postal: {typeof data.data.postal === typeof '' ? <span className={styles.yellow}>{data.data.postal}</span> : typeof data.data.postal === typeof 1 ? <span className={styles.green}>{data.data.postal}</span> : <span className={styles.purple}>{`${data.data.postal}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.green} content={EContent.number} size={ESize.px17}/>
                <span className={styles.resultName}> latitude: {typeof data.data.latitude === typeof '' ? <span className={styles.yellow}>{data.data.latitude}</span> : typeof data.data.latitude === typeof 1 ? <span className={styles.green}>{data.data.latitude}</span> : <span className={styles.purple}>{`${data.data.latitude}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.green} content={EContent.number} size={ESize.px17}/>
                <span className={styles.resultName}> longitude: {typeof data.data.longitude === typeof '' ? <span className={styles.yellow}>{data.data.longitude}</span> : typeof data.data.longitude === typeof 1 ? <span className={styles.green}>{data.data.longitude}</span> : <span className={styles.purple}>{`${data.data.longitude}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.yellow} content={EContent.string} size={ESize.px24}/>
                <span className={styles.resultName}> timezone: {typeof data.data.timezone === typeof '' ? <span className={styles.yellow}>{data.data.timezone}</span> : typeof data.data.timezone === typeof 1 ? <span className={styles.green}>{data.data.timezone}</span> : <span className={styles.purple}>{`${data.data.timezone}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.yellow} content={EContent.string} size={ESize.px24}/>
                <span className={styles.resultName}> utc_offset: {typeof data.data.utc_offset === typeof '' ? <span className={styles.yellow}>{data.data.utc_offset}</span> : typeof data.data.utc_offset === typeof 1 ? <span className={styles.green}>{data.data.utc_offset}</span> : <span className={styles.purple}>{`${data.data.utc_offset}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.yellow} content={EContent.string} size={ESize.px24}/>
                <span className={styles.resultName}> country_calling_code: {typeof data.data.country_calling_code === typeof '' ? <span className={styles.yellow}>{data.data.country_calling_code}</span> : typeof data.data.country_calling_code === typeof 1 ? <span className={styles.green}>{data.data.country_calling_code}</span> : <span className={styles.purple}>{`${data.data.country_calling_code}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.yellow} content={EContent.string} size={ESize.px24}/>
                <span className={styles.resultName}> currency: {typeof data.data.currency === typeof '' ? <span className={styles.yellow}>{data.data.currency}</span> : typeof data.data.currency === typeof 1 ? <span className={styles.green}>{data.data.currency}</span> : <span className={styles.purple}>{`${data.data.currency}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.yellow} content={EContent.string} size={ESize.px24}/>
                <span className={styles.resultName}> currency_name: {typeof data.data.currency_name === typeof '' ? <span className={styles.yellow}>{data.data.currency_name}</span> : typeof data.data.currency_name === typeof 1 ? <span className={styles.green}>{data.data.currency_name}</span> : <span className={styles.purple}>{`${data.data.currency_name}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.yellow} content={EContent.string} size={ESize.px24}/>
                <span className={styles.resultName}> languages: {typeof data.data.languages === typeof '' ? <span className={styles.yellow}>{data.data.languages}</span> : typeof data.data.languages === typeof 1 ? <span className={styles.green}>{data.data.languages}</span> : <span className={styles.purple}>{`${data.data.languages}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.green} content={EContent.number} size={ESize.px17}/>
                <span className={styles.resultName}> country_area: {typeof data.data.country_area === typeof '' ? <span className={styles.yellow}>{data.data.country_area}</span> : typeof data.data.country_area === typeof 1 ? <span className={styles.green}>{data.data.country_area}</span> : <span className={styles.purple}>{`${data.data.country_area}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.green} content={EContent.number} size={ESize.px17}/>
                <span className={styles.resultName}> country_population: {typeof data.data.country_population === typeof '' ? <span className={styles.yellow}>{data.data.country_population}</span> : typeof data.data.country_population === typeof 1 ? <span className={styles.green}>{data.data.country_population}</span> : <span className={styles.purple}>{`${data.data.country_population}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.yellow} content={EContent.string} size={ESize.px24}/>
                <span className={styles.resultName}> asn: {typeof data.data.asn === typeof '' ? <span className={styles.yellow}>{data.data.asn}</span> : typeof data.data.asn === typeof 1 ? <span className={styles.green}>{data.data.asn}</span> : <span className={styles.purple}>{`${data.data.asn}`}</span>}</span>
            </li>
            <li className={styles.resultItem}>
                <Icon color={EColor.yellow} content={EContent.string} size={ESize.px24}/>
                <span className={styles.resultName}> org: {typeof data.data.org === typeof '' ? <span className={styles.yellow}>{data.data.org}</span> : typeof data.data.org === typeof 1 ? <span className={styles.green}>{data.data.org}</span> : <span className={styles.purple}>{`${data.data.org}`}</span>}</span>
            </li>
    </ul>
    )
}