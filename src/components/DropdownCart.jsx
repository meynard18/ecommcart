import React, { useContext, useState } from 'react';
import { ProductContext } from './Product/ProductContext';
import { styled } from '@mui/material/styles';
import { Box, OutlinedInput, Button, Typography } from '@mui/material';

const DropdownCart = () => {
   const { cart, setCart, quantity, setQuantity } = useContext(ProductContext);

   //// need to remove item and reset the quantity back to default
   const removeItem = (item) => {
      const updatedCart = cart.filter((el) => el !== item);
      item.quantity = 1;
      setCart([...updatedCart]);
   };

   const decrement = (item) => {
      const itemIndex = cart.indexOf(item);
      if (cart[itemIndex].quantity !== 1) {
         cart[itemIndex].quantity -= 1;
         setCart([...cart]);
      }
   };
   const increment = (item) => {
      const itemIndex = cart.indexOf(item);
      if (cart[itemIndex].count > cart[itemIndex].quantity) {
         cart[itemIndex].quantity += 1;
         console.log('hi');
         setCart([...cart]);
      }
   };

   return (
      <MainContainer>
         <h2>Your Order</h2>
         {cart.map((item, i) => (
            <StyledBox key={i}>
               <FlexBox>
                  <img src={item.image} style={{ width: '7rem' }} alt="food" />
                  <div>
                     <ProductName>{item.itemName}</ProductName>
                     <ProductDescription>{item.description}</ProductDescription>
                  </div>
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
                  <DeleteButton onClick={() => removeItem(item)}>
                     X
                  </DeleteButton>
               </FlexBox>
            </StyledBox>
         ))}
      </MainContainer>
   );
};

export default DropdownCart;
const MainContainer = styled(Box)`
   height: 60vh;
   width: 50rem;

   padding: 1rem;
   overflow-y: scroll;
`;
const StyledBox = styled(Box)`
   display: flex;
   flex-direction: column;
   align-content: center;
   padding: 1rem;
   margin: 0.25rem;
`;

const StyledTypography = styled(Box)`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0.25rem;
`;
const StyledButton = styled(Button)`
   height: 1.5rem;
   color: black;
   font-size: 1.25rem;
`;

const DeleteButton = styled(Button)`
   height: 1.5rem;
   font-size: 1.25rem;
   color: #ab003c;

   &:hover {
      background-color: #e53935;
      color: white;
   }
`;

const ProductName = styled(Typography)`
   font-size: 1.25rem;
   font-weight: 600;
   color: #555555;
`;
const ProductDescription = styled(Typography)`
   font-size: 1rem;
   color: #888888;
`;

const CallToAction = styled(Box)`
   display: flex;
   justify-content: center;
   align-items: center;
   border: 1px solid #ccc;
   margin: auto 0.5rem;
   height: 2rem;
`;
const FlexBox = styled(Box)`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;
