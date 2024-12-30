'use client';

import { Coffee, ExitToApp, Outbound } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { ClockIcon } from "@mui/x-date-pickers";
import { Flex } from "modules/core/components/flex";
import { useAttendance } from "../hooks/use-attendance";
import { EventType } from "../shared/Attendance";

export default function Clocks() {
    const { entrieState, onChangeUserAttendance } = useAttendance();
    const userID = 'cm489st080002bf0rp2ld1uxf';

    function handleChange(newStatus: EventType) {
        onChangeUserAttendance({
            employeeId: userID,
            timestamp: new Date().toISOString(),
            eventType: newStatus
        })
    }

    return (
        <Box sx={{ paddingTop: '50px' }}>
            <Typography sx={{ textAlign: "center" }} fontWeight='bold' fontSize={'26px'} variant='h4' component='h3'>
                You are Currently
                {(entrieState === null || entrieState?.type === 'Clock_Out') && <span style={{ display: 'block', margin: '20px 0px', color: '#9D0F08' }}>
                    Clocked Out
                </span>}
                {(entrieState?.type === 'Clock_in' || entrieState?.type === 'Break_end') && <span style={{ display: 'block', margin: '20px 0px', color: '#2E7D32' }}>
                    Clocked In
                </span>}
                {entrieState?.type === 'Break_start' && <span style={{ display: 'block', margin: '20px 0px', color: '#FF9800' }}>
                    On Break
                </span>}
            </Typography>
            <Flex justifyContent={'center'}>
                {(entrieState === null || entrieState?.type === 'Clock_Out') &&
                    <Box component={'button'} onClick={() => handleChange('Clock_in')} sx={{ borderRadius: '5px', backgroundColor: '#8BC34A', width: '210px', height: '115px', border: '1px solid #8BC34A', color: '#FFF' }}>

                        <ClockIcon />
                        <span style={{ display: 'block' }}>Clock In</span>
                    </Box>
                }
                {(entrieState?.type === 'Clock_in' || entrieState?.type === 'Break_end') &&
                    <Flex flexDirection={"column"} gap={5}>
                        <Box component={'button'} onClick={() => handleChange('Break_start')} sx={{ borderRadius: '5px', backgroundColor: '#FF9800', width: '210px', height: '115px', border: '1px solid #FF9800', color: '#FFF' }}>
                            <Coffee />
                            <span style={{ display: 'block' }}>Start Break</span>
                        </Box>
                        <Box component={'button'} onClick={() => handleChange('Clock_Out')} sx={{ borderRadius: '5px', backgroundColor: '#9D0F08', width: '210px', height: '115px', border: '1px solid #9D0F08', color: '#FFF' }}>

                            <ExitToApp />
                            <span style={{ display: 'block' }}>Clock Out</span>
                        </Box>
                    </Flex>
                }
                {entrieState?.type === 'Break_start' &&
                    <Box component={'button'} onClick={() => handleChange('Break_end')} sx={{ borderRadius: '5px', backgroundColor: '#CD5304', width: '210px', height: '115px', border: '1px solid #CD5304', color: '#FFF' }}>
                        <Coffee />
                        <span style={{ display: 'block' }}>Finish Break</span>
                    </Box>
                }
            </Flex>
        </Box>
    )
}