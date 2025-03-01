import React from "react";
import { Box, Flex, Link, chakra, Image, SimpleGrid } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import items from "./ProjectCardData";

const App = () => {
  return (
    <SimpleGrid
      boxShadow="dark lg"
      _dark={{ bg: "#3e3e3e" }}
      p="10"
      w="100%"
      // flexDirection="column"
      columns={{ base: 1, md: 2, lg: 1 }}
      spacing={{ base: "1", md: "3" }}
      alignItems="center"
      justifyContent="center"
      justifyItems="center"
    >
      {items.map((item) => (
        <Box
          my="8"
          key={item.id}
          bg="white"
          boxShadow="xl"
          _dark={{ bg: "gray.800" }}
          mx={{ lg: 8 }}
          display={{ lg: "flex" }}
          maxW={{ lg: "5xl" }}
          // shadow={{ lg: "lg" }}
          rounded={{ lg: "3xl" }}
        >
          <Box w={{ lg: "40%" }}>
            <Image
              h="full"
              boxSize="100%"
              rounded={{ lg: "3xl" }}
              objectFit="cover"
              src={item.image_url}
            ></Image>
          </Box>

          <Box
            py={12}
            px={8}
            maxW={{ base: "xl", md: "3xl", lg: "5xl" }}
            w={{ lg: "60%" }}
          >
            <chakra.h2
              fontSize={{ base: "xl justify", md: "2xl" }}
              _dark={{ color: "white" }}
              fontWeight="bold"
            >
              {item.title}
            </chakra.h2>
            <chakra.p mt={4} color="gray.600" _dark={{ color: "gray.400" }}>
              {item.text}
            </chakra.p>
            <Box mt={8}>
              <RouterLink to={item.url}>
                <Link
                  href={item.url}
                  target="_blank"
                  bg="#9DA52D"
                  color="white"
                  px={5}
                  py={3}
                  rounded="lg"
                  _hover={{
                    bg: "#eeff04",
                    color: "black",
                    fontStyle: "oblique",
                  }}
                >
                  Selengkapnya
                </Link>
              </RouterLink>
            </Box>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default App;
