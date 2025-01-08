import React from "react";
import {EnhancedTable, EnhancedTableProps,} from "modules/core/components/tables/EnhancedTable";
import { headCells, rows } from "../consts/headCells";
import { TableCell } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import { PRIMARY } from "modules/core/consts/theme";
import {Logs, styles} from "modules/callcenter/call-logs/shared/Logs";

export const Table = ({
                          loading,
                      }: Partial<EnhancedTableProps<Logs>>) => {
    // Utility functions for dynamic styles
    const getLanguageStyle = (language: string): React.CSSProperties =>
        styles.language[language] || { color: "#6C757D" }; // Default gray for unsupported languages
    const getStatusStyle = (status: string): React.CSSProperties =>
        styles.status[status] || { backgroundColor: "#F8F9FA", color: "#6C757D" }; // Default gray for unsupported statuses
    // Render helper components
    const renderLanguage = (language: string) => {
        const [lang1, lang2] = language.split(" - "); // Split languages into two parts
        return (
            <>
                <span style={getLanguageStyle(lang1)}>{lang1}</span> -{" "}
                <span style={getLanguageStyle(lang2)}>{lang2}</span>
            </>
        );
    };
    const renderTimeStamp = (timeStamp: string) => {
        const [date, time] = timeStamp.split(" - "); // Split timestamp
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
            headCells={headCells}
            loading={loading!}
            onPageChange={() => {}}
            render={(row: Logs) => (
                <>
                    <TableCell padding={"none"} sx={{ color: PRIMARY }}>
                        {row.type === "video" ? (
                            <VideoCallOutlinedIcon aria-label="Video Call"  />
                        ) : row.type === "voice" ? (
                            <KeyboardVoiceOutlinedIcon  aria-label="Voice Call"/>
                        ) : null}
                    </TableCell>
                    <TableCell padding={"none"} >{row.id}</TableCell>
                    <TableCell padding={"none"} >{row.interpreter}</TableCell>
                    <TableCell padding={"none"} >{row.client}</TableCell>
                    <TableCell padding={"none"} >{renderLanguage(row.language)}</TableCell>
                    <TableCell padding={"none"} >{row.speciality}</TableCell>
                    <TableCell padding={"none"} >{renderStatus(row.status)}</TableCell>
                    <TableCell padding={"none"} >{row.duration}</TableCell>
                    <TableCell padding={"none"} >{renderTimeStamp(row.timeStamp)}</TableCell>
                    <TableCell padding={"none"}>
                        <IconButton>
                            <VisibilityIcon />
                        </IconButton>
                    </TableCell>
                </>
            )}
        />
    );
};
export default Table;
