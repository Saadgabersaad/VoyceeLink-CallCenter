import { DialogProps, FormActions, FormDialog, FormDialogContent } from 'modules/core/components/FormDialog'
import { Grid2, Typography } from '@mui/material'
import { FormTextArea } from 'modules/core/components/FormTextarea'
import { CreatePosition } from '../shared/Position'
import {FormMultipleSelect} from "modules/core/components/FormMultipleSelect";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import {FormSelect} from "modules/core/components/FormSelect";
import {FormInput} from "modules/core/components/FormInput";
import {Button} from "modules/core/components/button";
import { Flex } from 'modules/core/components/flex';
import theme from "modules/core/consts/theme";

//You can extend props in a new type if needed
type AddPositionModalProps = DialogProps & {
    create(position: CreatePosition): Promise<void> // POST FUNCTION FOR CREATE A NEW DEPARTMENT
}

//MAIN MODALS inherit Dialog Props by default
export function AddPosition({
                                  open,
                                  create,
                                  onClose,
                              }: AddPositionModalProps) {


    return <>
        <FormDialog
            title='Add New Position'
            open={open!}
            onClose={onClose!}
            onFinish={create}

        >
            <FormDialogContent  >
                <Typography fontWeight={700} mt={2} mb={.2}>
                    Select Department
                </Typography>
                <Grid  container columnSpacing={2} rowSpacing={.5} sx={{ mt: 1.5,bgcolor:"#fafafa" }} mb={2}>
                    <Grid size={6} mt={1}>
                        <FormSelect
                            name='department'
                            label='Department'
                            placeholder='Select a department first'
                            options={[{ label: 'List Item 1', value: 1 },{ label: 'List Item 2', value: 2 },{ label: 'List Item 3', value: 3 },]}
                        />
                    </Grid>
                </Grid>
            </FormDialogContent>


            <FormDialogContent>
                <Grid   container columnSpacing={2} rowSpacing={.5} sx={{ mt: 1.5,bgcolor:"#fafafa"}} mb={2}>

                <Typography fontWeight={700} mt={2} mb={.2}>
                    Create positions related to <span style={{color:theme.palette.primary.main}}>Sales</span> department
                </Typography>
                <Grid size={12}>
                   <Grid gap={2} sx={{display: 'flex', alignItems: 'center'}}>
                       <Grid size={6}>
                           <FormInput  id="departmentId" name="name" label='New Position Name' />
                       </Grid>
                       <Button  sx={{ boxShadow: 1, px: 2,}} type={"submit"} variant={'contained'}> Add Position +</Button>
                   </Grid>
                </Grid>
                </Grid>
            </FormDialogContent>
            <FormActions buttonText='Add Position' onClose={onClose} />
        </FormDialog>
    </>
}
