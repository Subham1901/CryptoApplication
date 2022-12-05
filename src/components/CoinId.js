import {
  HStack,
  VStack,
  Text,
  Avatar,
  Center,
  Spinner,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CoindetailsId from './CoindetailsId';

function CoinId() {
  const { id } = useParams();
  const [idData, setidData] = useState({});
  const [loader, setLoader] = useState(false);

  const getData = async () => {
    setLoader(true);
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
      )
      .then(response => {
        setLoader(false);
        console.log(response.data);
        setidData(response.data);
      })
      .catch(error => {
        setLoader(false);
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  if (loader && idData.length == 0) {
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
    <VStack>
      {idData && (
        <CoindetailsId marketData={idData.market_data} image={idData.image} />
      )}
    </VStack>
  );
}

export default CoinId;
