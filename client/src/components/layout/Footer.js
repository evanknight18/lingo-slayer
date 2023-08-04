import React from 'react';
import { Box, Text, Link, Flex, List, ListItem } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" padding="1rem" background="gray.200" textAlign="center">
      <Text mb="1rem">&copy; {new Date().getFullYear()} Music of the Spheres</Text>
      <List display="flex" justifyContent="center" alignItems="center" wrap="wrap">
        <ListItem margin="0 0.5rem">
          <Link href="/terms-of-service">Terms of Service</Link>
        </ListItem>
        <ListItem margin="0 0.5rem">
          <Link href="/privacy-policy">Privacy Policy</Link>
        </ListItem>
        <ListItem margin="0 0.5rem">
          <Link href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
            Facebook
          </Link>
        </ListItem>
        <ListItem margin="0 0.5rem">
          <Link href="https://www.twitter.com/YourPage" target="_blank" rel="noopener noreferrer">
            Twitter
          </Link>
        </ListItem>
        {/* Add other links as needed */}
      </List>
    </Box>
  );
};

export default Footer;
