import {
  Box,
  Container,
  Heading,
  Text,
  HStack,
  IconButton,
  Button,
  VStack,
} from "@chakra-ui/react";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

export default function Contact() {
  const email = "mailto:niosv.1104@gmail.com?subject=He%20visto%20tu%20portafolio";

  return (
    <Box
      id="contact"
      py={10}
      bg="bg.body"
      position="relative"
    >

      <Container maxW="lg" textAlign="center" position="relative" zIndex={1}>
        <VStack gap={8}>
          <Box position="relative">
            <Heading size="2xl" fontWeight="700">
              Construyamos algo juntos
            </Heading>

            <Box
              position="absolute"
              top="-6px"
              right="-14px"
              w="10px"
              h="10px"
              bg="brand.500"
              rounded="full"
              className="ping-dot"
            />
          </Box>

          <Text color="text.body" fontSize="lg" maxW="400px">
            No dudes en contactarme si quieres colaborar, charlar o simplemente saludar.
          </Text>

          <HStack gap={6}>
            <IconButton
              aria-label="GitHub"
              size="lg"
              variant="ghost"
              rounded="full"
              _hover={{ transform: "scale(1.15)", bg: "brand.300" }}
              as="a"
              href="https://github.com/Nios-V"
              target="_blank"
            >
              <LuGithub size={26} />
            </IconButton>

            <IconButton
              aria-label="LinkedIn"
              size="lg"
              variant="ghost"
              rounded="full"
              _hover={{ transform: "scale(1.15)", bg: "brand.300" }}
              as="a"
              href="https://linkedin.com/in/ni"
              target="_blank"
            >
              <LuLinkedin size={26} />
            </IconButton>
          </HStack>

          <Button
            as="a"
            href={email}
            size="lg"
            px={10}
            fontWeight="600"
            display="flex"
            alignItems="center"
            gap={3}
            bg="brand.500"
            _hover={{ bg: "brand.600", transform: "scale(1.03)" }}
          >
            <LuMail size={20} />
            Enviame un correo
          </Button>
        </VStack>
      </Container>

      <style>{`
        .ping-dot {
          animation: ping 1.5s infinite;
        }

        @keyframes ping {
          0% { transform: scale(0.8); opacity: 1; }
          80% { transform: scale(1.8); opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>
    </Box>
  );
}
