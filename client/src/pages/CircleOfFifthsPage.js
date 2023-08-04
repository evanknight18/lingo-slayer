import React from 'react';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';

const CircleOfFifthsPage = () => {
  const circleOfFifths = [
    { note: 'C', major: 'C Major', minor: 'A Minor' },
    { note: 'G', major: 'G Major', minor: 'E Minor' },
    { note: 'D', major: 'D Major', minor: 'B Minor' },
    { note: 'A', major: 'A Major', minor: 'F# Minor' },
    { note: 'E', major: 'E Major', minor: 'C# Minor' },
    { note: 'B', major: 'B Major', minor: 'G# Minor' },
    { note: 'F#', major: 'F# Major', minor: 'D# Minor' },
    { note: 'Db', major: 'Db Major', minor: 'Bb Minor' },
    { note: 'Ab', major: 'Ab Major', minor: 'F Minor' },
    { note: 'Eb', major: 'Eb Major', minor: 'C Minor' },
    { note: 'Bb', major: 'Bb Major', minor: 'G Minor' },
    { note: 'F', major: 'F Major', minor: 'D Minor' }
  ];

  return (
    <Box className="circle-of-fifths-page" padding={5}>
      <Heading as="h2" size="lg" marginBottom={5}>
        Circle of Fifths
      </Heading>
      <Text marginBottom={5}>
        The Circle of Fifths is a visual representation of the relationships
        among the 12 tones of the chromatic scale, key signatures, and the
        associated major and minor keys.
      </Text>
      <SimpleGrid columns={4} spacing={5}>
        {circleOfFifths.map((keyInfo, index) => (
          <Box key={index} padding={4} borderWidth={1} borderRadius="md">
            <Text fontWeight="bold">{keyInfo.note}</Text>
            <Text>Major: {keyInfo.major}</Text>
            <Text>Minor: {keyInfo.minor}</Text>
          </Box>
        ))}
      </SimpleGrid>
      <Box className="circle-of-fifths-explanation" marginTop={5}>
        <Text>
          The Circle of Fifths illustrates how keys are related to one another
          and can be a powerful tool for composing and understanding music.
        </Text>
        {/* You might include further explanations, examples, interactive demonstrations, etc. */}
      </Box>
    </Box>
  );
};

export default CircleOfFifthsPage;
