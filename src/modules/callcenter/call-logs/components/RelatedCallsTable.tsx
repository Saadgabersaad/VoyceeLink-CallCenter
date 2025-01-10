import React from "react";
import { TableCell } from "@mui/material";
import {callsHeadCells, rows} from "../consts/headCells";
import {Logs, } from "modules/callcenter/call-logs/shared/Logs";
import {styles} from "modules/callcenter/call-logs/consts/styles";
import {EnhancedTable, EnhancedTableProps,} from "modules/core/components/tables/EnhancedTable";

export const RelatedCallsTable = ({
                          //rows,
                          loading,
                      }: Partial<EnhancedTableProps<Logs>>) => {

    const getStatusStyle = (status: string): React.CSSProperties =>
        styles.status[status] || { backgroundColor: "#F8F9FA", color: "#6C757D" };

    const renderTimeStamp = (timeStamp: string) => {
        const [date, time] = timeStamp.split(" - ");
        return (
            <>
                <div>{date}</div>
                <div>{time}</div>
            </>
        );
    };
    const renderStatus = (status: string) => (
        <span style={getStatusStyle(status)}>{status}</span>
    );

    return (
        <EnhancedTable
            rows={rows!}
            headCells={callsHeadCells}
            showCheckBox={false}
            loading={loading!}
            onPageChange={() => {}}
            render={(row: Logs) => (
                <>
                    <TableCell padding={"normal"} >{row.id}</TableCell>
                    <TableCell padding={"none"} >{row.interpreter}</TableCell>
                    <TableCell padding={"none"} >{renderStatus(row.status)}</TableCell>
                    <TableCell padding={"none"} >{renderTimeStamp(row.timeStamp)}</TableCell>

                </>
            )}
        />
    );
};
export default RelatedCallsTable;
