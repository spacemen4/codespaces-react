import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  Stack,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack
} from '@chakra-ui/react';

function AssessmentForm() {
  const [painChecked, setPainChecked] = useState(false);
  const [otherChecked, setOtherChecked] = useState(false);

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
        Medical Assessment
      </Heading>
      <VStack spacing={5}>

        {/* Diagnostic Assessment */}
        <Box w="full">
          <Heading fontSize="lg" mb={4}>BILAN DE DIAGNOSTIC</Heading>
          <Stack spacing={2} direction="column">
            <Checkbox onChange={(e) => setPainChecked(e.target.checked)}>Fièvre</Checkbox>
            <Checkbox onChange={(e) => setOtherChecked(e.target.checked)}>Asthénie</Checkbox>
            <Checkbox onChange={(e) => setPainChecked(e.target.checked)}>Douleur (précisez)</Checkbox>
            {painChecked && (
              <Input type="text" placeholder="Précisez la douleur" variant="filled" />
            )}
            <Checkbox onChange={(e) => setOtherChecked(e.target.checked)}>Autre(s):</Checkbox>
            {otherChecked && (
              <Input type="text" placeholder="Précisez autre(s) symptômes" variant="filled" />
            )}
          </Stack>
          <FormControl mt={4}>
            <FormLabel>Depuis :</FormLabel>
            <Input type="text" variant="filled" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Prescription d'un traitement ?</FormLabel>
            <Input type="text" variant="filled" />
          </FormControl>
        </Box>

        {/* Follow-up Assessment */}
        <Box w="full">
          <Heading fontSize="lg" mb={4}>BILAN DE SUIVI</Heading>
          <FormControl>
            <FormLabel>Pathologie chronique (précisez) :</FormLabel>
            <Input type="text" variant="filled" />
          </FormControl>
          <Checkbox mt={4}>Suivi traitement</Checkbox>
        </Box>

        {/* Routine Assessment */}
        <Box w="full">
          <Heading fontSize="lg" mb={4}>BILAN DE ROUTINE</Heading>
          {/* Any additional fields for routine assessment can be added here */}
        </Box>

      </VStack>
    </Box>
  );
}

export default AssessmentForm;
