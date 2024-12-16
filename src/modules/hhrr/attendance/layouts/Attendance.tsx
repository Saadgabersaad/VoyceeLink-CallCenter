import { Heading, Page, HeadingActions } from 'modules/core/components/page'
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
    </Page>
  )
}
