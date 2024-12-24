import { DialogProps, FormActions, FormDialog, FormDialogContent } from 'modules/core/components/FormDialog'
import { Grid2, Typography } from '@mui/material'
import { CreatePosition } from '../../../positions/shared/Position'
import * as React from "react";
import {usePositions} from "modules/hhrr/positions/hooks/use-positions";
import {DeletePositionTable} from "modules/hhrr/positions/epmloyees/components/deleteEmployee";
import {getPositionsEmployees} from "modules/hhrr/positions/epmloyees/services/positionEmployees";
import {useEmployeesPosition} from "modules/hhrr/positions/epmloyees/hooks/use-employeesPosition";
//You can extend props in a new type if needed
type DeletePositionModalProps = DialogProps & {
    create(position: CreatePosition): Promise<void>
}

//MAIN MODALS inherit Dialog Props by default
export function DeletePosition({
                                   open,
                                   create,
                                   onClose,

                               }: DeletePositionModalProps) {
    const {
        data,
        isLoading,
        onSearch,
        onCreatePosition
    } = useEmployeesPosition()


    console.log(data)


    return <>
        <FormDialog
            title='Delete Position'
            open={open!}
            onClose={onClose!}
          onFinish={create}
        >

            <FormDialogContent  >
                <Typography fontWeight={700} mt={2} mb={.2}>
                    Position Tech Lead is Assigned to 3 Employees in Department Tech
                    Please Assign Employees New Position
                </Typography>
                <DeletePositionTable rows={data} loading={isLoading}/>
                <FormActions bgcolor={'red'}  onClose={onClose} buttonText={'Delete Position'}/>
            </FormDialogContent>

        </FormDialog>
    </>
}