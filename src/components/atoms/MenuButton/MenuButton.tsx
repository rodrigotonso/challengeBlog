import React, { FC } from "react";
import Button from '@mui/material/Button';

type MenuButtonProps = {
    children: string;
    open: boolean;
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => any;
};

const MenuButton: FC<MenuButtonProps> = ({ children, open, handleClick }) => {
    return <Button
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
    >
      {children}
    </Button>;
};

export default MenuButton;
