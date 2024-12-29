import React from "react";
import PositionView from "modules/hhrr/positions/epmloyees/layout/PositionView";
import { PositionContextProvider } from "modules/hhrr/positions/epmloyees/shared/PositionSelectedId";


export default function Employees(positionId: string) {
    return (
        <>

         <PositionView positionId={positionId} />

</>
    )
}
