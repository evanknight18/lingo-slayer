import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [createUser] = useMutation(CREATE_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createUser({ variables: { ...form } });
      console.log('User created', data);
      // Redirect to login or perform auto-login here
    } catch (error) {
      console.error('Failed to register user', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
