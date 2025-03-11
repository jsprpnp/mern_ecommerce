import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useColorModeValue } from "../components/ui/color-mode";

import { toast, Bounce } from 'react-toastify';
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  
  

  const { createProduct } = useProductStore();

  const handleAddProduct = async() => {
      const {success, message} = await createProduct(newProduct);
      if(!success){
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
        

      }else{
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
        
      }
  };

  return (
    <Container maxW={"container.sm"}>
        <VStack
            gap={8}
            >
                <Heading as="h1" size="2xl" textAlign="center" mb={8}>
                    Create a new product
                </Heading>
                <Box
                    w={"full"} bg={useColorModeValue("white", "gray.800")} 
                    p={6} rounded={"lg"} shadow={"md"}
                >
                    <VStack gap={4}>

                        <Input 
							placeholder='Product Name'
							name='name'
							value={newProduct.name}
							onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
						/>
						<Input
							placeholder='Price'
							name='price'
							type='number'
							value={newProduct.price}
							onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
						/>
						<Input
							placeholder='Image URL'
							name='image'
							value={newProduct.image}
							onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
						/>

						<Button colorScheme='blue' onClick={handleAddProduct} w='full'>
							Add Product
						</Button>
                    </VStack>

                </Box>
        </VStack>
    </Container>
  )
}

export default CreatePage
