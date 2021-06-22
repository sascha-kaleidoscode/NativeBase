import React from 'react';
import { ScrollView, VStack, Center } from 'native-base';
export const Example = () => {
  return (
    <ScrollView
      flex={1}
      px={90}
      _contentContainerStyle={{ bg: 'lime.300', px: '44px', w: '100%' }}
      // style={{ backgroundColor: 'blue' }}
    >
      <VStack flex={1}>
        {[
          'one',
          'two',
          'three',
          'four',
          'five',
          'six',
          'seven',
          'eight',
          'nine',
          'ten',
          'eleven',
        ].map((val) => (
          <Center rounded="lg" p={7} bg="primary.400" my={5} mb={3}>
            {val}
          </Center>
        ))}
      </VStack>
    </ScrollView>
  );
};
