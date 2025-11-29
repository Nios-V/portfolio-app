import { Box, Container, Flex, HStack, Link, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { useColorModeValue } from '../ui/color-mode';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    const bg = useColorModeValue("#ffffff99", "#17171799");
    const bgSolid = useColorModeValue("white", "gray.800");

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Box
            as="nav"
            py={4}
            w="100%"
            backdropBlur="blur(12px)"
            transition="all 0.3s ease"
            bg={scrolled ? bgSolid : bg}
            borderBottomWidth={scrolled ? "1px" : "0px"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            position="fixed"
            top={0}
            zIndex={20}
        >
            <Container maxW="6xl" py={4}>
                <Flex align="center" justify="space-between">
                    <Link fontWeight="700" fontSize="xl" href='#hero' _hover={{ textDecoration: "none" }} color="inherit">
                        Nicolás Cáceres
                    </Link>
                    <HStack gap={8} display={{ base: "none", md: "flex" }}>
                        <Link fontWeight="500" color="gray.600" _hover={{ textDecoration: "none", borderBottom: "2px solid", borderBottomColor: "brand.600", transition: "all 0.1s ease" }} href="#about">Sobre mí</Link>
                        <Link fontWeight="500" color="gray.600"  _hover={{ textDecoration: "none", borderBottom: "2px solid", borderBottomColor: "brand.600", transition: "all 0.1s ease" }} href="#experience">Experiencia</Link>
                        <Link fontWeight="500" color="gray.600" _hover={{ textDecoration: "none", borderBottom: "2px solid", borderBottomColor: "brand.600", transition: "all 0.1s ease" }} href="#skills">Habilidades</Link>
                        <Link fontWeight="500" color="gray.600" _hover={{ textDecoration: "none", borderBottom: "2px solid", borderBottomColor: "brand.600", transition: "all 0.1s ease" }} href="#projects">Proyectos</Link>
                        <Link fontWeight="500" color="gray.600" _hover={{ textDecoration: "none", borderBottom: "2px solid", borderBottomColor: "brand.600", transition: "all 0.1s ease" }} href="#contact">Contacto</Link>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    )
}
