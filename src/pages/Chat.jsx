import { Box, Flex, Input, VStack, Text, Avatar, HStack, Heading, Spacer, IconButton } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

const Chat = () => {
  return (
    <Flex height="100vh" direction="column">
      <Flex as="nav" align="center" justify="space-between" padding="1.5rem" bg="teal.500" color="white">
        <Heading as="h1" size="lg">ChatApp</Heading>
        <IconButton icon={<FaUserCircle />} size="lg" variant="ghost" color="white" />
      </Flex>
      <Flex flex="1" overflow="hidden">
        <Box width="30%" borderRight="1px solid #e2e8f0" overflowY="auto">
          <VStack spacing={4} padding={4}>
            <HStack width="100%">
              <Avatar name="User 1" />
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">User 1</Text>
                <Text fontSize="sm" color="gray.500">Last message...</Text>
              </VStack>
            </HStack>
            <HStack width="100%">
              <Avatar name="User 2" />
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">User 2</Text>
                <Text fontSize="sm" color="gray.500">Last message...</Text>
              </VStack>
            </HStack>
          </VStack>
        </Box>
        <Flex flex="1" direction="column">
          <Box flex="1" padding={4} overflowY="auto">
            <VStack spacing={4} align="start">
              <HStack>
                <Avatar name="User 1" />
                <Box bg="gray.100" borderRadius="md" padding={2}>
                  <Text>User 1: Hello!</Text>
                </Box>
              </HStack>
              <HStack alignSelf="flex-end">
                <Box bg="teal.500" color="white" borderRadius="md" padding={2}>
                  <Text>Me: Hi there!</Text>
                </Box>
                <Avatar name="Me" />
              </HStack>
            </VStack>
          </Box>
          <Box padding={4} borderTop="1px solid #e2e8f0">
            <Input placeholder="Type a message..." size="lg" />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Chat;