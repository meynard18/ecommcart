import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DropdownCart from './DropdownCart';
import { ProductContext } from '../components/Product/ProductContext';
import { styled } from '@mui/material/styles';

const Navbar = () => {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
               <StyledToolBar>
                  <Typography
                     variant="h6"
                     component="div"
                     sx={{ flexGrow: 1, marginLeft: '2rem' }}
                  >
                     GrabFood!
                  </Typography>
                  <div>
                     <Button
                        color="inherit"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        style={{ marginRight: '2rem' }}
                     >
                        Cart
                     </Button>
                     <StyledMenu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                           'aria-labelledby': 'basic-button',
                        }}
                     >
                        <DropdownCart />
                     </StyledMenu>
                  </div>
               </StyledToolBar>
            </AppBar>
         </Box>
      </>
   );
};

export default Navbar;

const StyledToolBar = styled(Toolbar)`
   background-color: #f78702;
`;

const StyledMenu = styled(Menu)`
   margin-top: 1rem;
   margin-left: -10rem;
`;
