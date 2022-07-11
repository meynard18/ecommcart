import React, { useContext } from 'react';
import Card from '../Card';
import BasicModal from './Modal';
import { ProductContext } from './ProductContext';
import OrderSummary from './OrderSummary';

const Products = () => {
   const { orderReceipt } = useContext(ProductContext);
   return (
      <>
         <BasicModal />
         <Card />
         {orderReceipt ? <OrderSummary /> : null}
      </>
   );
};

export default Products;
