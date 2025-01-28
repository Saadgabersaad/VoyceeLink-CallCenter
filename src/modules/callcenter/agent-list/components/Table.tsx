import React, { useState } from "react";
import { TableCell } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Flex } from "modules/core/components/flex";
import { headCells, rows } from "../consts/headCells";
import { Search } from "modules/core/components/Search";
import { styles } from "modules/callcenter/call-logs/consts/styles";
import CallDetailsDrawer from "modules/callcenter/call-logs/components/CallDetailsDrawer";
import { EnhancedTable, EnhancedTableProps } from "modules/core/components/tables/EnhancedTable";
import StatusMenu from "modules/core/components/StatusMenu";
import {Agents} from "modules/callcenter/agent-list/shared/Agents";
import CallCenterFilter from "modules/core/components/CallCenterFilter";

export const Table = ({ loading }: Partial<EnhancedTableProps<Agents>>) => {
    const [filteredRows, setFilteredRows] = useState(rows);
    const handleStatusChange = (rowId: string, newStatus: string) => {
        console.log(`Row ${rowId} status updated to ${newStatus}`);
    };
    const applyFilters = (filters: { [key: string]: string }) => {
        let newRows = [...rows];

        Object.entries(filters).forEach(([key, value]) => {
            if (value) {
                newRows = newRows.filter((row) => {

                    if (key in row) {
                        return String(row[key as keyof typeof row])
                            ?.toLowerCase()
                            .includes(value.toLowerCase());
                    }
                    return false;
                });
            }
        });

        setFilteredRows(newRows);
    };

    const getLanguageStyle = (language: string): React.CSSProperties =>
        styles.language[language] || { color: "#6C757D" };

    const getStatusStyle = (status: string): React.CSSProperties =>
        styles.status[status] || { backgroundColor: "#F8F9FA", color: "#6C757D" };

    const renderLanguage = (language: string) => {
        const [lang1, lang2] = language.split(" - ");
        return (
            <>
                <span style={getLanguageStyle(lang1)}>{lang1}</span> -{" "}
                <span style={getLanguageStyle(lang2)}>{lang2}</span>
            </>
        );
    };

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
        <>
            <Flex justifyContent="space-between" pb={2}>
                <Search onSearch={() => Promise.resolve()} />
                <CallCenterFilter rows={filteredRows} onApplyFilters={applyFilters} />
            </Flex>
            <EnhancedTable
                rows={filteredRows}
                headCells={headCells}
                loading={loading!}
                showCheckBox={true}
                onPageChange={() => {}}
                render={(row: Agents) => (
                    <>
                        <TableCell padding="none">{row.id}</TableCell>
                        <TableCell padding="none">
                            <StatusMenu
                                status={row.status}
                                onStatusChange={(newStatus) => handleStatusChange(row.id, newStatus)}/>
                        </TableCell>
                        <TableCell padding="none">{renderLanguage(row.language)}</TableCell>
                        <TableCell padding="none">{row.campaign}</TableCell>
                        <TableCell padding="none">{row.speciality}</TableCell>
                        <TableCell padding="none">{row.client}</TableCell>
                        <TableCell padding="none">{row.liveStatus}</TableCell>
                        <TableCell padding="none">
                            <IconButton>
                                <CallDetailsDrawer status={row.status} />
                            </IconButton>
                        </TableCell>
                    </>
                )}
            />
        </>
    );
};

export default Table;
