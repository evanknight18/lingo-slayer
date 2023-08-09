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
      <Text as="h2" size="lg" marginBottom={5}>
        Circle of Fifths
      </Text>
      <Box position="relative" width="400px" height="400px" margin="0 auto"> {/* Increase the size of the container */}
        {circleOfFifths.map((keyInfo, index) => (
          <Box
            key={index}
            position="absolute"
            width="60px"
            height="60px"
            top="50%"
            left="50%"
            transform={`translate(-50%, -50%) rotate(${index * 30}deg) translate(160px) rotate(${-index * 30}deg)`} // Increase the translation value
          >
            <Text fontWeight="bold">{keyInfo.note}</Text>
            <Text>Major: {keyInfo.major}</Text>
            <Text>Minor: {keyInfo.minor}</Text>
          </Box>
        ))}
      </Box>
      <Box className="circle-of-fifths-explanation" marginTop={5}>
        <Text>
          The Circle of Fifths illustrates how keys are related to one another
          and can be a powerful tool for composing and understanding music.
        </Text>
      </Box>
    </Box>
  );
};

export default CircleOfFifthsPage;