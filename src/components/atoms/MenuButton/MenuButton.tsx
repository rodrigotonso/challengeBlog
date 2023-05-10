import React, { FC } from "react";
import Button from '@mui/material/Button';

type MenuButtonProps = {
    text: string;
    open: boolean;
    handleClick: () => any;
};

const MenuButton: FC<MenuButtonProps> = ({ text, open, handleClick }) => {
    return <Button
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
    >
      {text}
    </Button>;
};

export default MenuButton;
