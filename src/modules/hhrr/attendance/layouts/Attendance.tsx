import { Box } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import FilterBtn from 'modules/core/components/FilterBtn'
import { Flex } from 'modules/core/components/flex'
import { Heading, Page, HeadingActions } from 'modules/core/components/page'
import { Search } from 'modules/core/components/Search'
import React from 'react'

export default function Attendance() {
  return (
    <Page>
      <Heading
        title='Attendance'
        description='All employee attendance etc'
      >
        <HeadingActions
          disableDownload
          disableImport
          buttonText='Download'
          mainModal={null}
        />
      </Heading>
      <Flex gap={5}>
        {/* <SearchInput tableSearch/> */}
        <Search/>
        <FilterBtn/>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker/>
        </LocalizationProvider>
      </Flex>
      <Box>

      </Box>
    </Page>
  )
}
