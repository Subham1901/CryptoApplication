import {
  Avatar,
  Box,
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Spinner,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { setDetails } from './ContextAPI/DetailContext';
import currenyFormatter from 'currency-formatter';
function CoindetailsId(props) {
  const details = useContext(setDetails);
  var currency = details.currency.toLowerCase();

  if (!props.marketData) {
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
    <Container
      maxW={'lg'}
      display={'flex'}
      justifyContent={['center', 'space-between']}
      alignItems="baseline"
    >
      <VStack
        display={'flex'}
        justifyContent={['center', 'space-between']}
        alignItems={('center', 'space-between')}
        mt={50}
        padding={7}
      >
        {props.image && (
          <Center>
            <Avatar size={'2xl'} src={props.image.large}></Avatar>
          </Center>
        )}
        {props.marketData && (
          <>
            <HStack display={'flex'} justifyContent="space-between">
              <Heading fontSize={'lg'}>Current Market Price</Heading>
              <Text>
                {' '}
                {currenyFormatter.format(
                  props.marketData.current_price[currency],
                  {
                    code: currency.toUpperCase(),
                  }
                )}
              </Text>
            </HStack>
            <HStack display={'flex'} justifyContent="space-between">
              <Heading fontSize={'lg'}> All Time High</Heading>
              <Text>
                {currenyFormatter.format(props.marketData.ath[currency], {
                  code: currency.toUpperCase(),
                })}{' '}
                {}
              </Text>
            </HStack>
            <HStack display={'flex'} justifyContent="space-between">
              <Heading fontSize={'lg'}> Market Cap</Heading>
              <Text>
                {currenyFormatter.format(
                  props.marketData.market_cap[currency],
                  {
                    code: currency.toUpperCase(),
                  }
                )}{' '}
                {}
              </Text>
            </HStack>

            <HStack display={'flex'} justifyContent="space-between">
              <Heading fontSize={'lg'}>Total Volume</Heading>
              <Text>{props.marketData.total_volume[currency]}</Text>
            </HStack>
            <HStack display={'flex'} justifyContent="space-between">
              <Heading fontSize={'lg'}>Total Supply</Heading>
              <Text>{props.marketData.total_supply}</Text>
            </HStack>

            <HStack display={'flex'} justifyContent="space-between">
              <Heading fontSize={'lg'}>Circulating Supply</Heading>
              <Text>{props.marketData.circulating_supply}</Text>
            </HStack>
            <HStack display={'flex'} justifyContent="space-between">
              <Heading fontSize={'lg'}>Last updated</Heading>
              <Text>
                {props.marketData.last_updated} {}
              </Text>
            </HStack>
            <HStack display={'flex'} justifyContent="space-between">
              <Heading fontSize={'lg'}>Price Change</Heading>
              <StatGroup>
                <Stat p={5}>
                  <StatHelpText>
                    <StatArrow
                      type={
                        props.marketData.price_change_24h_in_currency[
                          currency
                        ] > 0
                          ? 'increase'
                          : 'decrease'
                      }
                    />
                    {currenyFormatter.format(
                      props.marketData.price_change_24h_in_currency[currency],
                      { code: currency.toUpperCase() }
                    )}
                  </StatHelpText>
                </Stat>
              </StatGroup>
            </HStack>
            {/* //! price change percentage */}
            <HStack display={'flex'} justifyContent="center">
              <StatGroup>
                <Stat p={5}>
                  <StatLabel>1h</StatLabel>
                  <StatHelpText>
                    <StatArrow
                      type={
                        props.marketData.price_change_percentage_1h_in_currency[
                          currency
                        ] > 0
                          ? 'increase'
                          : 'decrease'
                      }
                    />
                    {Math.round(
                      props.marketData.price_change_percentage_1h_in_currency[
                        currency
                      ] * 100
                    ) / 100}
                    %
                  </StatHelpText>
                </Stat>
              </StatGroup>

              <StatGroup>
                <Stat p={5}>
                  <StatLabel>7d</StatLabel>
                  <StatHelpText>
                    <StatArrow
                      type={
                        props.marketData.price_change_percentage_7d_in_currency[
                          currency
                        ] > 0
                          ? 'increase'
                          : 'decrease'
                      }
                    />
                    {Math.round(
                      props.marketData.price_change_percentage_7d_in_currency[
                        currency
                      ] * 100
                    ) / 100}
                    %
                  </StatHelpText>
                </Stat>
              </StatGroup>
              <StatGroup>
                <Stat p={5}>
                  <StatLabel>24h</StatLabel>
                  <StatHelpText>
                    <StatArrow
                      type={
                        props.marketData
                          .price_change_percentage_24h_in_currency[currency] > 0
                          ? 'increase'
                          : 'decrease'
                      }
                    />
                    {Math.round(
                      props.marketData.price_change_percentage_24h_in_currency[
                        currency
                      ] * 100
                    ) / 100}
                    %
                  </StatHelpText>
                </Stat>
              </StatGroup>
              <StatGroup>
                <Stat p={5}>
                  <StatLabel>1y</StatLabel>
                  <StatHelpText>
                    <StatArrow
                      type={
                        props.marketData.price_change_percentage_1y_in_currency[
                          currency
                        ] > 0
                          ? 'increase'
                          : 'decrease'
                      }
                    />
                    {Math.round(
                      props.marketData.price_change_percentage_1y_in_currency[
                        currency
                      ] * 100
                    ) / 100}
                    %
                  </StatHelpText>
                </Stat>
              </StatGroup>
            </HStack>
          </>
        )}
      </VStack>
    </Container>
  );
}

export default CoindetailsId;
