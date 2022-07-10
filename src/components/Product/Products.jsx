import React, { useContext } from 'react';
import Card from '../Card';
import BasicModal from './Modal';
import { ProductContext } from './ProductContext';
import OrderSummary from './OrderSummary';

const Products = () => {
   const { openConfirmation } = useContext(ProductContext);
   return (
      <>
         <BasicModal />
         <Card />
         {openConfirmation ? <OrderSummary /> : null}
      </>
   );
};

export default Products;
