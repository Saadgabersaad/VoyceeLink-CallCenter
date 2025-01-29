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

    // Parse all languages from the string
    const languages = language.split(" - ");
    const campaigns = campaign.split(" - ");
    const specialities = speciality.split(" - ");

    // Style individual languages
    const getLanguageStyle = (language: string): React.CSSProperties =>
        styles.language[language] || { color: "black",fontWeight: "bold" };



    // Render the first two languages with styles
    const renderFirstTwoLanguages = () => {
        const [lang1, lang2] = languages.slice(0, 2);
        return (
            <>
                <span style={getLanguageStyle(lang1)}>{lang1}</span> -{" "}
                <span style={getLanguageStyle(lang2)}>{lang2}</span>
            </>
        );
    };
    const renderFirstTwoCampaign = () => {
        const [camp1, camp2] = campaigns.slice(0, 2);
        return (
            <>
                <span> {camp1}</span> -{" "}
                <span>{camp2}</span>
            </>
        );
    };
    const renderFirstTwoSpecialises = () => {
        const [spec1, spec2] = specialities.slice(0, 2);
        return (
            <>
                <span style={getLanguageStyle(spec1)}>{spec1}</span> -{" "}
                <span style={getLanguageStyle(spec2)}>{spec2}</span>
            </>
        );
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
                {renderFirstTwoLanguages()}
                {renderFirstTwoCampaign()}
                {renderFirstTwoSpecialises()}
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
                                    <span style={getLanguageStyle(lang)}>{lang}</span>
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

                                    <span style={getLanguageStyle(camp)} >{camp}</span>
                                </MenuItem>
                            ))}

                            {specialities.map((spec, index) => (
                                <MenuItem
                                    key={`spec-${index}`}
                                    sx={{
                                        fontSize: "12px",
                                        px: 0,
                                        py: 0.5,
                                        "&:hover": { opacity: 0.8 },
                                    }}
                                >

                                    <span style={getLanguageStyle(spec)} >{spec}</span>
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
