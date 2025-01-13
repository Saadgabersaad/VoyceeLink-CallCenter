import * as React from "react";
import { Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";


interface BasicSelectProps {
    value: string;
    onChange: (event: SelectChangeEvent) => void;
    menuItems: { label: string; value: string | number }[];
}

export function BasicSelect({
                                value,
                                onChange,
                                menuItems,
                            }:BasicSelectProps) {
    return (
        <Box sx={{ minWidth: 400 }}>
            <FormControl fullWidth>
                <InputLabel id="filter-select-label">Select Filter</InputLabel>
                <Select
                    labelId="filter-select-label"
                    value={value}
                    onChange={onChange}
                    label={'Select Filter'}
                >
                    {menuItems.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                            {item.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
