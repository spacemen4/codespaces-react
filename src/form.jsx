import React from 'react';
import {
  Box,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Input,
  Stack,
  VStack,
  HStack,
  Text,
  Divider,
  Heading,
} from '@chakra-ui/react';

const PaperForm = () => {
  return (
    <Box
      p={8}
      maxW="1000px"
      mx="auto"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
    >
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">TEST HEXALIS PATIENT</Heading>
        
        <HStack justifyContent="space-between">
          <VStack align="flex-start">
            <Text>Dossier N° : 20/05/21-N-2500</Text>
            <Text>43 Ans Sexe : Masculin</Text>
            <Text>12 avenue de la Liberté</Text>
            <Text>85000 LA ROCHE SUR YON</Text>
          </VStack>
          <VStack align="flex-end">
            <Text>Saisi par : MHXL</Text>
            <Text>Préleveur : </Text>
            <Text>Le : 20/05/21 à 14:46</Text>
          </VStack>
        </HStack>
        
        <Divider />
        
        <HStack justify="space-between">
          <Box>
            <Text fontWeight="bold">RENSEIGNEMENT(S) CLINIQUE(S)</Text>
            <CheckboxGroup>
              <VStack align="flex-start">
                <Checkbox>BILAN DE DIAGNOSTIC</Checkbox>
                <Checkbox>BILAN DE SUIVI</Checkbox>
                <Checkbox>BILAN DE ROUTINE</Checkbox>
              </VStack>
            </CheckboxGroup>
          </Box>
          <Box>
            <Text fontWeight="bold">DEMANDE</Text>
            <Text>Transmission: </Text>
            <Text>DLX: Non</Text>
          </Box>
        </HStack>

        <Divider />

        <HStack justify="space-between">
          <VStack align="flex-start">
            <FormControl id="pathologie">
              <FormLabel>Pathologie:</FormLabel>
              <Input placeholder="Indiquer la pathologie" />
            </FormControl>
            <FormControl id="depuis">
              <FormLabel>Depuis:</FormLabel>
              <Input placeholder="Indiquer la durée des symptômes" />
            </FormControl>
          </VStack>
          <VStack align="flex-start">
            <CheckboxGroup>
              <Checkbox value="fievre">Fièvre</Checkbox>
              <Checkbox value="asthenie">Asthenie</Checkbox>
              <Checkbox value="douleur">Douleur</Checkbox>
              {/* Add more checkboxes as required */}
            </CheckboxGroup>
          </VStack>
        </HStack>

        <Divider />

        <FormControl id="prescripteurs">
          <FormLabel>Prescripteurs:</FormLabel>
          <Input placeholder="Nom du prescripteur" />
        </FormControl>

        <Divider />

        <FormControl id="correspondant">
          <FormLabel>Correspondant:</FormLabel>
          <Input placeholder="Nom du correspondant" />
        </FormControl>

        <Divider />

        <FormControl id="analyse">
          <FormLabel>Analyses:</FormLabel>
          <Input placeholder="Type d'analyse" />
        </FormControl>
      </VStack>
    </Box>
  );
};

export default PaperForm;
