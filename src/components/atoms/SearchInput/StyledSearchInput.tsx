import { styled } from "@mui/system";
import Autocomplete from "@mui/material/Autocomplete";

const StyledSearchInput = styled(Autocomplete)(() => ({
    margin: "0 5px",
    minWidth: "320px",
    backgroundColor: "white"
}));

export default StyledSearchInput;