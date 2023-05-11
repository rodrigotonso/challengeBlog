import React, { FC } from "react";
import Menu from "@mui/material/Menu";
import MenuButton from "../../atoms/MenuButton/MenuButton";
import MenuItem from "../../atoms/MenuItem/MenuItem";

type menuOptions = {
    text: string;
    handleClick: () => any;
};

type MainMenuProps = {
    options: menuOptions[];
};

const MainMenu: FC<MainMenuProps> = ({ options }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const buttonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("event")
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <MenuButton open={open} handleClick={buttonClick}>
                Menu
            </MenuButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                {options.map(({ text, handleClick }) => (
                    <MenuItem
                        key={text}
                        text={text}
                        handleClick={handleClick}
                    />
                ))}
            </Menu>
        </>
    );
};

export default MainMenu;
