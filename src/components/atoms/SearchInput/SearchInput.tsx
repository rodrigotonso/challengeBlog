import React, { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";

type SearchInputProps = {
    options: string[];
    handleChange: (value: string | null) => any;
};

const SearchInput: FC<SearchInputProps> = ({ options, handleChange }) => {
    console.log(options);
    return (
        <Autocomplete
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
