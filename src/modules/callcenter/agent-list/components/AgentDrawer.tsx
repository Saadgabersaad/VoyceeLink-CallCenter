import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import {Button, Typography } from '@mui/material';
import Divider from "@mui/material/Divider";
import { PRIMARY } from "modules/core/consts/theme";
import { Flex } from "modules/core/components/flex";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LaunchIcon from '@mui/icons-material/Launch';
import AgentTabs from './AgentTabs';
import AgentInfo from "modules/callcenter/agent-list/components/AgentInfo";
import ProfileInfoTabs from './ProfileInfoTabs';
type Anchor = 'right';
const AnchorValue = 'right';

export default function AgentDrawer({status}:{status:string}) {

    const [completed, setCompleted] = React.useState(status);

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }
            setState({ ...state, [anchor]: open });

            setCompleted(status);
        };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: 600, p: 2.5, display: 'flex', flexDirection: 'column', gap: 2 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <Flex direction="row" alignItems="center" justifyContent={'space-between'} gap={1.5} color={PRIMARY} cursor="pointer">
                <Button sx={{p:0,justifyContent:'start'}}  variant={'text'}  >
                    <ArrowBackIosNewIcon sx={{ fontSize: '12px' }} />
                    <Typography fontWeight="bold" variant="subtitle2" component="h5">Back</Typography>
                </Button>
                <Button variant={'text'} >
                    <Typography fontWeight="bold" variant="subtitle2" component="h5">Edit</Typography>
                    <LaunchIcon sx={{ fontSize: '16px' }} />
                </Button>
            </Flex>
                 <AgentInfo/>

            <ProfileInfoTabs status={status}/>


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
