import * as React from 'react'
import { useBoolean } from 'modules/core/hooks/use-boolean'
import {
  FormDialog,
  FormActions
} from 'modules/core/components/FormDialog'
import { Button } from 'modules/core/components/Button'
import { Select } from 'modules/core/components/Select'
import { Dropzone } from '../components/Dropzone'
import { MultiplePositionsSelect } from '../components/PositionsMultipleSelect'
import { FormInput } from 'modules/core/components/FormInput'
import { CreateEmployee } from '../shared/Employee'

import DialogContent from '@mui/material/DialogContent'
import Grid from '@mui/material/Grid2'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

export default function AddEmployeeFormDialog() {
  const [open, onOpen, onClose] = useBoolean()

  const onSubmit = (values: CreateEmployee) => {
    console.log(values)
  }

  return (
    <React.Fragment>
      <Button variant='outlined' onClick={onOpen}>
        Add Employee
      </Button>
      <FormDialog
        open={open}
        onClose={onClose}
        onFinish={onSubmit}
        title='Add Employee'
      >
        <DialogContent>
          <Divider sx={{ mt: 1.5 }} />
          <Grid container columnSpacing={2} rowSpacing={.5} sx={{ mt: 1.5 }}>
            <Grid size={6}>
              <FormInput id="name" name="firstname" label='First Name' />
            </Grid>
            <Grid size={6}>
              <FormInput id="lastname" name="lastname" label='Last Name' />
            </Grid>
            <Grid size={6}>
              <FormInput id="email" type='email' name="email" label='Email address' />
            </Grid>
            <Grid size={6}>
              <FormInput id='phone' type='phone' name='phone' label='Phone' />
            </Grid>
            <Grid size={6} mt={1}>
              <Select
                name='department'
                label='Department'
                labelId='department'
                placeholder='Select a department first'
                options={[{ label: 'Department 1', value: 1 }]}
              />
            </Grid>
            <Grid size={6} mt={1}>
              <MultiplePositionsSelect />
            </Grid>
          </Grid>
          <Typography fontWeight={600} pt={4}>
            Add a profile picture
          </Typography>
          <Dropzone />
        </DialogContent>
        <FormActions buttonText='Add Employee' />
      </FormDialog>
    </React.Fragment>
  )
}
