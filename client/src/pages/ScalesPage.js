import React from 'react';
import { Link, Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const ScalesPage = () => {
  // Define a list of scales with their names and descriptions
  const scales = [
    { id: 'major', name: 'Major Scale', description: 'A major scale follows the pattern Whole, Whole, Half, Whole, Whole, Whole, Half.' },
    { id: 'minor', name: 'Natural Minor Scale', description: 'A natural minor scale follows the pattern Whole, Half, Whole, Whole, Half, Whole, Whole.' },
    // Add more scales here
  ];

  return (
    <Box className="scales-page" padding={5}>
      <Heading as="h2" size="lg" marginBottom={5}>
        Explore Scales
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
        {scales.map((scale) => (
          <Box key={scale.id} className="scale-item" padding={4} borderWidth={1} borderRadius="md">
            <RouterLink to={`/scales/${scale.id}`}>
              <Heading as="h3" size="md">{scale.name}</Heading>
              <Text>{scale.description}</Text>
              {/* Perhaps you can include an interactive play button to hear the scale */}
            </RouterLink>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ScalesPage;
