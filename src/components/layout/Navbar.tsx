import { Box, Container, Flex, HStack, Link, IconButton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useColorModeValue, ColorModeButton } from '../ui/color-mode';
import { LuMenu, LuX } from 'react-icons/lu';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const bg = useColorModeValue("#ffffff99", "#17171799");
    const bgSolid = useColorModeValue("white", "bg.muted");

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const hover = {
        textDecoration: "none",
        borderBottom: "2px solid",
        borderBottomColor: "brand.600",
        transition: "all 0.1s ease",
        color: "fg"
    };

    const mobileLink = {
        fontWeight: "500",
        padding: "8px 0",
    };

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
                    <HStack gap={8}>
                        <ColorModeButton />
                        <IconButton
                            display={{ base: "flex", md: "none" }}
                            aria-label="Abrir menú"
                            variant="ghost"
                            onClick={() => setIsOpen(!isOpen)}
                            children={isOpen ? <LuX /> : <LuMenu />}
                        />
                        
                        <HStack gap={8} display={{ base: "none", md: "flex" }}>
                            <Link fontWeight="500" color="fg.muted" _hover={hover} href="#about" >Sobre mí</Link>
                            <Link fontWeight="500" color="fg.muted" _hover={hover} href="#experience">Experiencia</Link>
                            <Link fontWeight="500" color="fg.muted" _hover={hover} href="#skills">Habilidades</Link>
                            <Link fontWeight="500" color="fg.muted" _hover={hover} href="#projects">Proyectos</Link>
                            <Link fontWeight="500" color="fg.muted" _hover={hover} href="#contact">Contacto</Link>
                        </HStack>
                    </HStack>
                </Flex>

                {isOpen && (
                    <Box
                        display={{ base: "block", md: "none" }}
                        mt={4}
                        maxH={isOpen ? "300px" : "0px"}
                        overflow="hidden"
                        transition="max-height 0.35s ease"
                    >
                        <Flex direction="column" gap={4}>
                            <Link href="#about" style={mobileLink} href="#about" onClick={() => setIsOpen(false)}>Sobre mí</Link>
                            <Link href="#experience" style={mobileLink} href="#experience" onClick={() => setIsOpen(false)}>Experiencia</Link>
                            <Link href="#skills" style={mobileLink} href="#skills" onClick={() => setIsOpen(false)}>Habilidades</Link>
                            <Link href="#projects" style={mobileLink} href="#projects" onClick={() => setIsOpen(false)}>Proyectos</Link>
                            <Link href="#contact" style={mobileLink} href="#contact" onClick={() => setIsOpen(false)}>Contacto</Link>
                        </Flex>
                    </Box>
                )}
            </Container>
        </Box>
    );
}
