import React from "react";
import { Flex } from "modules/core/components/flex";
import { PRIMARY } from "modules/core/consts/theme";
import { Button, Divider, Typography } from "@mui/material";
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { FormDialog, FormDialogContent } from "modules/core/components/FormDialog";

type ConfirmationModalProps = {
    open: boolean;
    onClose: () => void;
};

export const ConfirmationModal = ({ open, onClose }: ConfirmationModalProps) => {
    return (
        <FormDialog onFinish={onClose} open={open} onClose={onClose} title="New Caller Added">
            <Divider />
            <FormDialogContent>
                <Flex flexDirection="column" alignItems="center" justifyContent="center" gap={1} my={2}>
                    <Flex gap={2}>
                        <MarkEmailReadIcon sx={{ color: PRIMARY }} />
                        <Typography>
                            Invite Email and Password sent to <strong>jamesjohnes@gmail.com</strong>
                        </Typography>
                    </Flex>
                </Flex>
            </FormDialogContent>
            <Flex p={3} justifyContent="flex-end">
                <Button onClick={onClose} variant="contained" sx={{ bgcolor: PRIMARY }}>
                    OK
                </Button>
            </Flex>
        </FormDialog>
    );
};
