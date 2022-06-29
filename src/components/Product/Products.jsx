import React, { useContext } from 'react';
import Card from '../Card';
import BasicModal from './Modal';
import { ProductContext } from './ProductContext';

const Products = () => {
   return (
      <>
         <BasicModal />
         <Card />;
      </>
   );
};

export default Products;
