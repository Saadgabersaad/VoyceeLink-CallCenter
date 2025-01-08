import React from 'react'
import Toolbar from "@mui/material/Toolbar";
import {Flex} from "modules/core/components/flex";
import {SearchInput} from "modules/core/layouts/app/Search";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import {Button} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import FilterBtn from "modules/core/components/FilterBtn";
import { useDepartments } from 'modules/hhrr/departments/hooks/use-departments';


interface EnhancedTableToolbarProps {
    numSelected: number;
    tableSearch:boolean;
    onSearch(search: string): void
    filterByDepartment(value: string): void
    setPositionFilter: (value: string) => void;
    setStatusFilter: (value: string) => void;
}
    const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {

        const { tableSearch, setPositionFilter, setStatusFilter, onSearch, filterByDepartment } = props;

        const { data } = useDepartments()

        return (
                <Toolbar
                    sx={[
                        {
                            pl: { sm: 0 },
                            pr: { xs: 1, sm: 1 },
                            justifyContent:'space-between',
                        }
                    ]}
                >
                    <Flex gap={2}>
                        <SearchInput tableSearch={tableSearch} onSearch={onSearch} />
                        <Tooltip title="Filter list">
                                <FilterBtn
                                    optionGroups={[{
                                        options: data.data ?? [],
                                        title: 'Department',
                                        onSelect: filterByDepartment
                                    }]}
                                />
                        </Tooltip>
                    </Flex>


                    {/*{numSelected > 0 ? (*/}
                    {/*    <Flex>*/}
                    {/*        <Button variant="contained">DEACTIVATE</Button>*/}
                    {/*        <IconButton>*/}
                    {/*            <DeleteIcon sx={{ color: 'red' }} />*/}
                    {/*        </IconButton>*/}
                    {/*        <IconButton>*/}
                    {/*            <SettingsIcon sx={{ color: 'gray' }} />*/}
                    {/*        </IconButton>*/}

                    {/*    </Flex>*/}
                    {/*) : null}*/}
                </Toolbar>
            );


    }
    export default EnhancedTableToolbar



