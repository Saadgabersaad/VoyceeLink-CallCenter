import { Add, Download } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Flex } from 'modules/core/components/flex'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
export const Actions = () => {
    return (
        <Flex alignItems='start' gap={1.5} >
            <Button startIcon={<Download />} variant='text'
                    sx={{fontSize:'16px',
                        padding:'10px 18px',
                        textTransform: 'capitalize',color:'black',  boxShadow: '0px 1px 3px 0px #0000001F'
                    }}>
                Download
            </Button>
            <Button startIcon={<CloudUploadIcon />} variant='text' sx={{
                fontSize:'16px',
                padding:'10px 18px',
                textTransform: 'capitalize',color:'black',  boxShadow: '0px 1px 3px 0px #0000001F'
            }}>
                Import
            </Button>
            <Button startIcon={<Add />} variant='contained' sx={{
                fontSize:'16px',
                padding:'10px 18px',
                textTransform: 'capitalize'
            }}>
                Add Customer
            </Button>
        </Flex>
    )
}
