import {
  Avatar,
  Box,
  Container,
  HStack,
  Text,
  VStack,
  Spinner,
  useToast,
  Select,
  useDisclosure,
  Stack,
  Center,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import data from 'currency-codes/data';
import getSymbolFromCurrency from 'currency-symbol-map';
import currenyFormatter from 'currency-formatter';
import { setDetails } from './ContextAPI/DetailContext';
import { Link } from 'react-router-dom';

export default function Coindetail() {
  const [coindata, setCoindata] = useState([]);
  const [loader, setLoader] = useState(false);
  const [currency, setCurrency] = useState('INR');
  const [page, setPage] = useState(100);
  const pages = [100, 400, 800, 1600];
  const toast = useToast();
  const details = useContext(setDetails);

  const getCoinData = async () => {
    details.setCurr(currency);

    setLoader(true);

    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${page}&page=1&sparkline=false`
      )
      .then(
        response => {
          console.log(response.data);

          setCoindata(response.data);
          setLoader(false);
        },
        error => {
          setLoader(false);
          setCoindata(null);
          toast({
            description: error.message,
            status: 'error',
          });
        }
      );
  };

  useEffect(() => {
    getCoinData();
  }, [currency, page]);

  if (loader) {
    return (
      <Center>
        <Spinner
          mt={300}
          width={100}
          height={100}
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }
  return (
    <Container maxW={'container.xl'}>
      <VStack alignItems={['center', 'flex-start']}>
        <VStack m={[0, 12]} alignItems={['center', 'flex-start']}>
          <Text>Currency</Text>
          <Select
            variant="filled"
            value={currency}
            onChange={e => setCurrency(e.target.value)}
            w={'300px'}
          >
            {data.map(items => (
              <option value={items.code}>{items.currency}</option>
            ))}
          </Select>
          <Text mb="8px">Per Page</Text>
          <Select
            variant="filled"
            value={page}
            onChange={e => setPage(e.target.value)}
            w={'300px'}
          >
            {pages.map(items => (
              <option value={items}>{items}</option>
            ))}
          </Select>
        </VStack>
        <HStack wrap={'wrap'} justifyContent="center">
          {coindata &&
            coindata.map(items => (
              <Link to={`/${items.id}`}>
                <VStack
                  alignItems={'center'}
                  padding="10"
                  h={'100%'}
                  w={60}
                  m={(0, '2rem !important')}
                  borderRadius="20"
                  shadow={'dark-lg'}
                  transition={'all 0.3s'}
                  css={{
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <Avatar size={'xl'} src={items.image} />
                  <Text fontSize={24}>
                    {items.id[0].toUpperCase() + items.id.slice(1)}
                  </Text>
                  <Text>{items.symbol.toUpperCase()}</Text>
                  <Text fontSize={24}>
                    CMP:{' '}
                    {currenyFormatter.format(items.current_price, {
                      code: currency,
                    })}
                  </Text>
                </VStack>
              </Link>
            ))}
        </HStack>
      </VStack>
    </Container>
  );
}
