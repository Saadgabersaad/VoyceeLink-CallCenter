'use client';

import { Coffee, ExitToApp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { ClockIcon } from "@mui/x-date-pickers";
import { Flex } from "modules/core/components/flex";
import Image from "next/image";
import { useAttendance } from "../hooks/use-attendance";
import { EventType } from "../shared/Attendance";

export default function UserNavSection(userData:any) {
    userData=userData.userData;

    const { entrieState, onChangeUserAttendance } = useAttendance();
    const userID = 'cm489st080002bf0rp2ld1uxf';

    function handleChange(newStatus: EventType) {
        onChangeUserAttendance({
            employeeId: userID,
            timestamp: new Date().toISOString(),
            eventType: newStatus
        })
    }

    return(
        <Flex justifyContent={'center'} alignItems={'center'} gap={2} flexDirection={'column'} px={'20px'}>
            <Box sx={{mt:'30px'}}>
                <Image
                src={userData.imgURL}
                alt={userData.name}
                width={100}
                height={100}
                className="rounded-full"
                unoptimized
                />
            </Box>
            <Box>
                <Typography color='#0d0d0d' fontWeight='bold' fontSize={'22px'} variant='h5' component='h5'>
                    {userData.name}
                </Typography>
            </Box>
            <Box>
                <Typography sx={{textAlign:"center"}} fontSize={'18px'} variant='h6' component='h6'>
                    You are Currently &nbsp;
                    {(entrieState === null || entrieState?.type === 'Clock_Out') && <span style={{ color:'#9D0F08', fontWeight:'bold' }}>
                        Clocked Out
                    </span>}
                    {(entrieState?.type === 'Clock_in' || entrieState?.type === 'Break_end') && <span style={{ color:'#2E7D32', fontWeight:'bold' }}>
                        Clocked In
                    </span>}
                    {entrieState?.type === 'Break_start' && <span style={{ color:'#FF9800', fontWeight:'bold' }}>
                        On Break
                    </span>}
                </Typography>
            </Box>
            <Box  sx={{width:'100%'}}>
                {(entrieState === null || entrieState?.type === 'Clock_Out') &&
                    <Box component={'button'} onClick={() => handleChange('Clock_in')} sx={{ borderRadius:'5px', width:'100%', justifyContent:'center', backgroundColor:'#8BC34A', border:'1px solid #8BC34A', color:'#FFF', alignItems:'center', display:'flex' }}>

                        <span>Clock In &nbsp;</span>
                        <ClockIcon />
                    </Box>
                }
                {(entrieState?.type === 'Clock_in' || entrieState?.type === 'Break_end') &&
                    <>
                        <Box component={'button'} onClick={() => handleChange('Break_start')} sx={{borderRadius:'5px', width:'100%', justifyContent:'center', backgroundColor:'#FF9800', border:'1px solid #FF9800', color:'#FFF', alignItems:'center', display:'flex', my:'5px' }}>
                            <span>Start Break &nbsp;</span>
                            <Coffee />
                        </Box>
                        <Box component={'button'} onClick={() => handleChange('Clock_Out')} sx={{borderRadius:'5px', width:'100%', justifyContent:'center', backgroundColor:'#9D0F08', border:'1px solid #9D0F08', color:'#FFF', alignItems:'center', display:'flex', my:'5px' }}>

                            <span>Start Break &nbsp;</span>
                            <ExitToApp />
                        </Box>
                    </>
                }
                {entrieState?.type === 'Break_start' &&
                    <Box component={'button'} onClick={() => handleChange('Break_end')} sx={{ borderRadius:'5px', width:'100%', justifyContent:'center', backgroundColor:'#CD5304', border:'1px solid #CD5304', color:'#FFF', alignItems:'center', display:'flex' }}>
                        <span>Finish Break &nbsp;</span>
                        <Coffee/>
                    </Box>
                }
            </Box>
        </Flex>
    )    
}