import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Cart = ({ cartData,onHandleCartQuantity }) => {
  let [total,setTotal] = useState(0);
  useEffect(()=>{
    let totalCart = cartData.reduce((previous,next)=>{
      return previous + (next.quantity * next.price)
    },0)
    setTotal(totalCart);
  },[cartData,onHandleCartQuantity])
  console.log(total);

  let renderList = cartData.length>0?<>
  {cartData.map((prod) => {
    return (
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          width={"100px"}
          height={"100px"}
          src={prod.image}
          alt="Caffe Latte"
        />
        <Stack width={"100%"}>
          <CardBody>
            <Heading size="md">{prod.title.split("").slice(0,20).join("")}</Heading>

            <Text py="2">
            {prod.description.split("").slice(0,20).join("")}
            </Text>
            <Heading width={"100%"}  display={"flex"} justifyContent={"space-between"} size={"md"} color={"teal"}>X {prod.quantity}<Button size={"xs"} colorScheme={"blue"} onClick={()=>onHandleCartQuantity("desc",prod)}>-</Button><Button size={"xs"} colorScheme={"blue"} onClick={()=>onHandleCartQuantity("inc",prod)}>+</Button> <span>{prod.price}(Per/item)</span></Heading>
          </CardBody>
            <Button variant="solid" size={"sm"} colorScheme="red">
              Remove
            </Button>
        </Stack>
      </Card>
    );
  })}
</>:<Heading textAlign={"center"} size={"lg"}>Cart is Empty</Heading>

  return<>
   {renderList}
   <Divider  />
   {cartData.length>0 && <Heading size={"md"}> Total: {total}</Heading>}
   </>
};

export default Cart;
