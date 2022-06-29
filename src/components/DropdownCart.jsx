import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from './Product/ProductContext';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';

const DropdownCart = () => {
   const { cart, setCart, quantity, setQuantity, price, setPrice } =
      useContext(ProductContext);

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
         setCart([...cart]);
      }
   };

   useEffect(() => {
      const handlePrice = () => {
         let total = 0;
         cart.map((item) => (total += item.quantity * item.price));
         setPrice(total);
      };
      handlePrice();
   });

   return (
      <MainContainer>
         <h2 style={{ margin: '1rem', color: '#151515' }}>Your Order</h2>
         {cart.length === 0 ? (
            <MessageBox>
               <h2>Cart is Empty</h2>
               <h3 style={{ color: '#999999' }}>Continue Shopping!</h3>
            </MessageBox>
         ) : (
            cart.map((item, i) => (
               <>
                  <StyledBox key={i}>
                     <FlexBox>
                        <img
                           src={item.image}
                           style={{
                              width: '5rem',
                              height: '4rem',
                              borderRadius: '.5rem',
                           }}
                           alt="food"
                        />

                        <ProductDetails>
                           <ProductName>{item.itemName}</ProductName>
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
                        </ProductDetails>
                        <DeleteButton onClick={() => removeItem(item)}>
                           X
                        </DeleteButton>
                     </FlexBox>
                  </StyledBox>
                  <TotalBox>
                     <AmountBox>
                        <span
                           style={{
                              color: '#888888',
                              fontWeight: 500,
                              fontSize: '.875rem',
                           }}
                        >
                           Total Amount
                        </span>
                        <h3>${price}</h3>
                     </AmountBox>

                     <CompleteOrderButton>Checkout</CompleteOrderButton>
                  </TotalBox>
               </>
            ))
         )}
      </MainContainer>
   );
};

export default DropdownCart;
const MainContainer = styled(Box)`
   height: 60vh;
   width: 25rem;
   overflow-y: scroll;
   overflow-x: hidden;
`;
const StyledBox = styled(Box)`
   display: flex;
   flex-direction: column;
   align-content: center;
   padding: 1rem;
   margin: 1rem;
   border: 1px solid #eee;
   border-radius: 1rem;
`;

const StyledTypography = styled(Box)`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 2rem;
   font-weight: 600;
`;
const StyledButton = styled(Button)`
   height: 1rem;
   color: black;
   font-size: 1.15rem;
   color: #f78702;
`;

const DeleteButton = styled(Button)`
   height: 1.5rem;
   font-size: 0.875rem;
   color: #ab003c;

   &:hover {
      background-color: #e53935;
      color: white;
   }
`;

const ProductName = styled(Typography)`
   font-size: 1rem;
   font-weight: 600;
   color: #555555;
`;

const CallToAction = styled(Box)`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: auto 0.5rem;
   height: 1.5rem;
   border-radius: 1rem;
   border: 1px solid #ccc;
`;
const FlexBox = styled(Box)`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const TotalBox = styled(Box)`
   margin: auto;
   display: flex;
   width: 100%;
   align-items: center;
   justify-content: center;
   background-color: #fafafa;
`;

const AmountBox = styled(Box)`
   margin: auto;
   display: flex;
   flex-direction: column;
   justity-content: center;
`;
const CompleteOrderButton = styled(Button)`
   background-color: #353839;
   color: white;
   margin-right: 1rem;
   padding: 0.75rem 1.75rem;
   border-radius: 5rem;
   &:hover {
      background-color: #151515;
   }
`;

const ProductDetails = styled(Box)`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 0.25rem;
   gap: 0.5rem;
`;

const MessageBox = styled(Box)`
   display: flex;
   flex-direction: column;
   align-items: center;
`;
