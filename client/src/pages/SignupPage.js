import React, { useState } from 'react';
import { Link, Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { CREATE_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ username: '', email: '', password: ''  });
  const [createUser, {error, data}] = useMutation(CREATE_USER);

//   console.log(error);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
        const { data } = await createUser({
          variables: { ...formState },
        });
        Auth.login(data.createUser.token);
      } catch (e) {
        console.error(e);
      }
    };




  return (
    <Box className="container" p={4}>
      <Link to="/login">← Go to Login</Link>

      <Box as="h2" fontSize="lg" my={2}>
        Signup
      </Box>
      <form onSubmit={handleFormSubmit}>
        <VStack spacing={3}>
          <FormControl>
            <FormLabel htmlFor="username">User Name:</FormLabel>
            <Input
              placeholder="username"
              name="username"
              type="text"
              id="username"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input
              placeholder="email"
              name="email"
              type="text"
              id="email"
              onChange={handleChange}
            />
          </FormControl>   
          <FormControl>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <Input
              placeholder="password"
              name="password"
              type="text"
              id="password"
              onChange={handleChange}
            />
          </FormControl>       
          <Button type="submit">Submit</Button>
        </VStack>
      </form>
    </Box>
  );
}

export default Signup;
