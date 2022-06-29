import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { styled } from '@mui/material/styles';

const style = {
   position: 'absolute',
   top: '20%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 800,
   bgcolor: 'background.paper',
   //    border: '2px solid #000',
   boxShadow: 24,
   p: 4,
};

export default function BasicModal() {
   const {
      data,
      handleOpen,
      handleClose,
      open,
      setOpen,
      modal,

      quantity,
      setQuantity,
      cart,
      setCart,
   } = useContext(ProductContext);

   const handleAddToCart = (item) => {
      const itemIndex = cart.indexOf(item);
      if (itemIndex === -1) {
         return setCart([item, ...cart]);
      }

      //// increment existing quantity if item already in the cart
      if (cart[itemIndex].count > cart[itemIndex].quantity) {
         //  cart[itemIndex].quantity += 1;
         setCart([...cart]);
      }
   };

   const increment = (item) => {
      const itemIndex = cart.indexOf(item);
      if (item.quantity < item.count) {
         console.log('hi');
      }
      //   if ((item.quantity += 1));
      //   if (cart[itemIndex].count > cart[itemIndex].quantity) {
      //      cart[itemIndex].quantity += 1;
      //      console.log('hi');
      //      setCart([...cart]);
      //   }
   };

   const decrement = (item) => {
      const itemIndex = cart.indexOf(item);
      if (cart[itemIndex].quantity !== 1) {
         cart[itemIndex].quantity -= 1;
         setCart([...cart]);
      }
   };

   return (
      <div>
         {modal.map((item) => (
            <Modal
               open={open}
               onClose={handleClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
               key={item.id}
            >
               <ItemBox sx={style}>
                  <img src={item.image} alt="food" />

                  <FlexBox>
                     <Typography
                        id="modal-modal-title"
                        variant="h4"
                        component="h2"
                     >
                        {item.itemName}
                     </Typography>
                     <Typography
                        variant="h6"
                        component="h4"
                        id="modal-modal-description"
                        sx={{ mt: 2 }}
                     >
                        {item.description}
                     </Typography>
                     <CallToAction>
                        <StyledButton onClick={() => decrement(item)}>
                           -
                        </StyledButton>
                        <StyledTypography>
                           {quantity + item.quantity}
                        </StyledTypography>

                        <StyledButton onClick={() => increment(item)}>
                           +
                        </StyledButton>
                     </CallToAction>
                     <AddButton
                        onClick={() => {
                           handleAddToCart(item);
                        }}
                     >
                        ADD TO CART
                     </AddButton>
                  </FlexBox>
               </ItemBox>
            </Modal>
         ))}
      </div>
   );
}
const ItemBox = styled(Box)`
   display: flex;
   gap: 2rem;
`;
const FlexBox = styled(Box)``;

const CallToAction = styled(Box)`
   display: flex;
   justify-content: center;
   align-items: center;
   border: 1px solid #ccc;
   margin: auto 0.5rem;
   height: 2rem;
`;
const AddButton = styled(Button)`
   background-color: #353839;
   color: white;
   width: 90%;
   margin: 1rem auto;
   padding: 0.25rem 0;
   border-radius: 5rem;
   &:hover {
      background-color: #151515;
   }
`;

const StyledTypography = styled(Box)`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0.25rem;
   font-weight: 600;
`;

const StyledButton = styled(Button)`
   height: 1.5rem;
   color: black;
   font-size: 1.25rem;
`;
