import { Box, Flex, Heading, IconButton, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Chat = ({ username }) => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [message, setMessage] = useState("");
  const [conversations, setConversations] = useState([
    { id: 1, name: "John Doe", messages: ["Hello!", "How are you?"] },
    { id: 2, name: "Jane Smith", messages: ["Hi!", "What's up?"] },
  ]);

  const handleSendMessage = () => {
    if (message.trim() && selectedConversation !== null) {
      const updatedConversations = conversations.map((conv) => {
        if (conv.id === selectedConversation.id) {
          return { ...conv, messages: [...conv.messages, message] };
        }
        return conv;
      });
      setConversations(updatedConversations);
      setMessage("");
    }
  };

  return (
    <Flex height="100vh" direction="column">
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ChatApp</Heading>
        <Flex alignItems="center">
          <Text mr={2}>{username}</Text>
          <IconButton icon={<FaUserCircle />} isRound size="lg" />
        </Flex>
      </Flex>
      <Flex flex="1" overflow="hidden">
        <Box w="30%" bg="gray.100" p={4} overflowY="auto">
          <VStack spacing={4} align="stretch">
            {conversations.map((conv) => (
              <Box
                key={conv.id}
                p={4}
                bg={selectedConversation?.id === conv.id ? "blue.100" : "white"}
                borderRadius="md"
                cursor="pointer"
                onClick={() => setSelectedConversation(conv)}
              >
                <Text fontWeight="bold">{conv.name}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
        <Flex flex="1" direction="column" p={4} bg="white">
          <Box flex="1" overflowY="auto" mb={4}>
            {selectedConversation ? (
              <VStack spacing={4} align="stretch">
                {selectedConversation.messages.map((msg, index) => (
                  <Box key={index} p={4} bg="gray.100" borderRadius="md">
                    {msg}
                  </Box>
                ))}
              </VStack>
            ) : (
              <Text>Select a conversation to start chatting</Text>
            )}
          </Box>
          <Flex>
            <Input
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <Button colorScheme="blue" onClick={handleSendMessage} ml={2}>
              Send
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Chat;