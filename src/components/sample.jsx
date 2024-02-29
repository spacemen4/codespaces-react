import { FormControl, FormLabel, Input, VStack, Box, Heading, Text } from '@chakra-ui/react';

function SampleForm() {
  return (
    <Box
      p={8}
      shadow="lg"
      borderWidth="1px"
      borderColor="gray.300"
      borderRadius="md"
      bg="white"
    >
      <Heading fontSize="2xl" mb={6} textAlign="center" color="gray.700">
        Sample Request Form
      </Heading>
      <VStack spacing={5} align="stretch">
        
        {/* Dossier Number */}
        <FormControl id="dossier-number">
          <FormLabel fontWeight="semibold">Dossier Number</FormLabel>
          <Input type="text" placeholder="20/05/21-N-2500" variant="filled" />
        </FormControl>
        
        {/* Entered By */}
        <FormControl id="entered-by">
          <FormLabel fontWeight="semibold">Saisi par</FormLabel>
          <Input type="text" placeholder="MHXL" variant="filled" />
        </FormControl>
        
        {/* Sampler */}
        <FormControl id="sampler">
          <FormLabel fontWeight="semibold">Préleveur</FormLabel>
          <Input type="text" variant="filled" />
        </FormControl>
        
        {/* Date and Time of Collection */}
        <FormControl id="collection-datetime">
          <FormLabel fontWeight="semibold">Le (Date of Collection)</FormLabel>
          <Input type="date" variant="filled" />
          <FormLabel mt={4} fontWeight="semibold">à (Time)</FormLabel>
          <Input type="time" placeholder="14:46" variant="filled" />
        </FormControl>
        
        {/* Transmission */}
        <FormControl id="transmission">
          <FormLabel fontWeight="semibold">Transmission</FormLabel>
          <Input type="text" variant="filled" />
        </FormControl>

        {/* Patient Post */}
        <FormControl id="patient-post">
          <FormLabel fontWeight="semibold">Posté patient</FormLabel>
          <Input type="text" placeholder="Internet" variant="filled" />
        </FormControl>

        {/* Hexalis Patient */}
        <FormControl id="hexalis-patient">
          <FormLabel fontWeight="semibold">Hexalis patient</FormLabel>
          <Input type="text" variant="filled" />
        </FormControl>

        {/* Promise Date */}
        <FormControl id="promise-date">
          <FormLabel fontWeight="semibold">Date de promesse</FormLabel>
          <Input type="text" placeholder="20/05/21" variant="filled" />
        </FormControl>
        
      </VStack>
    </Box>
  );
}

export default SampleForm;
