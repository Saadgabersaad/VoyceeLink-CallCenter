import * as React from "react";
import { Box, Divider, Grid2, Checkbox, TextField, Autocomplete, Button } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { typeOptions } from "modules/callcenter/callers/consts/typeOptions";
import { FormActions, FormDialog, FormDialogContent } from "modules/core/components/FormDialog";
import Grid from "@mui/material/Grid2";
import { useState } from "react";

type Props = {
    open: boolean;
    onClose(): void;
};

export function AddCaller({ open, onClose }: Props) {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [callType, setCallType] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false); // Loading state for submit button

    // Check if the form is valid
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

    const onSubmit = async () => {
        setLoading(true);
        try {
            // Simulate API call
            console.log({ name, email, callType });
            // Add your actual API call here
            setLoading(false);
            onClose(); // Close the dialog on successful submission
        } catch (error) {
            console.error("Error submitting form:", error);
            setLoading(false);
        }
    };

    return (
        <>
            <FormDialog open={open} onClose={onClose} onFinish={onSubmit} title="Add New Caller">
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
                                aria-label="Email"
                            />
                        </Grid2>
                        <Grid marginTop={5} size={6}>
                            <CheckboxesTags onChange={handleCallTypeChange} />
                        </Grid>
                    </Grid2>
                </FormDialogContent>
                <FormActions
                    buttonText={loading ? "Sending..." : "Send invite Email"}
                    onClose={onClose}
                    disabled={!isFormValid || loading}
                />
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
            id="checkboxes-tags-demo"
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
