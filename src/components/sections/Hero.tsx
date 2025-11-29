import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  Container,
  Image
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box id="hero" bg="bg.body" color="text.body" pt={{ base: "8", md: "20" }}>
      <Container maxW="container.md" py={{ base: "12", md: "24" }}>
        <HStack justify="center" gap={12}>
          <Image 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2konV3itDBCuWfNi77cJ9CK98ebrYfmbHtA&s"
            alt="Nicolás Cáceres"
            boxSize="250px"
            borderRadius="full"
            fit="cover"
          />
          <VStack gap={6} textAlign="center">
            <Heading
              size="3xl"
              fontWeight="700"
              lineHeight="1.1"
            >
              Hola, soy <Text as="span" color="brand.500">Nicolás</Text>
            </Heading>

            <Text fontSize="xl" opacity={0.8} maxW="600px">
              Full-Stack Developer especializado en construir aplicaciones modernas y escalables.
            </Text>

            <HStack gap={4} mt={4}>
              <Button as="a" size="lg" href="#projects">Ver proyectos</Button>
              <Button size="lg" variant="outline">
                Descargar CV
              </Button>
            </HStack>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
}
