import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Box,
  Heading,
  theme,
} from '@chakra-ui/react';

function PatientForm() {
  return (
    <Box
      p={8}
      shadow="lg"
      borderWidth="1px"
      borderColor="gray.300"
      borderRadius={theme.radii.md}
      bg="white"
    >
      <Heading fontSize="2xl" mb={6} textAlign="center" color="gray.700">
        Patient Information
      </Heading>
      <VStack spacing={5} align="stretch">
        
        {/* Patient Name */}
        <FormControl id="patient-name">
          <FormLabel fontWeight="semibold">Patient Name</FormLabel>
          <Input type="text" placeholder="TEST HEXALIS PATIENT" variant="filled" />
        </FormControl>
        
        {/* Birthdate */}
        <FormControl id="birthdate">
          <FormLabel fontWeight="semibold">Birthdate</FormLabel>
          <Input type="text" placeholder="14/01/1978" variant="filled" />
        </FormControl>
        
        {/* Address */}
        <FormControl id="address">
          <FormLabel fontWeight="semibold">Address</FormLabel>
          <Input type="text" placeholder="12 avenue de la Liberté" variant="filled" />
        </FormControl>
        
        {/* City and Postal Code */}
        <FormControl id="city-postal-code">
          <FormLabel fontWeight="semibold">City</FormLabel>
          <Input type="text" placeholder="LA ROCHE SUR YON" variant="filled" />
          <FormLabel mt={4} fontWeight="semibold">Postal Code</FormLabel>
          <Input type="text" placeholder="85000" variant="filled" />
        </FormControl>
        
        {/* Phone */}
        <FormControl id="phone">
          <FormLabel fontWeight="semibold">Phone</FormLabel>
          <Input type="tel" placeholder="+33676784806" variant="filled" />
        </FormControl>
        
        {/* Email */}
        <FormControl id="email" mt={4}>
          <FormLabel fontWeight="semibold">Email</FormLabel>
          <Input type="email" variant="filled" />
        </FormControl>
      </VStack>
    </Box>
  );
}

export default PatientForm;
