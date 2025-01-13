import React from "react";
import {Flex} from "modules/core/components/flex";
import {Button, Typography} from "@mui/material";
import {BasicSelect} from "modules/callcenter/call-logs/components/FilterSelector";

export const FilterDropDown: React.FC<{
    label: string;
    value: string;
    menuItems: { label: string; value: string }[];
    onChange: (value: string) => void;
}> = ({ label, value, menuItems, onChange }) => {
    return (
        <Flex flexDirection="column" gap={1.25}>
            <Flex justifyContent="space-between">
                <Typography fontWeight={"600"} color={"#666666"}>
                    {label}
                </Typography>
                <Button
                    onClick={() => onChange("")}
                    sx={{
                        cursor: "pointer",
                        color: "#36976E",
                        textDecoration: "underline",
                        fontSize: "12px",
                        fontWeight: "bold",
                    }}
                >
                    Clear
                </Button>
            </Flex>
            <BasicSelect value={value} onChange={(e) => onChange(e.target.value)} menuItems={menuItems} />
        </Flex>
    );
};
