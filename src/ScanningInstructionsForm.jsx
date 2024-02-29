import React from 'react';
import {
  Box,
  Text,
  Divider,
  Heading,
  VStack,
} from '@chakra-ui/react';

function ScanningInstructionsForm() {
  return (
    <Box
      p={8}
      shadow="lg"
      borderWidth="1px"
      borderColor="gray.300"
      borderRadius="md"
      bg="white"
    >
      <VStack divider={<Divider borderColor="gray.200" />} spacing={4} align="stretch">
        {/* Scanning Instructions */}
        <Text fontSize="md" color="gray.600">
          À scanner dans la GED rubrique Fiche individuelle
        </Text>

        {/* Analysis Section */}
        <Heading fontSize="lg" color="gray.700">
          Analyses
        </Heading>
        {/* Placeholder for any additional content related to 'Analyses' */}
      </VStack>
    </Box>
  );
}

export default ScanningInstructionsForm;
