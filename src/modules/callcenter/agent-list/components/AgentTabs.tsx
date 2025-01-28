import * as React from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Table from "modules/callcenter/agent-list/components/Table";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ProfileTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider',margin:'auto',    }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="My Team " {...a11yProps(0)} />
                    <Tab label="Active Agents" {...a11yProps(1)} />
                    <Tab label="Inactive Agents" {...a11yProps(2)} />
                </Tabs>
            </Box>


            <CustomTabPanel value={value} index={0}>
                <Table/>
            </CustomTabPanel>

            <CustomTabPanel  value={value} index={1}></CustomTabPanel>
            <CustomTabPanel value={value} index={2}></CustomTabPanel>
        </Box>
    );
}
