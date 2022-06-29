import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductSection from './pages/ProductSection';
import { products } from '../src/datas/foodlist';
import { ProductContext } from './components/Product/ProductContext';

function App() {
   const [data, setData] = useState(products);
   const [cart, setCart] = useState([]);
   const [quantity, setQuantity] = useState(0);

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
   };
   return (
      <>
         <ProductContext.Provider value={foodItems}>
            <Navbar />
            <ProductSection />
         </ProductContext.Provider>
      </>
   );
}

export default App;
