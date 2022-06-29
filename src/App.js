import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductSection from './pages/ProductSection';
import { products } from '../src/datas/foodlist';
import { ProductContext } from './components/Product/ProductContext';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

function App() {
   const [data, setData] = useState(products);
   const [cart, setCart] = useState([]);
   const [quantity, setQuantity] = useState(0);
   const [modal, setModal] = useState([]);
   const [open, setOpen] = useState(false);

   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

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

   const handleAddToCart = (item) => {
      //// need to check if item is already in the cart!
      const itemIndex = cart.indexOf(item);
      if (itemIndex === -1) {
         return setCart([item, ...cart]);
      }

      //// increment existing quantity if item already in the cart
      if (cart[itemIndex].count > cart[itemIndex].quantity) {
         cart[itemIndex].quantity += 1;
         setCart([...cart]);
      }
   };

   const foodItems = {
      data,
      setData,
      cart,
      setCart,
      quantity,
      setQuantity,
      handleAddToCart,
      handleOpen,
      handleClose,
      open,
      setOpen,
      modal,
      setModal,
   };
   return (
      <>
         <ProductContext.Provider value={foodItems}>
            <StyledBox maxWidth="1600px">
               <Navbar />
               <ProductSection />
            </StyledBox>
         </ProductContext.Provider>
      </>
   );
}

export default App;

const StyledBox = styled(Box)`
   margin: auto;
`;
