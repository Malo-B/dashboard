import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Localisation from '../../pages/localisation/localisation';
import { useNavigate } from "react-router-dom";
import home from '../../pages/home/Home';

export default function BasicMenu() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/localisation`; 
    navigate(path);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Paramètres
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={routeChange}>Changer la localisation</MenuItem>
        <MenuItem onClick={routeChange}>Mes informations</MenuItem>
        <MenuItem onClick={handleClose}>Se déconnecter</MenuItem>
      </Menu>
    </div>
  );
}
