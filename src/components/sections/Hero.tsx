import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  Container,
  Image,
  Stack
} from "@chakra-ui/react";
import { useState, useEffect } from 'react'

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const name = "Nicolás";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(name.slice(0, i));
      i++;
      if (i > name.length) {
        clearInterval(interval);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);


  return (
    <Box id="hero" bg="bg.body" color="fg" pt={{ base: "8", md: "20" }} scrollMarginTop={100}>
      <Container maxW="container.xl" py={{ base: "12", md: "24" }}>
        <Stack
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "center" }}
          justify="center"
          gap={{ base: 10, md: 16 }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2konV3itDBCuWfNi77cJ9CK98ebrYfmbHtA&s"
            alt="Nicolás Cáceres"
            boxSize={{ base: "180px", md: "260px" }}
            borderRadius="full"
            fit="cover"
            flexShrink={0}
          />
          <VStack gap={6} maxW="600px" >
            <Heading size={{ base: "2xl", md: "3xl" }} fontWeight="700" >
              Hola, soy{" "}
              <Text as="span" color="brand.500" fontWeight="700" borderRight="2px solid" borderColor="brand.500"animation="blinkCursor 0.7s infinite">
                {typedText}
              </Text>
              <Box as="style">
                {
                  `@keyframes blinkCursor {
                    0% { border-color: transparent; }
                    50% { border-color: currentColor; }
                    100% { border-color: transparent; }
                  }`
                }
              </Box>
            </Heading>

            <Text fontSize={{ base: "lg", md: "xl" }} opacity={0.8}>
              Full-Stack Developer especializado en construir aplicaciones modernas
              y escalables.
            </Text>

            <HStack gap={4} mt={4}>
              <Button as="a" size={{ base: "md", md: "lg" }} href="#projects">
                Ver proyectos
              </Button>
              <Button
                as="a"
                size={{ base: "md", md: "lg" }}
                variant="outline"
                href="https://drive.google.com/uc?export=download&id=12AFhPAB8sAsiJ1fICIxmxJ7kSoFc_ovX"
              >
                Descargar CV
              </Button>
            </HStack>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}
