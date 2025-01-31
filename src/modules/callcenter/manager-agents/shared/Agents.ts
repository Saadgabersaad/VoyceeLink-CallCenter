import React from "react";

export interface Agents {
    [key: string]: any;
    id: string;
    status: string;
    language: string;
    campaign: string;
    speciality: string;
    client: string;
    liveStatus: string;

}

export interface StyleMap {
    [key: string]: React.CSSProperties;
}
