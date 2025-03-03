import {
	Box,
	Button,
	Heading,
	HStack,
	IconButton,
	Image,
	Icon,
	Text,
	
	
} from "@chakra-ui/react";
import {useColorMode, useColorModeValue,} from "./ui/color-mode";
import { useProductStore } from "../store/product";

import React from 'react'
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import { toast, Bounce } from 'react-toastify';








const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.700", "gray.100");
    const bg = useColorModeValue("white", "gray.800");

	const {deleteProduct} = useProductStore()
	const handleDeleteProdcut = async (pid) => {
		const {success, message} = await deleteProduct(pid)
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
	}

  return (
    <Box
			shadow='lg'
			rounded='lg'
			overflow='hidden'
			transition='all 0.3s'
			_hover={{ transform: "translateY(-5px)", shadow: "xl" }}
			bg={bg}
			
		>
            <Image src = {product.image} alt={product.name} h={48} w='full' objectFit='cover' />
        
        <Box p={4}>
            <Heading as='h3' size='md' mb={'2'}>
                {product.name}
            </Heading>

            <Text fontWeight='bold' textStyle='xl' color={textColor} mb={4}>
                ${product.price}
            </Text>

            <HStack spacing={2}>

					<IconButton colorPalette='blue'>
					<FaEdit/>
					</IconButton> 

					<IconButton colorPalette='red' onClick={() => handleDeleteProdcut(product._id)}>
					<FaTrash/>
					</IconButton> 



					
			</HStack>
        </Box>

    </Box>
  )
}

export default ProductCard
