//import { Center, Grid, GridItem, Flex, Box } from '@chakra-ui/react'
import { Flex, Spacer, Center, Square, Box, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Stack, HStack, VStack, StackDivider  } from '@chakra-ui/react'
export default function Layouts() {
  return (
   
      <>
      <Flex gap="100px" mt="70px">
            <Box w="50%" ml="130px">
            <Heading size="md"> Laptop Layout</Heading>
            </Box>
            <Box w="50%" ml="130px">
            <Heading size="md">Mobile Layout</Heading>
            </Box>
      </Flex>
      
      <Flex gap="100px">
      <Flex color='white' h="450px" w="60%"   ml="50px">
         
          <Box w="20%" bg='blue' >
          <Heading size="xl" mt="200px">NAV</Heading>
          </Box>
          <Box w="60%" bg='tomato' >
          <Heading size="xl" mt="200px">CONTENT</Heading>
          </Box>
          <Box w="20%" bg='red'>
          <Heading size="xl" mt="200px">WIDGET</Heading>
          </Box>
      </Flex>
      
      <VStack mb="100px"
      divider={<StackDivider borderColor='gray.200' />}
      >

       <Box h='150px' w="300px" bg='yellow.200'>
       <Heading size="xl" mt="50px">NAV</Heading>
       </Box>
       <Box h='100px' w="300px" bg='tomato'>
       <Heading size="xl" mt="30px">CONTENT</Heading>
       </Box>
       <Box h='160px' w="300px" bg='pink.100'>
       <Heading size="xl" mt="50px">WIDGET</Heading>
       </Box>
       </VStack>
       </Flex>
      
      </>
  
  )
}
