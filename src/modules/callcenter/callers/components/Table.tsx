import React from "react";
import { TableCell } from "@mui/material";
import { PRIMARY } from "modules/core/consts/theme";
import { headCells, rows } from "../consts/headCell";
import { Flex } from "modules/core/components/flex";
import { Search } from "modules/core/components/Search";
import { Caller } from "modules/callcenter/callers/shared/Caller";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import { EnhancedTable, EnhancedTableProps } from "modules/core/components/tables/EnhancedTable";
import DottedMenu from "./DottedMenu";
import CallsType from "modules/callcenter/callers/components/CallsType";
import StatusMenu from "modules/core/components/StatusMenu";

export const Table = ({ loading }: Partial<EnhancedTableProps<Caller>>) => {
    const handleStatusChange = (rowId: string, newStatus: string) => {
        console.log(`Row ${rowId} status updated to ${newStatus}`);
    };
    const handleTypeChange = (rowId: string, newType: string) => {
        console.log(`Row ${rowId} status updated to ${newType}`);
    };

    return (
        <>
            <Flex justifyContent="space-between" pb={2}>
                <Search onSearch={() => Promise.resolve()} />
            </Flex>
            <EnhancedTable
                rows={rows}
                headCells={headCells}
                loading={loading!}
                showCheckBox={true}
                onPageChange={() => { }}
                render={(row: Caller) => (
                    <>
                        <TableCell padding="none">{row.callerName}</TableCell>
                        <TableCell padding="none">{row.email}</TableCell>
                        <TableCell padding="none">
                            <CallsType
                                type={row.type}
                                onTypeChange={(newType) => handleTypeChange(row.id , newType)}/>
                            </TableCell>
                        <TableCell padding="none">
                            <StatusMenu
                                status={row.status}
                                onStatusChange={(newStatus) => handleStatusChange(row.id, newStatus)}
                            />
                        </TableCell>
                        <TableCell padding="none">
                            <Flex alignItems="center" gap={1.5}>
                                <VideoCallOutlinedIcon sx={{ color: PRIMARY }} aria-label="Video Call" />
                                {row.video}
                            </Flex>
                        </TableCell>
                        <TableCell padding="none">
                            <Flex alignItems="center" gap={1.5}>
                                <KeyboardVoiceOutlinedIcon sx={{ color: PRIMARY }} aria-label="Voice Call" />
                                {row.voice}
                            </Flex>
                        </TableCell>
                        <TableCell padding="none">
                            <DottedMenu/>
                        </TableCell>
                    </>
                )}
            />
        </>
    );
};

export default Table;
