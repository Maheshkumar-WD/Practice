
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import { useDisclosure } from '@chakra-ui/react';

function App() {
  let {onClose,onOpen,isOpen} = useDisclosure();
  let [cart,setCart] = useState({data:[],amount:0});
  let handleCartQuantity = (type,product)=>{
    let cartData = {...cart};
    let findIndex = cartData.data.findIndex(prod=>prod.id===product.id);
    if(findIndex>-1){
      let foundProduct = cartData.data[findIndex];
      let currQuantity = foundProduct.quantity
      if(type==="inc"){
        foundProduct.quantity++
        cartData.amount++
        cartData.data[findIndex] = foundProduct
        setCart(cartData)
        
      }else if(type==="desc"){
        if(currQuantity===1){
          let upDated = cartData.data.filter(prod=>prod.id !==product.id);
          cartData.amount--;
          cartData.data = [...upDated];
          setCart(cartData);
        }else {
          cartData.data[findIndex].quantity--
          cartData.amount--
          setCart(cartData);
        }
      }
    }
    
  }
  let onAddToCart = (product)=>{
    let findItem = cart.data.findIndex(prev=>prev.id === product.id);
    let newCartData = [...cart.data];
    if(findItem>-1){
      newCartData[findItem].quantity++;
      let updated = {data:newCartData,amount:cart.amount+1}
      
      setCart(updated);
    }else{
      let newProduct = product;
      newProduct.quantity = 1;
      setCart(prev=>{
        return {...prev,data:[...prev.data,newProduct],amount:prev.amount+1}
      })
    }
  }

  return (
    <div className="App">
      <Navbar onHandleCartQuantity={handleCartQuantity} onClose={onClose} onOpen={onOpen} isOpen={isOpen} cartData = {cart} />
      <Products  onAddToCart={onAddToCart} />
    </div>
  );
}

export default App;
