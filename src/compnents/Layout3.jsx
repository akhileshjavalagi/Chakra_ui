import React from 'react'
import { Stack, HStack, VStack, StackDivider, Box, Heading, Flex} from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
export default function Layout3() {
  return (
    <>
      <Box boxShadow='lg'>
            <Flex gap="100px" ml="50px">
            <VStack mb="100px"
      divider={<StackDivider borderColor='gray.200' />}
      >
       <Box h='30px' w="150px" bg='yellow.200'>
       <Heading size="xl" mt="50px"></Heading>
       </Box>
       <Box h='30px' w="150px" bg='tomato'>
       <Heading size="xl" mt="30px"></Heading>
       </Box>
       <Box h='200px' w="150px" bg='pink.100'>
       <Heading size="xl" mt="50px"></Heading>
       </Box>
       <Box h='30px' w="150px" bg='yellow.200'>
       <Heading size="xl" mt="50px"></Heading>
       </Box>
       <Box h='30px' w="150px" bg='tomato'>
       <Heading size="xl" mt="30px"></Heading>
       </Box>
       </VStack>

       {/* <Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem rowSpan={2} bg='tomato' />
  
</Grid> */}

      <Box>
      <Flex gap="7px">
         <Box bg="tomato" w="100px" h="100px">
            
         </Box>
         <Box bg="green" w="100px" h="100px">
            
            </Box>
      </Flex>
            
      <VStack mt="30px"  mb="100px"
      divider={<StackDivider borderColor='gray.200' />}
      >
       <Box h='150px' w="210px" bg='yellow.200'>
       <Heading size="xl" mt="50px"></Heading>
       </Box>
       <Box h='40px' w="210px" bg='tomato'>
       <Heading size="xl" mt="30px"></Heading>
       </Box>
       <Box h='40px' w="210px" bg='pink.100'>
       <Heading size="xl" mt="50px"></Heading>
       </Box>
       </VStack>
       </Box>

       <Box>
       <Flex gap="7px">
         <Box bg="tomato" w="250px" h="100px">
            
         </Box>
         <Box bg="green" w="250px" h="100px">
            
            </Box>
      </Flex>

      <VStack mt="30px"  mb="100px"
      divider={<StackDivider borderColor='gray.200' />}
      >
       <Box h='150px' w="500px" bg='yellow.200'>
       <Heading size="xl" mt="50px"></Heading>
       </Box>
       </VStack>
       {/* <Flex>
            <Box bg="green" w="100px">
               
            </Box>
            <Box bg="green" w="100px">
               
            </Box>
       </Flex> */}
       <Grid templateColumns='repeat(5, 1fr)' gap={1}>
       <GridItem colSpan={2} h='10' bg='tomato' />
       <GridItem colStart={4} colEnd={6} h='10' bg='green' />
       </Grid>
       
       </Box>
    </Flex>
      </Box>
    </>
  )
}
