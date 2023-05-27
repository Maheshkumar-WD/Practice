import {   Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {MdShoppingCart} from "react-icons/md"
import classes from "./Navbar.module.css"
import ViewModal from '../UI/Model'
const Navbar = ({cartData}) => {
    let {onClose,onOpen,isOpen} = useDisclosure();
  return (
        <>
        <ViewModal title={"Cart"} isOpen={isOpen} onClose={onClose} element={<h1>Cart Element</h1>} />
        <Flex justifyContent={"flex-end"} boxShadow={"0px 0px 5px 0.8px lightgray"} padding={"12px 24px"} >
            <div onClick={()=>onOpen()}  data-cartcount={cartData.amount} className={classes.cartBadge}>
                <MdShoppingCart  fontSize={"50px"} color='teal' />
            </div>
        </Flex>
        </>
  )
}

export default Navbar