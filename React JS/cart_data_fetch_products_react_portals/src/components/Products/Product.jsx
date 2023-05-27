import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

const Product = ({product,onAddToCart}) => {
  return (
    <Card maxW='sm'>
  <CardBody>
    <Box height={"180px"} overflow={"hidden"}>
        <Image
        width={"100%"}
        src={product.image}
        backgroundSize={"contain"}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
        />
    </Box>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{product.title.split("").slice(0,24).join("")}</Heading>
      <Text>
      {product.description.split("").slice(0,60).join("")+"..."}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {product.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button onClick={()=>onAddToCart(product)} variant='solid' colorScheme='blue'>
        <MdAddShoppingCart fontSize={"30px"} />
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default Product