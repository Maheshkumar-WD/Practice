
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';

function App() {
  let [cart,setCart] = useState({data:[],amount:0});
  
  let onAddToCart = (product)=>{
    let findItem = cart.data.findIndex(prev=>prev.id === product.id);
    let newCartData = [...cart.data];
    if(findItem>-1){
      newCartData[findItem].quantity++;
      let updated = {data:newCartData,amount:cart.amount+1}
      console.log(updated)
      setCart(updated);
    }else{
      let newProduct = product;
      newProduct.quantity = 1;
      setCart(prev=>{
        return {...prev,data:[...prev.data,newProduct],amount:prev.amount+1}
      })
    }
  }
  console.log(cart)

  return (
    <div className="App">
      <Navbar cartData = {cart} />
      <Products onAddToCart={onAddToCart} />
    </div>
  );
}

export default App;
