import React, { useState, useRef } from "react";
import {
    Button,
    Popover,
    MenuItem,
    MenuList,
    Box, Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styles } from "modules/callcenter/agent-list/consts/styles";
import { PRIMARY } from "modules/core/consts/theme";
import { KeyboardArrowUp } from "@mui/icons-material";
import { Flex } from "modules/core/components/flex";

interface LanguageSelectorProps {
    language: string;
    campaign: string;
    speciality: string;
}

const Lists: React.FC<LanguageSelectorProps> = ({ language, campaign, speciality }) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);

    // Ensure values are properly formatted with single dashes
    const formatValue = (value: string) => value.trim().replace(/\s*-\s*/g, " - ");

    const languages = formatValue(language).split(" - ");
    const campaigns = formatValue(campaign).split(" - ");
    const specialties = formatValue(speciality).split(" - ");

    // Function to get styles (only for languages)
    const getStyle = (item: string, isLanguage: boolean): React.CSSProperties =>
        isLanguage ? styles.language[item]  : { color: "black", fontWeight: "bold" };

    // Render at most 2 items from each category
    const renderFirstTwo = () => {
        const displayItems = [
            ...languages.slice(0, 2),
            ...campaigns.slice(0, 2),
            ...specialties.slice(0, 2)
        ];
        return displayItems.map((attr, index) => (
            <span key={index} style={getStyle(attr, index < languages.length)}>
                {attr}
            </span>
        )).reduce((prev, curr) => [prev, " - ", curr]);
    };

    const handleToggle = () => setOpen((prev) => !prev);

    const handleClose = (event: Event) => {
        if (anchorRef.current?.contains(event.target as HTMLElement)) return;
        setOpen(false);
    };

    return (
        <Box ref={anchorRef}>
            {/* Display the first two attributes */}
            <Button
                onClick={handleToggle}
                sx={{
                    border: 'solid 1px #F0F0F0',
                    textTransform: "none",
                    fontSize: "12px",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                }}
            >
                {renderFirstTwo()}
                <KeyboardArrowDownIcon />
            </Button>

            {/* Popover to display the full list */}
            <Popover
                open={open}
                anchorEl={anchorRef.current}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
                <MenuList sx={{
                    minWidth: '185px',
                    border: '1px solid ',
                    borderColor: PRIMARY,
                    borderRadius: '5px',
                    px: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    <Flex justifyContent="space-between">
                        <Box>
                            {/* Display languages with styles */}
                            {languages.map((lang, index) => (
                                <MenuItem
                                    key={`lang-${index}`}
                                    sx={{
                                        fontSize: "12px",
                                        px: 0,
                                        py: 0.5,
                                        "&:hover": { opacity: 0.8 },
                                    }}
                                >
                                    <span style={getStyle(lang, true)}>{lang}</span>
                                </MenuItem>
                            ))}
                            {/* Display campaigns */}
                            {campaigns.map((camp, index) => (
                                <MenuItem
                                    key={`camp-${index}`}
                                    sx={{
                                        fontSize: "12px",
                                        px: 0,
                                        py: 0.5,
                                        "&:hover": { opacity: 0.8 },
                                    }}
                                >
                                    <span>{camp}</span>
                                </MenuItem>
                            ))}
                            {/* Display specialties */}
                            {specialties.map((spec, index) => (
                                <MenuItem
                                    key={`spec-${index}`}
                                    sx={{
                                        fontSize: "12px",
                                        px: 0,
                                        py: 0.5,
                                        "&:hover": { opacity: 0.8 },
                                    }}
                                >
                                    <span>{spec}</span>
                                </MenuItem>
                            ))}
                        </Box>
                        <KeyboardArrowUp sx={{ color: PRIMARY }} />
                    </Flex>
                    <Typography sx={{ alignSelf: 'end' }} color={PRIMARY}>Edit</Typography>
                </MenuList>
            </Popover>
        </Box>
    );
};

export default Lists;
