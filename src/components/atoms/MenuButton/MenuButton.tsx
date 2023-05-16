import React, { FC } from "react";
import StyledButton from './StyledButton';
import MenuIcon from '@mui/icons-material/Menu';

type MenuButtonProps = {
    open: boolean;
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => any;
};

const MenuButton: FC<MenuButtonProps> = ({ open, handleClick }) => {
    return <StyledButton
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
    >
            <MenuIcon />
    </StyledButton>;
};

export default MenuButton;
