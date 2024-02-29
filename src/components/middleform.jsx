import { FormControl, FormLabel, Input, Flex, Box, Heading, Text } from '@chakra-ui/react';

function PaymentForm() {
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
        Payment Details
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
        
        {/* Remaining Amount */}
        <FormControl id="remaining-amount" w={{ base: '100%', md: '45%' }}>
          <FormLabel fontWeight="semibold">Montant restant à régler</FormLabel>
          <Input type="text" placeholder="0.00" variant="filled" />
        </FormControl>

        {/* DLX */}
        <FormControl id="dlx" w={{ base: '100%', md: '45%' }}>
          <FormLabel fontWeight="semibold" textAlign="right">DLX</FormLabel>
          <Text textAlign="right" mt={2} fontSize="lg">Non</Text>
        </FormControl>

      </Flex>
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" mt={4}>
        
        {/* Cash Register */}
        <FormControl id="cash-register" w={{ base: '100%', md: '45%' }}>
          <FormLabel fontWeight="semibold">Caisse</FormLabel>
          <Input type="text" placeholder="Caisse inconnue" variant="filled" />
        </FormControl>

        {/* Mutual */}
        <FormControl id="mutual" w={{ base: '100%', md: '45%' }}>
          <FormLabel fontWeight="semibold">Mutuelle</FormLabel>
          <Input type="text" variant="filled" />
        </FormControl>
        
      </Flex>
    </Box>
  );
}

export default PaymentForm;
