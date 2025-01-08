import { BusinessCenter, Mail } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Flex } from 'modules/core/components/flex'
import { PRIMARY } from 'modules/core/consts/theme'
import Image from 'next/image'
import React from 'react'

export default function DepartmentHeadCard() {
  return (
    <Flex gap={2} py={1.5} px={2.5}>
      <Image
        src={'/employee.jpg'}
        alt='Deparment Head'
        width={90}
        height={90}
        quality={100}
        style={{
          objectFit: 'cover',
          borderRadius: 8
        }}
      />
      <div>
        <Typography color={PRIMARY} component={'h2'} fontSize={20} fontWeight={600}>
          John Doe
        </Typography>
        <Flex gap={1} mt={1} color={'grey.600'}>
          <BusinessCenter sx={{ color: 'grey.800'}} /> Engineering Department Head
        </Flex>
        <Flex gap={1} mt={1} color={'grey.600'}>
          <Mail sx={{ color: 'grey.800'}}  /> johndoe@gmail.com
        </Flex>
      </div>
    </Flex>
  )
}
