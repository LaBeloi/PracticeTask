import React, { useEffect, useState } from "react";
import { IResultFieldData, IErrorData } from "../ResultField/ListOfResults/ListOfResults";

type TState = IResultFieldData | IErrorData;

export function useIP(IP: string) {
    const [list, setList] = useState<TState>({})
    if (IP) {
        useEffect(() => {
            fetch(`https://ipapi.co/${IP}/json/`)
                .then((res) => { return res.json() })
                .then((json) => {
                    setList(json);
                })
                .catch((err) => { console.log(err) })
        }, [IP])
    }
    return list;
};