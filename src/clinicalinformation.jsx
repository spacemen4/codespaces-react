import { FormControl, FormLabel, Textarea, Flex, Box, Heading } from '@chakra-ui/react';

function ClinicalInformationForm() {
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
        Clinical Information
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="flex-start">
        
        {/* Patient Information */}
        <FormControl id="patient-info" w={{ base: '100%', md: '45%' }} mb={{ base: 4, md: 0 }}>
          <FormLabel fontWeight="semibold">Renseignement(s) patient</FormLabel>
          <Textarea variant="filled" placeholder="Patient information here" />
        </FormControl>

        {/* Request Information */}
        <FormControl id="request-info" w={{ base: '100%', md: '45%' }}>
          <FormLabel fontWeight="semibold">Renseignement(s) demande</FormLabel>
          <Textarea variant="filled" placeholder="Request information here" />
        </FormControl>
        
      </Flex>

      {/* Pathology */}
      <FormControl id="pathology" mt={4}>
        <FormLabel fontWeight="semibold">Pathologie</FormLabel>
        <Textarea variant="filled" placeholder="Pathology details" />
      </FormControl>
      
    </Box>
  );
}

export default ClinicalInformationForm;
