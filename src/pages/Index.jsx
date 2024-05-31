import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to ChatApp</Text>
        <Text>Login to start chatting with your friends.</Text>
        <Button colorScheme="teal" size="lg" onClick={() => navigate('/login')}>Login</Button>
      </VStack>
    </Container>
  );
};

export default Index;