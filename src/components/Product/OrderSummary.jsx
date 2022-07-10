import React, { useContext, useEffect } from 'react';
import { ProductContext } from './ProductContext';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export default function BasicModal() {
   const { price, setPrice, confirmedOrder } = useContext(ProductContext);

   useEffect(() => {
      const handlePrice = () => {
         let total = 0;
         confirmedOrder.map((item) => (total += item.quantity * item.price));
         setPrice(total);
      };
      handlePrice();
   }, []);
   return (
      <StyledBox>
         <h1>Order Confirmed!</h1>
         {confirmedOrder.map((item) => (
            <FlexBox key={item.id}>
               <DetailsBox>
                  <h3>{item.itemName}</h3>
                  <img
                     src={item.image}
                     style={{
                        width: '5rem',
                        height: '4rem',
                        borderRadius: '.5rem',
                     }}
                     alt="food"
                  />
               </DetailsBox>
               <DetailsBox>
                  <h3>Quality</h3>
                  <h4>{item.quantity}</h4>
               </DetailsBox>
               <DetailsBox>
                  <h3>Total</h3>
                  <h4>${item.price * item.quantity}</h4>
               </DetailsBox>
            </FlexBox>
         ))}
         <TotalAmount>
            <h3>SubTotal:</h3>
            <h2>${price}</h2>
         </TotalAmount>
      </StyledBox>
   );
}
const StyledBox = styled(Box)`
   position: fixed;
   display: flex;
   align-items: center;
   flex-direction: column;
   border-radius: 5px;
   top: -20%;
   left: 50%;
   transform: translate(-50%, 50%);
   background-color: #eee;
   width: 40rem;
   height: 50rem;
   overflow-x: scroll;
   padding: 1rem 0;
`;
const DetailsBox = styled(Box)`
   padding: 0.5rem;
`;
const FlexBox = styled(Box)`
   display: flex;
   width: 90%;
   justify-content: space-around;
   align-items: flex-start;
   border: 1px solid #ccc;
   text-align: center;
   margin: 0.25rem auto;
`;

const TotalAmount = styled(Box)`
   display: flex;
   width: 80%;
   padding: 0.5rem 1rem;
   justify-content: space-around;
   align-items: center;
   color: #888;
`;
