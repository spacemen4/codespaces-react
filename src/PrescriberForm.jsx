import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Heading,
  VStack,
  Divider,
} from '@chakra-ui/react';

function PrescriberForm() {
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
        Prescriber Information
      </Heading>
      <VStack divider={<Divider borderColor="gray.200" />} spacing={4} align="stretch">
        <HStack spacing={10}>
          {/* Prescriber's Details */}
          <FormControl id="prescriber-name" isRequired>
            <FormLabel fontWeight="semibold">Prescripteur</FormLabel>
            <Input type="text" placeholder="TEST Philippe" variant="filled" />
          </FormControl>
          
          {/* Correspondent's Details */}
          <FormControl id="correspondent-name">
            <FormLabel fontWeight="semibold">Correspondant</FormLabel>
            <Input type="text" variant="filled" />
          </FormControl>
        </HStack>

        {/* Fax and Prescription Date */}
        <HStack spacing={10}>
          <FormControl id="fax">
            <FormLabel fontWeight="semibold">Fax</FormLabel>
            <Input type="text" variant="filled" />
          </FormControl>
          
          <FormControl id="prescription-date">
            <FormLabel fontWeight="semibold">Date ordonnance</FormLabel>
            <Input type="date" variant="filled" />
          </FormControl>
        </HStack>

        {/* Other Doctors */}
        <FormControl id="other-doctors">
          <FormLabel fontWeight="semibold">Médecin(s) autre(s)</FormLabel>
          <Input type="text" variant="filled" />
        </FormControl>
      </VStack>
    </Box>
  );
}

export default PrescriberForm;
