import {
	Box,
	Button, Input, Stack,
	Heading,
	HStack,
	IconButton,
	Image,
	Icon,
	Text,
} from "@chakra-ui/react";

import {
	DialogActionTrigger,
	DialogBody,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogRoot,
	DialogTitle,
	DialogTrigger,
	DialogCloseTrigger,
  } from "../components/ui/dialog"
  import { Field } from "../components/ui/field"

  

import {useColorMode, useColorModeValue} from "./ui/color-mode";
import { useProductStore} from "../store/product";

import React from 'react'


import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import { toast, Bounce } from 'react-toastify';
import { useState } from "react";




const ProductCard = ({product}) => {
	
	const [updatedProduct, setUpdatedProduct] = useState(product);	
    
	const textColor = useColorModeValue("gray.700", "gray.100");
    const bg = useColorModeValue("white", "gray.800");
	
	const {deleteProduct, updateProduct} = useProductStore()

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

	const handleUpdateProduct = async (pid, updatedProduct) => {
		const { success, message } = await updateProduct(pid, updatedProduct);
		
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

            <HStack gap={2}>

					
					<DialogRoot>
      
						<DialogTrigger asChild>
							<IconButton colorPalette='blue' >
							<FaEdit/>
							</IconButton> 
						</DialogTrigger>


						<DialogContent>

							<DialogHeader>
							<DialogTitle>Update Product</DialogTitle>
							</DialogHeader>

							<DialogBody pb="4">

							<Stack gap="4">
								<Field label="Product Name">
								<Input placeholder = "Product Name" value={updatedProduct.name}
								onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})}
								/>
								</Field>
								<Field label="Price">
								<Input placeholder = "Price" type = 'number' value={updatedProduct.price}
								onChange={(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})}
								/>
								</Field>
								<Field label = "Image URL">
								<Input placeholder = "Image URL" value={updatedProduct.image}
								onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})}
								/>
								</Field>
							</Stack>

							</DialogBody>

							<DialogFooter>

							<DialogActionTrigger asChild>
							<Button variant="outline" >Cancel</Button>
							</DialogActionTrigger>

							<DialogActionTrigger asChild>
							<Button colorPalette={'blue'} onClick={() => handleUpdateProduct(product._id, updatedProduct)}>Update</Button>
							</DialogActionTrigger>
							
							
							</DialogFooter>

						</DialogContent>	
					</DialogRoot>
				

					

					<DialogRoot role="alertdialog">
      <DialogTrigger asChild>
	  <IconButton colorPalette='red'>
					<FaTrash/>
					</IconButton> 
        
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>
            Are you sure you want to delete this product? <br/>
			<b>
			{product.name}
			</b>


          </p>
        </DialogBody>
        <DialogFooter>

          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>

          <DialogActionTrigger asChild>
         	 <Button colorPalette="red" onClick={() => handleDeleteProdcut(product._id)}>Delete</Button>
          </DialogActionTrigger>

        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>

					
			</HStack>
        </Box>
 
    </Box>
  )
}

export default ProductCard
