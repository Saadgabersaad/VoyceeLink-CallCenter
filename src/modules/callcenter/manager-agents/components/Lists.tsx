import React, {useState, useRef} from "react";
import {
    Button,
    Popover,
    MenuItem,
    MenuList,
    Box, Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {styles} from "modules/callcenter/manager-agents/consts/styles";
import {PRIMARY} from "modules/core/consts/theme";
import {KeyboardArrowUp} from "@mui/icons-material";
import {Flex} from "modules/core/components/flex";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

interface LanguageSelectorProps {
    language?: string;
    campaign?: string;
    speciality?: string;
    liveStatus?: string;
}

// Helper function to split strings into arrays
const parseInput = (input?: string): string[] => input?.split(" - ") ?? [];

// Helper function to apply styling
const applyStyle = (key: string | undefined): React.CSSProperties =>
    styles.language[key ?? ""] || {color: "black", fontWeight: "bold"};

// Helper function to render dropdown items
const renderItems = (items: string[], applyStyleFn: (key: string) => React.CSSProperties) =>
    items.map((item, index) => (
        <MenuItem
            key={`${item}-${index}`}
            sx={{
                fontSize: "12px",
                px: 0,
                py: 0.5,
                "&:hover": {opacity: 0.8},
            }}
        >
            <span style={applyStyleFn(item)}>{item}</span>
        </MenuItem>
    ));

const Lists: React.FC<LanguageSelectorProps> = ({language, campaign, speciality}) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);

    const languages = parseInput(language);
    const campaigns = parseInput(campaign);
    const specialities = parseInput(speciality);


    const handleToggle = () => setOpen((prev) => !prev);
    const handleClose = (event: Event) => {
        if (anchorRef.current?.contains(event.target as HTMLElement)) return;
        setOpen(false);
    };

    return (
        <Box ref={anchorRef}>
            {/* Main button displaying the first two elements */}
            <Button
                onClick={handleToggle}
                sx={{
                    border: "solid 1px #F0F0F0",
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
                {/* Render first two languages */}
                {languages[0] &&
                    <span style={applyStyle(languages[0])}>{languages[0]}</span>}
                {languages[1] &&
                    <>  <span style={applyStyle(languages[1])}> {languages[1]}</span></>}
                {/* Render first two campaigns */}
                {campaigns[0] &&
                    <> <span style={applyStyle(campaigns[0])}>{campaigns[0]}</span></>}
                {campaigns[1] &&
                    <>  <span style={applyStyle(campaigns[1])}>- {campaigns[1]}</span></>}

                {/* Render first two specialties */}
                {specialities[0] &&
                    <> <span style={applyStyle(specialities[0])}>{specialities[0]}</span></>}
                {specialities[1] &&
                    <>  <span style={applyStyle(specialities[1])}>- {specialities[1]}</span></>}

                <KeyboardArrowDownIcon/>
            </Button>

            {/* Popover for full dropdown */}
            <Popover
                open={open}
                anchorEl={anchorRef.current}
                onClose={handleClose}
                anchorOrigin={{vertical: "top", horizontal: "left"}}
                transformOrigin={{vertical: "top", horizontal: "left"}}
            >
                <MenuList
                    sx={{
                        minWidth: "185px",
                        border: "1px solid",
                        borderColor: PRIMARY,
                        borderRadius: "5px",
                        px: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Flex justifyContent="space-between">
                        <Box>
                            {renderItems(languages, applyStyle)}
                            {renderItems(campaigns, applyStyle)}
                            {renderItems(specialities, applyStyle)}
                        </Box>
                        <KeyboardArrowUp sx={{color: PRIMARY}}/>
                    </Flex>
                    <Typography sx={{alignSelf: "end"}} color={PRIMARY}>
                        Edit
                    </Typography>
                </MenuList>
            </Popover>
        </Box>
    );
};

export default Lists;