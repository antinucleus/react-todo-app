import { Center, Heading } from '@chakra-ui/react';
import { LoginForm } from '../components';

export const Login = () => (
  <Center height="100vh" flexDir="column">
    <Heading>Todo App</Heading>
    <LoginForm />
  </Center>
);
