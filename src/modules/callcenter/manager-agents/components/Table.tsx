import React, { useState } from "react";
import { TableCell } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Flex } from "modules/core/components/flex";
import { statusOptions } from "../consts/statusOptions";
import { Search } from "modules/core/components/Search";
import StatusMenu from "modules/core/components/StatusMenu";
import {Agents} from "modules/callcenter/manager-agents/shared/Agents";
import CallCenterFilter from "modules/core/components/CallCenterFilter";
import Lists from "modules/callcenter/manager-agents/components/Lists";
import { headCells, rows } from "modules/callcenter/manager-agents/consts/headCells";
import AgentDrawer from "modules/callcenter/manager-agents/components/AgentDrawer";
import {filterOptions} from "modules/callcenter/manager-agents/consts/filterOptions";
import {liveStatusOptions} from "modules/callcenter/manager-agents/consts/LiveStatusOptions";
import { EnhancedTable, EnhancedTableProps } from "modules/core/components/tables/EnhancedTable";

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

    return (
        <>
            <Flex justifyContent="space-between" pb={2}>
                <Search onSearch={() => Promise.resolve()} />
                <CallCenterFilter rows={filteredRows} onApplyFilters={applyFilters}  filterOptions={filterOptions}/>
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
                                filterOptions={statusOptions}
                                status={row.status}
                                onStatusChange={(newStatus) => handleStatusChange(row.id, newStatus)}/>
                        </TableCell>
                        <TableCell padding="none">
                            <Lists language={row.language} />
                        </TableCell>
                        <TableCell padding="none">
                            <Lists campaign={row.campaign} /></TableCell>
                        <TableCell padding="none">
                            <Lists speciality={row.speciality}  />
                        </TableCell>
                        <TableCell padding="none">{row.client}</TableCell>
                        <TableCell padding="none">
                            <StatusMenu filterOptions={liveStatusOptions}  status={row.liveStatus} />
                        </TableCell>
                        <TableCell padding="none">
                            <IconButton>
                                <AgentDrawer status={row.status} />
                            </IconButton>
                        </TableCell>
                    </>
                )}
            />
        </>
    );
};

export default Table;
