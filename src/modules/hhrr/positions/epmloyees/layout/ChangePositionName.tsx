import React, {useEffect, useState } from "react";
import { DialogProps, FormActions, FormDialog, FormDialogContent } from "modules/core/components/FormDialog";
import {Box, TextField} from "@mui/material";
import { FieldValues } from "react-hook-form";

type DeletePositionModalProps = DialogProps & {
    count: number;
    positionName: string;
    create(): Promise<void>;
    positionId: string | null;
};


export function ChangePositionName({open, create, onClose}: DeletePositionModalProps) {
    const [isCountdownModalOpen, setCountdownModalOpen] = useState(false);


    const handleChangeName = () => {
        setCountdownModalOpen(true);


    };

    const handleCountdownFinish = async () => {
        await create();
        setCountdownModalOpen(false);
    };
    return (
        <>
            <FormDialog
                title="Change Position Name" open={open!} onClose={onClose!}
                onFinish={function (values: FieldValues): void {
                    throw new Error("Function not implemented.");
                }}>

                <FormDialogContent >
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="New Name" variant="outlined" />
                    </Box>
                    <FormActions
                        onClose={onClose}
                        buttonText="Change Name"
                        openModal={handleChangeName}
                        bgcolor={undefined}/>
                </FormDialogContent>

            </FormDialog>

        </>
    );
}
