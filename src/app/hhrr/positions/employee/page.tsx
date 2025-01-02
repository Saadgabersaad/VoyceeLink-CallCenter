'use client';
import React from 'react';
import PositionView from "modules/hhrr/positions/epmloyees/layout/PositionView";
import { useEmployeesPosition } from "modules/hhrr/positions/epmloyees/hooks/use-employeesPosition";


export default function Employees() {
    const { data, isLoading } = useEmployeesPosition();


    return (
        <PositionView isLoading={isLoading} data={data} />
    );
}
