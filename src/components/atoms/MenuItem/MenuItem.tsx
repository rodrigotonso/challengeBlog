import React, { FC } from "react";
import { MenuItem as MUIMenuItem } from "@mui/material";

type MenuItemProps = {
    text: string;
    handleClick: () => any;
};

const MenuItem: FC<MenuItemProps> = ({ text, handleClick }) => {
    return <MUIMenuItem onClick={handleClick}>{text}</MUIMenuItem>;
};

export default MenuItem;
