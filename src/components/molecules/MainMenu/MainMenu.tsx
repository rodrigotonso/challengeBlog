import React, { FC } from "react";
import Menu from "@mui/material/Menu";

type MainMenuProps = {
    anchorEl: null | HTMLElement;
    open: boolean;
    handleClose: () => any;
    children: React.ReactNode;
};

const MainMenu: FC<MainMenuProps> = (
    { anchorEl, open, handleClose, children }
) => {
    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                "aria-labelledby": "basic-button",
            }}
        >
            {children}
        </Menu>
    );
};

export default MainMenu;
