import React from "react";
import { Dialog, DialogContent, Typography, Button } from "@mui/material";
import { Flex } from "modules/core/components/flex";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import {FormDialog} from "modules/core/components/FormDialog";

type ConfirmationModalProps = {
    open: boolean;
    onClose: () => void;
};

export const ConfirmationModal = ({ open, onClose }: ConfirmationModalProps) => {
    return (
        <FormDialog onFinish={onClose} open={open} onClose={onClose} >
            <DialogContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "2rem",
                }}
            >
                <Typography variant="h6" fontWeight={700}>
                    New Caller Added
                </Typography>

                <Flex alignItems="center" gap={1} my={2}>
                    <MarkEmailReadOutlinedIcon color="success" />
                    <Typography fontSize={16}>
                        Invite Email and Password sent to{" "}
                        <strong>jamesjohnes@gmail.com</strong>
                    </Typography>
                </Flex>

                <Button
                    onClick={onClose}
                    variant="contained"
                    color="success"
                    size="large"
                    sx={{ marginTop: "1.5rem" }}
                >
                    OK
                </Button>
            </DialogContent>
        </FormDialog>
    );
};
