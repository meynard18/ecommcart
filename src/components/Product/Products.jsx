import React, { useContext } from 'react';
import Card from '../Card';
import BasicModal from './Modal';
import { ProductContext } from './ProductContext';
import OrderSummary from './OrderSummary';

const Products = () => {
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
      openConfirmation,
      setOpenConfirmation,
      handleCloseSummary,
      price,
      setPrice,
   } = useContext(ProductContext);
   return (
      <>
         <BasicModal />
         <Card />
         {openConfirmation ? <OrderSummary /> : ''}
      </>
   );
};

export default Products;
