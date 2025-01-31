import React, { useState } from "react";
import { TableCell } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { PRIMARY } from "modules/core/consts/theme";
import { Flex } from "modules/core/components/flex";
import { headCells, rows } from "../consts/headCells";
import { Search } from "modules/core/components/Search";
import { Logs } from "modules/callcenter/call-logs/shared/Logs";
import { styles } from "modules/callcenter/call-logs/consts/styles";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import CallDetailsDrawer from "modules/callcenter/call-logs/components/CallDetailsDrawer";
import { EnhancedTable, EnhancedTableProps } from "modules/core/components/tables/EnhancedTable";
import CallCenterFilter from "modules/core/components/CallCenterFilter";
import {filterOptions} from "modules/callcenter/call-logs/consts/filterOptions";

export const Table = ({ loading }: Partial<EnhancedTableProps<Logs>>) => {
    const [filteredRows, setFilteredRows] = useState(rows);

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
                <CallCenterFilter rows={filteredRows} onApplyFilters={applyFilters} filterOptions={filterOptions} />
            </Flex>
            <EnhancedTable
                rows={filteredRows}
                headCells={headCells}
                loading={loading!}
                showCheckBox={true}
                onPageChange={() => {}}
                render={(row: Logs) => (
                    <>
                        <TableCell padding="none" sx={{ color: PRIMARY }}>
                            {row.type === "video" ? (
                                <VideoCallOutlinedIcon aria-label="Video Call" />
                            ) : row.type === "voice" ? (
                                <KeyboardVoiceOutlinedIcon aria-label="Voice Call" />
                            ) : null}
                        </TableCell>
                        <TableCell padding="none">{row.id}</TableCell>
                        <TableCell padding="none">{row.interpreter}</TableCell>
                        <TableCell padding="none">{row.client}</TableCell>
                        <TableCell padding="none">{renderLanguage(row.language)}</TableCell>
                        <TableCell padding="none">{row.speciality}</TableCell>
                        <TableCell padding="none">{renderStatus(row.status)}</TableCell>
                        <TableCell padding="none">{row.duration}</TableCell>
                        <TableCell padding="none">{renderTimeStamp(row.timeStamp)}</TableCell>
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
