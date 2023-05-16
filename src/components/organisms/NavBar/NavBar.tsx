import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MainMenu from "../../molecules/MainMenu/MainMenu";
import LogoImg from "../../../assets/img/Logo.webp";
import Logo from "../../atoms/Logo/Logo";
import SearchInput from "../../atoms/SearchInput/SearchInput";
import StyledNavBar from "./StyledNavBar";

const NavBar = () => {
    const menuOptions = [
        { text: "Home", handleClick: () => console.log("first") },
        { text: "About", handleClick: () => console.log("first") },
        { text: "Blog", handleClick: () => console.log("first") },
    ];
    const postsList = ["a", "b", "c"];
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <StyledNavBar>
                    <Logo src={LogoImg} />
                    <SearchInput
                        options={postsList}
                        handleChange={() => console.log("first")}
                    />
                    <MainMenu options={menuOptions} />
                </StyledNavBar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
