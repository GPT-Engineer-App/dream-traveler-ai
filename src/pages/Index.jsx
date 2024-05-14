import { Container, Text, VStack, Box, Heading, IconButton, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaComments, FaClock, FaHandsHelping, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Wanderlust AI
          </Heading>
          <Text fontSize="xl">Building Your Dream Travel Experience with AI</Text>
        </Box>

        <Box>
          <Image src="https://images.unsplash.com/photo-1615826932727-ed9f182ac67e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBwbGFubmluZ3xlbnwwfHx8fDE3MTU2OTI2NDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Travel Planning" borderRadius="md" />
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Features
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaPlane} color="blue.500" />
              <Text as="span" fontWeight="bold">
                Personalized Itineraries:
              </Text>{" "}
              Tell Wanderlust AI your preferences and it crafts a unique itinerary with flights, hotels, and activities that match your desires.
            </ListItem>
            <ListItem>
              <ListIcon as={FaHotel} color="blue.500" />
              <Text as="span" fontWeight="bold">
                AI Expertise:
              </Text>{" "}
              Leveraging vast travel data, Wanderlust AI recommends the best options for flights, accommodations, and activities, ensuring an optimal travel experience.
            </ListItem>
            <ListItem>
              <ListIcon as={FaComments} color="blue.500" />
              <Text as="span" fontWeight="bold">
                Conversational Planning:
              </Text>{" "}
              Interact with Wanderlust AI through a chat platform. Simply chat about your travel dreams and it guides you every step of the way.
            </ListItem>
            <ListItem>
              <ListIcon as={FaClock} color="blue.500" />
              <Text as="span" fontWeight="bold">
                Convenience at Your Fingertips:
              </Text>{" "}
              Plan your entire trip within the chat interface. No need to jump between multiple websites and apps.
            </ListItem>
            <ListItem>
              <ListIcon as={FaHandsHelping} color="blue.500" />
              <Text as="span" fontWeight="bold">
                24/7 Support:
              </Text>{" "}
              Get travel advice and assistance from Wanderlust AI anytime, anywhere.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="blue.500" />
              <Text as="span" fontWeight="bold">
                Seamless Booking:
              </Text>{" "}
              Securely book flights and hotels directly through the chat interface with a single click.
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Benefits
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              <Text as="span" fontWeight="bold">
                Tailored Travel:
              </Text>{" "}
              Experience a vacation designed specifically for you, not a generic package tour.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              <Text as="span" fontWeight="bold">
                Expert Recommendations:
              </Text>{" "}
              Get the best suggestions based on AI analysis of vast travel data.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              <Text as="span" fontWeight="bold">
                Effortless Planning:
              </Text>{" "}
              Enjoy the convenience of planning your entire trip through a single platform.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              <Text as="span" fontWeight="bold">
                More Time for Excitement:
              </Text>{" "}
              Spend less time researching and more time dreaming about your getaway.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              <Text as="span" fontWeight="bold">
                Peace of Mind:
              </Text>{" "}
              Get round-the-clock support from Wanderlust AI throughout the planning process.
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Future Enhancements
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="purple.500" />
              <Text as="span" fontWeight="bold">
                Collaborative Planning:
              </Text>{" "}
              Integrate with messaging apps to allow group travel planning within the chat interface.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="purple.500" />
              <Text as="span" fontWeight="bold">
                Real-Time Support:
              </Text>{" "}
              Receive weather alerts, flight changes, and event recommendations during your trip, keeping you informed and adaptable.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="purple.500" />
              <Text as="span" fontWeight="bold">
                AI-Powered On-the-Go Recommendations:
              </Text>{" "}
              Utilize AI to suggest personalized activities in real-time based on your location and interests.
            </ListItem>
          </List>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Target Market
          </Heading>
          <Text>Wanderlust AI caters to travelers of all types, from busy professionals seeking a hassle-free planning experience to indecisive globetrotters who need help crafting their dream itineraries.</Text>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Conclusion
          </Heading>
          <Text>Wanderlust AI revolutionizes travel planning by offering a personalized and convenient approach through a chat-based interface. With its AI expertise and user-friendly platform, Wanderlust AI empowers you to plan the perfect trip and focus on the joy of travel.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
