import { Container, VStack, SimpleGrid, Text } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import React, { useEffect } from 'react'
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';

const HomePage = () => {

  const {fetchProducts,products} = useProductStore();
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log(products);
  
  return (
    <Container maxW='container.xl' py={12}>
      <VStack gap={8}>
        <Text
          textStyle="xl" 
          //textStyle={"30"}
          fontWeight={"bold"}
					bgGradient={"linear-gradient({colors.cyan.400}, {colors.blue.500})"}
          //bgGradient={"linear-gradient(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products
        </Text>
       
        

          <SimpleGrid 
            columns={{ 
              base: 1, 
              md: 2, 
              lg: 3 
            }}
            gap={5}
            w={"full"}
          >
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </SimpleGrid>
        {products.length === 0 && (

          <Text textStyle='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
            No products found 😢{" "}
            <Link to={"/create"}>
              <Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
                Create a product
              </Text>
            </Link>
          </Text>
        )}
        
      </VStack>
    </Container>
  )
}

export default HomePage
