import { styled } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";

const StyledNavBar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-between"
}));

export default StyledNavBar;