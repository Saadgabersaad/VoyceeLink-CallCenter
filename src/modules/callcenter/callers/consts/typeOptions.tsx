import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import {Box} from "@mui/material";
import React from "react";

export const typeOptions = [
    { label: 'Audio', backgroundColor: '#97979726', color: '#424242',icon:<KeyboardVoiceOutlinedIcon/> },
    { label: 'Video', backgroundColor: '#EDFDF399', color: '#36976E',icon:<VideoCallOutlinedIcon/> },
    {
        label: 'Video&Audio',
        backgroundColor: 'transparent',
        color: '#36976E',
        icon: (
            <Box
                sx={{display: 'flex', alignItems: 'center', gap: 0.5}}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#EDFDF399',
                        borderRadius: '5px',
                        padding: '6px 12px',
                        gap: 0.5,
                    }}
                >
                    <VideoCallOutlinedIcon sx={{ fontSize: 18, color: '#36976E' }} />
                    <span style={{ fontSize: '12px', color: '#36976E' }}>Video</span>
                </Box>

                <span style={{ fontSize: '12px', color: '#424242' }}>&</span>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#97979726',
                        borderRadius: '5px',
                        padding: '6px 12px',
                        gap: 0.5,
                    }}
                >
                    <KeyboardVoiceOutlinedIcon sx={{ fontSize: 18, color: '#424242' }} />
                    <span style={{ fontSize: '12px', color: '#424242' }}>Audio</span>
                </Box>
            </Box>
        ),
    },
];