import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/bitcoin.webp';
import { FaBitcoin } from 'react-icons/fa';
import image2 from '../assets/subham.png';
import { setDetails } from './ContextAPI/DetailContext';

export default function Home() {
  const details = useContext(setDetails);
  const navigate = useNavigate();

  return (
    <Container maxW={'container.xl'}>
      <Box>
        <HStack flexDirection={['column', 'column', 'row', 'row', 'row']}>
          <Image src={image1} h={[200, 400]} />
          <VStack alignItems={'flex-start'}>
            <Text fontFamily={'cursive'} fontSize={[20, 40]}>
              The future of money is digital currency.
            </Text>
            <Button
              colorScheme={'facebook'}
              variant={'solid'}
              textDecoration="none"
              onClick={e => navigate('/coins')}
              rightIcon={<FaBitcoin />}
            >
              Explore Coins
            </Button>
          </VStack>
        </HStack>
        <VStack alignItems={'flex-start'} p={8} mt={2}>
          <Heading>What is cryptocurrency?</Heading>
          <Text>
            Cryptocurrency is a digital payment system that doesn`t rely on
            banks to verify transactions. Cryptocurrency is stored in digital
            wallets. Cryptocurrency received its name because it uses encryption
            to verify transactions. This means advanced coding is involved in
            storing and transmitting cryptocurrency data between wallets and to
            public ledgers.
          </Text>
          <Heading>How does cryptocurrency work?</Heading>
          <Text>
            Cryptocurrencies are digital currencies that run on a distributed
            public ledger called a blockchain. Users can also buy the currencies
            from brokers, then store and spend them using cryptographic wallets.
            Although Bitcoin has been around since 2009, applications of the
            technology are still emerging in financial terms.
          </Text>
        </VStack>

        <HStack
          display={'flex'}
          flexDirection={['column', 'row']}
          justifyContent={['center', 'space-between']}
          p={3}
          m={2}
        >
          <HStack>
            <Avatar size="xl" name="Subham Panda" src={image2} />
            <Text m={3}>Website Designed by Subham</Text>
          </HStack>
        </HStack>
      </Box>
    </Container>
  );
}
