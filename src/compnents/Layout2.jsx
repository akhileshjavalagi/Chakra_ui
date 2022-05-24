import React from 'react'
import { Stack, HStack, VStack, StackDivider, Box, Heading, Flex} from '@chakra-ui/react'

export default function Layout2() {
  return (
      <>   
      <Flex gap="100px" mt="40px">
            <Box w="15%" ml="130px">
            <Heading size="md"> Laptop Layout</Heading>
            </Box>
            <Box w="50%" ml="130px">
            <Heading size="md">Mobile Layout</Heading>
            </Box>
      </Flex>
      <Box> 
      <Flex gap="100px" ml="50px"> 
      <VStack mb="100px"
      divider={<StackDivider borderColor='gray.200' />}
      >
       <Box h='150px' w="300px" bg='yellow.200'>
       <Heading size="xl" mt="50px"></Heading>
       </Box>
       <Box h='100px' w="300px" bg='tomato'>
       <Heading size="xl" mt="30px"></Heading>
       </Box>
       <Box h='160px' w="300px" bg='pink.100'>
       <Heading size="xl" mt="50px"></Heading>
       </Box>
       </VStack>
       
      
       <Box>     
       <VStack mb="100px"
      divider={<StackDivider borderColor='gray.200' />}
      >
       <Box h='280px' w="400px" bg='yellow.200'>
       <Heading size="xl" mt="50px"></Heading>
       </Box>
       <Box h='150px' w="400px" bg='tomato'>
       <Heading size="xl" mt="30px"></Heading>
       </Box>
       </VStack>
       </Box>
       <Box>
       <VStack mb="100px">
       <Box h='450px' w="100px" bg='tomato' mr="100px">
       <Heading size="xl" mt="30px"></Heading>
       </Box>
       </VStack>
       </Box>
       </Flex>  
       </Box>   
    </>
  )
}
