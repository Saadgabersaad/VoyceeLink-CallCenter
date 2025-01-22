import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { typeOptions } from "modules/callcenter/callers/consts/typeOptions";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { Box, Divider, Grid2, Checkbox, TextField, Autocomplete } from "@mui/material";
import { ConfirmationModal } from "modules/callcenter/callers/layouts/ConfirmationModal";
import { FormActions, FormDialog, FormDialogContent } from "modules/core/components/FormDialog";

type Props = {
    open: boolean;
    onClose(): void;
};

export function AddCaller({ open, onClose }: Props) {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [callType, setCallType] = useState<string[]>([]);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState<boolean>(false);

    const isFormValid = name.trim() !== "" && email.trim() !== "" && callType.length > 0;

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleCallTypeChange = (selectedOptions: string[]) => {
        setCallType(selectedOptions);
    };

    const onSubmit =  () => {
            setIsConfirmationModalOpen(true);
    };

    return (
        <>
            <FormDialog open={open} onClose={() => { }} onFinish={onSubmit} title="Add New Caller">
                <FormDialogContent>
                    <Divider sx={{ mt: 1.5 }} />
                    <Grid2 container columnSpacing={2} rowSpacing={0.5} sx={{ mt: 1.5 }}>
                        <Grid2 size={6}>
                            <TextField
                                fullWidth
                                label="Name"
                                id="Name"
                                onChange={handleNameChange}
                                value={name}
                                error={!name.trim() && name !== ""}
                                helperText={!name.trim() && name !== "" ? "Name is required" : ""}
                                aria-label="Name"
                            />
                        </Grid2>
                        <Grid2 size={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                id="Email"
                                onChange={handleEmailChange}
                                value={email}
                                error={!email.trim() && email !== ""}
                                helperText={!email.trim() && email !== "" ? "Email is required" : ""}
                            />
                        </Grid2>
                        <Grid marginTop={5} size={6}>
                            <CheckboxesTags onChange={handleCallTypeChange} />
                        </Grid>
                    </Grid2>
                    <FormActions
                        buttonText={"Send Invite Email"}
                        disabled={!isFormValid}
                        onClose={onClose}
                    />

                </FormDialogContent>
                <ConfirmationModal
                    open={isConfirmationModalOpen}
                    onClose={onClose}   />
            </FormDialog>
        </>
    );
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

type CheckboxesTagsProps = {
    onChange: (selectedOptions: string[]) => void;
};

export default function CheckboxesTags({ onChange }: CheckboxesTagsProps) {
    const handleAutocompleteChange = (
        event: React.ChangeEvent<{}>,
        value: { label: string }[]
    ) => {
        onChange(value.map((option) => option.label));
    };

    return (
        <Autocomplete
            multiple
            options={typeOptions}
            disableCloseOnSelect
            getOptionLabel={(option) => option.label}
            onChange={handleAutocompleteChange}
            renderOption={(props, option, { selected }) => {
                const { key, ...optionProps } = props;
                return (
                    <li key={key} {...optionProps}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        <Box
                            sx={{
                                color: option.color,
                                backgroundColor: option.backgroundColor,
                                padding: "4px 8px",
                                display: "flex",
                                borderRadius: "5px",
                            }}
                        >
                            {option?.label !== "Video&Audio" && option?.label}
                            {option?.icon}
                        </Box>
                    </li>
                );
            }}
            fullWidth
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Select Call Type"
                    placeholder="Select Call Type"
                    aria-label="Call Type"
                />
            )}
        />
    );
}
