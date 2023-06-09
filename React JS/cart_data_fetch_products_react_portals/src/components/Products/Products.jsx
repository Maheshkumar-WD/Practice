import { SimpleGrid } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react'
import Product from './Product';

const Products = ({onAddToCart,onHandleCartQuantity}) => {
    let [products,setProducts]=useState([]);
    let fetchData = useCallback(async ()=>{
        try {
            let response = await fetch("https://fakestoreapi.com/products");
            let isOk = response.ok;
            if(!isOk){
                throw new Error("server error")
            }
            let data = await response.json();
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    },[])
    useEffect(()=>{
        fetchData()
    },[fetchData])
  return (
    <SimpleGrid margin={"20px 0 0 0 "} padding={"0px 24px"} columns={[1,2,4]} gap={"28px"}>
        {products.map(prod=><Product onHandleCartQuantity={onHandleCartQuantity} key={prod.id} onAddToCart={onAddToCart}  product={prod} />)}
    </SimpleGrid>
  )
}

export default Products