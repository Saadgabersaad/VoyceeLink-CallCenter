import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Typography } from '@mui/material';
import { Flex } from "modules/core/components/flex";
import Divider from "@mui/material/Divider";
import DetailBox from './DetailsCards';
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import {PRIMARY} from "modules/core/consts/theme";
import Status from "modules/callcenter/call-logs/components/Status";

type Anchor = 'right';
const AnchorValue = 'right';

export default function AnchorTemporaryDrawer() {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown'
                && (
                    (event as React.KeyboardEvent).key === 'Tab'
                    || (event as React.KeyboardEvent).key === 'Shift'
                )
            ) {
                return;
            }
            setState({ ...state, [anchor]: open });
        };

    const labelValues1 = [
        { label: 'ID', value: '#CM9804888RA890' },
        { label: 'Language', value: 'Spanish - English' },
        { label: 'Campaign', value: 'Campaign Name' },
        { label: 'Client', value: 'Client Name' },
        { label: 'Speciality', value: 'Medical' },
    ];

    const labelValues2 = [
        { label: 'Type', value: 'Video Call',icon:<VideoCallOutlinedIcon sx={{color:PRIMARY}} aria-label="Video Call"  />},
        { label: 'Date', value: 'Fri Dec 16, 2022' },
        { label: 'Start Time', value: '--' },
        { label: 'End Time', value: '--' },
        { label: 'Duration', value: '--' },
    ];

    const labelValues3 = [
        { label: 'ID', value: '#7852'},
        { label: 'Name', value: 'Orlando Diggs' },
        { label: 'Status', value:<Status/>},

    ];

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: 600, p: 2.5,display:'flex',flexDirection: 'column',gap:2  }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Flex flexDirection={'column'} gap={2}>
                <Flex direction="row" justifyContent="space-between">
                    <Typography fontWeight={'bold'} variant="h6" component="h5">Call Details</Typography>
                    <Typography sx={{px:1,py:.5,borderRadius:'5px',bgcolor:"#3FC28A1A",color:'#3FC28A'}}>Completed</Typography>
                </Flex>

                <Flex direction="row" justifyContent="space-between">
                    <DetailBox labelValues={labelValues1} />
                    <Divider orientation="vertical" flexItem />
                    <DetailBox labelValues={labelValues2} />
                </Flex>
            </Flex>

            <Flex flexDirection="column"  gap={2}>
                <Typography fontWeight={'bold'} variant={"h6"}>Agent Details</Typography>
                <DetailBox labelValues={labelValues3} />
            </Flex>

            <Flex>
                <Typography fontWeight={'bold'} variant={"h6"}>Related Calls</Typography>

            </Flex>

        </Box>
    );

    return (
        <div>
            {([AnchorValue] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Box onClick={toggleDrawer(anchor, true)} sx={{ display: 'inline-block', cursor: 'pointer' }}>
                        <VisibilityIcon />
                    </Box>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>

            ))}
        </div>
    );
}
