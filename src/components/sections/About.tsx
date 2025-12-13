import { Box, Container, Heading, Text, Stack, Image, Flex } from "@chakra-ui/react";

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
        <Stack flex="1" gap={6}>
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

        <Box flex="1" display="flex" justifyContent="center">
          <Image
            src="https://i.imgur.com/8c3NaCB.jpg"
            alt="Gato programando brigido"
            rounded="2xl"
            shadow="lg"
            objectFit="cover"
            w={{ base: "100%", md: "420px" }}
            h={{ base: "260px", md: "340px" }}
          />
        </Box>
      </Flex>
    </Box>
  );
}
