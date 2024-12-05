import * as React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useBoolean } from 'modules/core/hooks/use-boolean'
import { Button } from 'modules/core/components/Button'
import { Select } from 'modules/core/components/Select'
import { Dropzone } from '../components/Dropzone'
import { MultiplePositionsSelect } from '../components/PositionsMultipleSelect'
import { FormInput } from 'modules/core/components/FormInput'
import { CreateEmployee } from '../shared/Employee'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid2'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

//TODO: MAKE A DIALOG CORE COMPONENT
export default function AddEmployeeFormDialog() {
  const methods = useForm<CreateEmployee>()
  const { handleSubmit } = methods

  const [open, onOpen, onClose] = useBoolean()

  const onSubmit = (values: CreateEmployee) => {
    console.log(values)
  }

  return (
    <React.Fragment>
      <Button variant='outlined' onClick={onOpen}>
        Add Employee
      </Button>
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit(onSubmit)
        }}
      >
        <DialogTitle sx={{ fontWeight: '700', pb: 0, fontSize: 20 }}>Add Employee</DialogTitle>
        <DialogContent>
          <Divider sx={{ mt: 1.5 }} />
          <Grid container columnSpacing={2} rowSpacing={.5} sx={{ mt: 1.5 }}>
            <FormProvider {...methods}>
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
            </FormProvider>
          </Grid>
          <Typography fontWeight={600} pt={4}>
            Add a profile picture
          </Typography>
          <Dropzone />
        </DialogContent>
        <DialogActions sx={{ paddingBottom: '1.5rem', paddingInline: '1.5rem', gap: 1 }}>
          <Button onClick={onClose} sx={{ boxShadow: 1, px: 2 }}>
            Cancel
          </Button>
          <Button variant='contained' type='submit'>
            Add employee
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
