import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { styled } from '@mui/material/styles';

const style = {
   position: 'absolute',
   top: '40%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 800,
   height: 300,
   bgcolor: 'background.paper',
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
      setModal,
   } = useContext(ProductContext);

   const handleAddToCart = (item) => {
      const itemIndex = cart.indexOf(item);
      if (itemIndex === -1) {
         return setCart([item, ...cart]);
      }
      //// increment existing quantity if item already in the cart
      if (cart[itemIndex].count > cart[itemIndex].quantity) {
         setCart([...cart]);
      }
   };

   const increment = (item) => {
      const itemIndex = modal.indexOf(item);
      console.log(itemIndex);
      if (item.quantity < item.count) {
         modal[itemIndex].quantity += 1;
         setModal([...modal]);
      }
   };

   const decrement = (item) => {
      const itemIndex = modal.indexOf(item);
      console.log(itemIndex);
      if (modal[itemIndex].quantity !== 1) {
         modal[itemIndex].quantity -= 1;
         setModal([...modal]);
      }
   };

   const removeItem = (item) => {
      const itemIndex = modal.indexOf(item);
      const updatedCart = modal.filter((el) => el !== item);
      modal[itemIndex].quantity = 1;
      setModal([...updatedCart]);
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
                        sx={{ mt: 2, color: 'gray' }}
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
                     <CancelButton
                        onClick={() => {
                           removeItem(item);
                        }}
                     >
                        Cancel
                     </CancelButton>
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
   margin: 1rem 0.5rem;
   height: 3.5rem;
   width: 10rem;
   border-radius: 2rem;
`;
const AddButton = styled(Button)`
   background-color: #353839;
   color: white;
   width: 15rem;
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
   font-size: 1.5rem;
   color: #555555;
`;

const StyledButton = styled(Button)`
   height: 1.5rem;
   color: black;
   font-size: 1.5rem;
`;

const CancelButton = styled(Button)`
   background-color: #ab003c;
   color: white;
   width: 15rem;
   margin: 1rem auto;
   padding: 0.25rem 0;
   border-radius: 5rem;
   &:hover {
      background-color: #e53935;
   }
`;
