import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Flex } from "modules/core/components/flex";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box, Button, Popover, Typography, IconButton } from "@mui/material";
import {FilterDropDown} from "modules/callcenter/call-logs/components/FilterDropDown";

interface FilterOption {
    onApplyFilters: (filters: { [key: string]: string }) => void, rows: any[]
    filterOptions: {
        label: string,
        field: string,
        menuItems: {
            label: string,
            value: string
        }[]
    }[]
}

export default function CallCenterFilter({ onApplyFilters, rows, filterOptions}: FilterOption) {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [filterValues, setFilterValues] = useState<{ [key: string]: string }>({});
    const [filteredRows, setFilteredRows] = useState(rows);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleFilterChange = (filterKey: string, value: string) => {
        setFilterValues((prev) => ({ ...prev, [filterKey]: value }));
    };

    const handleReset = () => {
        setFilterValues({});
        setFilteredRows(rows);
    };

    const handleApplyFilters = () => {
        if (typeof onApplyFilters === 'function') {
            onApplyFilters(filterValues);
            const filteredData = rows.filter((row) => {
                return filterOptions.every(({ field }) => {
                    if (filterValues[field]) {
                        return row[field] === filterValues[field];
                    }
                    return true;
                });
            });

            setFilteredRows(filteredData);
        }
        handleClose();
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;


    return (
        <div>
            <Flex gap={2.5}>
                <Button
                    sx={{ px: 1.5, py: 1.25, border: "solid 1px #D6D6D6", borderRadius: "5px", fontSize: "14px" }}
                    onClick={handleClick}
                    aria-describedby={id}
                    color={"inherit"}
                >
                    Filter <FilterAltIcon />
                </Button>
                <IconButton
                    sx={{ px: 1, py: 1, border: "solid 1px #D6D6D6", borderRadius: "5px", fontSize: "14px" }}
                    color={"inherit"}
                    size={"large"}
                >
                    <MoreVertIcon />
                </IconButton>
            </Flex>

            <Popover
                sx={{ minWidth: "400px", borderRadius: "50px" }}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
            >
                <Box sx={{ border: "1px solid #36976E", borderRadius: "5px" }}>
                    <Flex borderRadius={1} fontWeight="bold" p={2} bgcolor="#D6D6D6" justifyContent="space-between">
                        <Typography>Filter</Typography>
                        <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
                    </Flex>

                    <Flex flexDirection="column" gap={2} p={2}>
                        {filterOptions.map((option, index) => (
                            <FilterDropDown
                                key={index}
                                label={option.label}
                                value={filterValues[option.field] || ""}
                                menuItems={option.menuItems}
                                onChange={(value) => handleFilterChange(option.field, value)}
                            />
                        ))}
                    </Flex>

                    <Flex justifyContent="space-between" p={2}>
                        <Button variant="outlined" sx={{ p: 1, color: "black", border: "1px solid #D6D6D6" }} onClick={handleReset}>
                            Reset
                        </Button>
                        <Button variant="contained" sx={{ bgcolor: "#36976E", color: "white" }} onClick={handleApplyFilters}>
                            Apply Filters
                        </Button>
                    </Flex>
                </Box>
            </Popover>
        </div>
    );
}
