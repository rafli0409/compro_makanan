import React from "react";
import { Box, Link, chakra, Image, SimpleGrid } from "@chakra-ui/react";
import ProfileDataAtass from "./ProfileGiziData";

const ProfileGizi = () => {
  return (
    <SimpleGrid
      w={{ base: "-moz-fit-content", lg: "full" }}
      justifyContent="center"
      alignItems="center"
      columns={{ base: 1, md: 2 }}
      spacing={{ base: "1", md: "3", lg: "4" }}
      p="3"
    >
      {ProfileDataAtass.map((ProfileDataAtas) => (
        <Box
          key={ProfileDataAtas.id}
          my={{ base: "3", lg: "5" }}
          bg="#F0F0F0"
          _dark={{ bg: "gray.800" }}
          mx={{ lg: 10 }}
          direction={{ base: "column", md: "row" }}
          display="flex"
          rounded={{ lg: "lg" }}
          boxShadow="lg"
          _hover={{ boxShadow: "5px 5px rgba(0, 0, 0, 0.2)" }}
        >
          <Box w={{ base: "32%", lg: "30%" }}>
            <Image
              h="100%"
              boxSize={{ base: "100%", lg: "120px" }}
              rounded={{ base: "sm", lg: "lg" }}
              borderRadius={{ base: "xl", lg: "2xl" }}
              objectFit="cover"
              m={{ lg: "5" }}
              src={ProfileDataAtas.image}
            ></Image>
          </Box>

          <Box
            py={2}
            px={{ base: "5", lg: "2" }}
            maxW={{ base: "xl", lg: "5xl" }}
          >
            <chakra.h2
              fontSize={{ base: "14px", lg: "17px" }}
              mt="4"
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
            >
              {ProfileDataAtas.title}
            </chakra.h2>
            <chakra.p
              mt={2}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              textAlign="justify"
              fontSize={{ base: "12px", lg: "15px" }}
            >
              {ProfileDataAtas.text}
            </chakra.p>

            <Box mt={4}>
              <Link href={ProfileDataAtas.url} target="_blank">
                {ProfileDataAtas.medsos}
              </Link>
            </Box>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ProfileGizi;
