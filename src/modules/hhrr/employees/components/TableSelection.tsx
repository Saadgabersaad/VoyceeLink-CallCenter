import React from 'react'
import Toolbar from "@mui/material/Toolbar";
import {Flex} from "modules/core/components/Flex";
import {SearchInput} from "modules/core/layouts/app/Search";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import {Button} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import FilterBtn from "modules/hhrr/employees/components/FilterBtn";


interface EnhancedTableToolbarProps {
    numSelected: number;
}
    const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {



            const { numSelected } = props;
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
                        <SearchInput/>
                        <Tooltip title="Filter list">
                                <FilterBtn />
                        </Tooltip>
                    </Flex>


                    {numSelected > 0 ? (
                        <Flex>
                            <Button variant="contained">DEACTIVATE</Button>
                            <IconButton>
                                <DeleteIcon sx={{ color: 'red' }} />
                            </IconButton>
                            <IconButton>
                                <SettingsIcon sx={{ color: 'gray' }} />
                            </IconButton>

                        </Flex>
                    ) : null}
                </Toolbar>
            );


    }
    export default EnhancedTableToolbar



