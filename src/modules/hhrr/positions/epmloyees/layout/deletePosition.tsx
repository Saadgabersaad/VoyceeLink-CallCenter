import React, { useState, useEffect } from "react";
import { DialogProps, FormActions, FormDialog, FormDialogContent } from "modules/core/components/FormDialog";
import { Typography } from "@mui/material";
import { DeletePositionTable } from "modules/hhrr/positions/epmloyees/components/deleteEmployee";
import { CountdownModal } from "./countDown";
import { useEmployeesPosition } from "modules/hhrr/positions/epmloyees/hooks/use-employeesPosition";
import { PRIMARY } from "modules/core/consts/theme";
import { usePositionContext } from "../shared/PositionSelectedId";
import { FieldValues } from "react-hook-form";
import {Position} from "modules/hhrr/departments/shared/Position";
import { EnhancedTableProps } from "modules/core/components/tables/EnhancedTable";

type DeletePositionModalProps = DialogProps & {
    count: number;
    positionName: string;
};

export function DeletePosition({open, onClose, count, positionName, positions}: DeletePositionModalProps) {

    const [isCountdownModalOpen, setCountdownModalOpen] = useState(false);
    const [isPositionEmpty, setIsPositionEmpty] = useState(true); // Track if position has employees
    const {positionId} = usePositionContext();
    const {data, isLoading, onDeletePosition} = useEmployeesPosition();

    // Check if position has any employees assigned
    const hasEmployees = data && data.length > 0;

    // Effect to update isPositionEmpty when the data changes (e.g., when employees are reassigned)
    useEffect(() => {
        if (data && data.length === 0) {
            setIsPositionEmpty(true); // Enable delete button if no employees are assigned
        } else {
            setIsPositionEmpty(false); // Disable delete button if employees are still assigned
        }
    }, [data]); // Dependency on data to trigger whenever employees are reassigned

    const handleDeleteClick = () => {
        if (hasEmployees) {
            setIsPositionEmpty(false); // Set to false if employees are assigned
        } else {
            setCountdownModalOpen(true); // Open countdown modal if position is empty
        }
    };

    const handleCountdownFinish = async () => {
        if (positionId && isPositionEmpty) {
            try {
                await onDeletePosition(positionId); // Call the delete position API
            } catch (error) {
                console.error("Error deleting position:", error);
            }
        }
        setCountdownModalOpen(false);
        if (onClose) {
            onClose();
        }
    };

    return (
        <>
     {/*@ts-ignore*/}
            <FormDialog  title="Delete Position" open={open!} onClose={onClose!}>
                <FormDialogContent>
                    <Typography fontSize={20} fontWeight={700} mt={2} mb={0.5}>
                        Position <span style={{ color: PRIMARY }}>{positionName}  </span> is assigned to
                        <span style={{ color: PRIMARY }}> {count} </span> employees in the department.
                    </Typography>
                    <Typography fontSize={20} fontWeight={700} mb={2}>
                        Please assign employees to a new position before proceeding.
                    </Typography>
                    <DeletePositionTable rows={data} loading={isLoading} positions={positions} />

                    {/* Show message if there are employees assigned */}
                    {!isPositionEmpty && (
                        <Typography fontSize={16} fontWeight={500} color="error" mt={2}>
                            You cannot delete this position because there are still employees assigned to it.
                        </Typography>
                    )}

                    <FormActions
                        onClose={onClose}
                        buttonText="Delete Position"
                        bgcolor="red"
                        openModal={handleDeleteClick} // Open countdown modal when the button is clicked
                        disabled={!isPositionEmpty} // Disable the button if there are employees assigned
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
