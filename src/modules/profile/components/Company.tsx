import { Box, Chip, Typography } from '@mui/material'
import { Flex } from 'modules/core/components/flex'
import { Actions } from '../../hhrr/departments/components/Actions'
import Image from 'next/image'

export const Company = () => {
  return (
    <Flex
      justifyContent='space-between'
      alignItems='start'
      width='100%'
      pt={1.5}
      px={2}
    >
      <Box>
        <Flex gap={1} alignItems='center'>
          <Image
            width={28}
            height={28}
            alt='Company'
            src='/sample.webp'
          />
          <Typography fontWeight='700' fontSize={22} component='h2' color='grey.900'>
            Company Name
          </Typography>
        </Flex>
        <Typography component='span' color='grey.700' fontSize={14} mt={.5}>
          Last Contacted June 23, 2023
        </Typography>
        <Flex gap={2} py={1}>
          <Chip size='small' label='Technical Support' sx={{ borderRadius: 1 }} />
          <Chip size='small' label='Medical Client' sx={{ borderRadius: 1 }} />
        </Flex>
      </Box>
      <Actions />
    </Flex>
  )
}
