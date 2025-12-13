import { Box, Heading, Text, Stack, Flex } from "@chakra-ui/react";
import Model from "../ui/about/AboutModel";

export default function About() {
  return (
    <Box
      id="about"
      as="section"
      py={10}
      px={{ base: 5, md: 20 }}
      maxW="8xl"
      mx="auto"
      scrollMarginTop={100}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        gap={12}
      >

        <Stack
          flex={{ base: 1, md: 2 }}
          gap={6}
        >
          <Flex direction="column" gap={3}>
            <Heading
              size={{ base: "2xl", md: "3xl" }}
              color="fg"
              letterSpacing="-0.02em"
            >
              Sobre mí
            </Heading>

            <Box
              w="100px"
              h="4px"
              bg="brand.600"
              borderRadius="full"
            />
          </Flex>

          <Stack
            gap={6}
            pl={4}
            borderLeft="4px solid"
            borderColor="border"
          >

            <Text fontSize={{ base: "md", md: "lg" }} color="fg" lineHeight="1.7">
              Ingeniero en Informática con experiencia en desarrollo Full-Stack, orientado a la creación de soluciones de software prácticas, escalables y eficientes. Me apasiona el aprendizaje continuo y la mejora constante, lo que me impulsa a mantenerme actualizado en nuevas tecnologías y buenas prácticas de desarrollo.
            </Text>

            <Text fontSize={{ base: "md", md: "lg" }} color="fg" lineHeight="1.7">
              Busco contribuir en proyectos tecnológicos que representen un desafío, donde pueda aportar valor mediante la optimización de procesos, la calidad del código y la entrega de productos centrados en el usuario.
            </Text>
          </Stack>
        </Stack>


        <Box
          flex={{ base: 1, md: 1 }}
          display="flex"
          justifyContent="center"
          w="100%"
          maxW={{ md: "360px" }}
          h={{ base: "300px", md: "340px" }}
          rounded="2xl"
          overflow="hidden"
        >
          <Model />
        </Box>
      </Flex>
    </Box>
  );
}
