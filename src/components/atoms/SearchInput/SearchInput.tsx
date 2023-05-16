import React, { FC } from "react";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import StyledSearchInput from "./StyledSearchInput"

type SearchInputProps = {
    options: string[];
    handleChange: (value: string | null) => any;
};

const SearchInput: FC<SearchInputProps> = ({ options, handleChange }) => {
    console.log(options);
    return (
        <StyledSearchInput
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            options={options.map((option) => option)}
            renderInput={(params) => (
                <TextField {...params} label="Search..." />
            )}
            onChange={(event, value) => handleChange(value)}
        />
    );
};

export default SearchInput;
