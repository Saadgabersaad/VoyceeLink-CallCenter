import React, {useEffect, useState } from "react";
import { DialogProps, FormActions, FormDialog, FormDialogContent } from "modules/core/components/FormDialog";
import {Box, OutlinedInput, TextField, Typography} from "@mui/material";
import { DeletePositionTable } from "modules/hhrr/positions/epmloyees/components/deleteEmployee";
import { CountdownModal } from "./countDown";
import {useEmployeesPosition} from "modules/hhrr/positions/epmloyees/hooks/use-employeesPosition";
import {PRIMARY} from "modules/core/consts/theme";
import { usePositionContext } from "../shared/PositionSelectedId";

type DeletePositionModalProps = DialogProps & {
    count: number;
    positionName: string;
    create(): Promise<void>;
    positionId:string|null;
};



export function ChangePositionName({ open, create, onClose }: DeletePositionModalProps) {
    const [isCountdownModalOpen, setCountdownModalOpen] = useState(false);
    const {setPositionData}=usePositionContext()

    // const {
    //     data,isLoading,onAssignPosition
    // } = useEmployeesPosition()


    const handleDeleteClick = () => {
        setCountdownModalOpen(true);
        // setPositionId(id)


    };

    const handleCountdownFinish = async () => {
        await create();
        setCountdownModalOpen(false);
    };
    return (
        <>
            <FormDialog
                title="Change Position Name" open={open!} onClose={onClose!}>

                <FormDialogContent >
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '35ch' ,borderTop:'1px solid lightgray' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="New Name" variant="outlined" />
                    </Box>
                    <FormActions
                        onClose={onClose}
                        buttonText="Change Name"
                        openModal={handleDeleteClick} // Open countdown modal when the button is clicked
                        bgcolor={undefined}                    />
                </FormDialogContent>

            </FormDialog>

        </>
    );
}
