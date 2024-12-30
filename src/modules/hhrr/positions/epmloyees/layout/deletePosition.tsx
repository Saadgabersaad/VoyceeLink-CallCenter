import React, {useEffect, useState } from "react";
import { DialogProps, FormActions, FormDialog, FormDialogContent } from "modules/core/components/FormDialog";
import { Typography } from "@mui/material";
import { DeletePositionTable } from "modules/hhrr/positions/epmloyees/components/deleteEmployee";
import { CountdownModal } from "./countDown";
import {useEmployeesPosition} from "modules/hhrr/positions/epmloyees/hooks/use-employeesPosition";
import {PRIMARY} from "modules/core/consts/theme";

type DeletePositionModalProps = DialogProps & {
    count: number;
    positionName: string;
    create(): Promise<void>;
    positionId:string|null;
};



export function DeletePosition({ open, onClose,count,positionName,positions }: DeletePositionModalProps) {
    const [isCountdownModalOpen, setCountdownModalOpen] = useState(false);

    const {
        data,isLoading
    } = useEmployeesPosition()


    const handleDeleteClick = () => {
        setCountdownModalOpen(true);


    };

    const handleCountdownFinish =  () => {

        setCountdownModalOpen(false);
    };
    return (
        <>
            <FormDialog
                title="Delete Position" open={open!} onClose={onClose!}>
                <FormDialogContent>
                    <Typography fontSize={20} fontWeight={700} mt={2} mb={0.5}>
                        Position
                         <span style={{color: PRIMARY}}> {positionName} </span>is Assigned to
                        <span style={{color: PRIMARY}}> {count} </span> Employees in Department Development
                    </Typography>
                    <Typography fontSize={20}  fontWeight={700} mb={2}>
                        Please Assign Employees New Position
                    </Typography>
                    <DeletePositionTable  rows={data} loading={isLoading} positions={positions}   />
                    <FormActions
                        onClose={onClose}
                        buttonText="Delete Position"
                        bgcolor="red"
                        openModal={handleDeleteClick} // Open countdown modal when the button is clicked
                    />
                </FormDialogContent>
                <CountdownModal
                    open={isCountdownModalOpen}
                    onClose={() => setCountdownModalOpen(false)}
                    onFinish={handleCountdownFinish}
                />
            </FormDialog>

        </>
    );
}
