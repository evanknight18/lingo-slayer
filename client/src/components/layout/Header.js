import React from 'react';
import { Box, Heading, Flex, Link as ChakraLink, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import sheetMusicImage from '../../assets/sheetmusic.jpg';


const Header = () => {
  return (
    <Box
      as="header"
      padding="1rem"
      background={`url(${sheetMusicImage}) no-repeat center/cover`} // Set the background image
    >
      <Flex justifyContent="space-between" alignItems="center" wrap="wrap">
        <Heading as="h1" size="lg">
          <ChakraLink as={Link} to="/">Music of the Spheres</ChakraLink>
        </Heading>
        <Box as="nav">
          <Flex as="ul" listStyleType="none" alignItems="center" wrap="wrap">
            <Box as="li" margin="0 0.5rem">
              <ChakraLink as={Link} to="/lessons">Lessons</ChakraLink>
            </Box>
            <Box as="li" margin="0 0.5rem">
              <ChakraLink as={Link} to="/quiz">Quiz</ChakraLink>
            </Box>
            <Box as="li" margin="0 0.5rem">
              <ChakraLink as={Link} to="/circle-of-fifths">Circle of Fifths</ChakraLink>
            </Box>
            <Box as="li" margin="0 0.5rem">
              <ChakraLink as={Link} to="/scales">Scales</ChakraLink>
            </Box>
            <Box as="li" margin="0 0.5rem">
              <ChakraLink as={Link} to="/chords">Chords</ChakraLink>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
