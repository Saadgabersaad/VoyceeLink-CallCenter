import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid2'
import Divider from '@mui/material/Divider'
import { useBoolean } from 'modules/core/hooks/use-boolean'
import { Button } from 'modules/core/components/button'
import { FormInput } from '../components/FormInput'

//TODO: MAKE A DIALOG CORE COMPONENT
export default function FormDialog() {
  const [open, onOpen, onClose] = useBoolean()

  const handleClickOpen = () => {
    onOpen()
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <React.Fragment>
      <Button variant='outlined' onClick={handleClickOpen}>
        Add Employee
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            const formJson = Object.fromEntries((formData as any).entries())
            handleClose()
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: '700', pb: 0 }}>Add Employee</DialogTitle>
        <DialogContent>
          <Divider sx={{ mt: 2 }} />
          <Grid container columnSpacing={2} rowSpacing={1} sx={{ mt: 2 }}>
            <Grid size={6}>
              <FormInput id="name" name="firstname" label='First Name' />
            </Grid>
            <Grid size={6}>
              <FormInput id="lastname" name="lastname" label='Last Name' />
            </Grid>
            <Grid size={6}>
              <FormInput id="email" name="email" label='Email address' />
            </Grid>
            <Grid size={6}>
              <FormInput id="phone" name="phone" label='Phone' />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ paddingBottom: '1.5rem', paddingInline: '1.5rem', gap: 1 }}>
          <Button onClick={handleClose} sx={{ boxShadow: 1, px: 2 }}>
            Cancel
          </Button>
          <Button variant='contained'>
            Add employee
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
