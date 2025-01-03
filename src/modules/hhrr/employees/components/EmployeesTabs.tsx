import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Table from "modules/hhrr/employees/components/Table";
import { useTable } from 'modules/core/hooks/use-table';
import { getEmployees } from '../services/employees';
import { CreateEmployee, Employee } from '../shared/Employee';

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

export type Response = {
    data: Employee[]
}

export default function BasicTabs() {
    const { data } = useTable({
        fetcher: getEmployees,
        key: 'AAAA',
        mutationFn: async (data: CreateEmployee) => {
            return new Promise<void>((resolve) => {
                resolve();
            });
        }
    })

    const employees: Employee[] = data?.data ?? []

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', margin: 'auto' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Tech department" {...a11yProps(0)} />
                    <Tab label="dept-1" {...a11yProps(1)} />
                    <Tab label="dept-2" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Table rows={employees} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>

            </CustomTabPanel>
        </Box>
    );
}
