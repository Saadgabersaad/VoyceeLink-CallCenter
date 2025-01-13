import React from "react";

export interface Logs {
    [key: string]: any;
    type: string;
    id: string;
    interpreter: string;
    client: string;
    language: string;
    speciality: string;
    status: string;
    duration: string;
    timeStamp: string;
}

export interface StyleMap {
    [key: string]: React.CSSProperties;
}
