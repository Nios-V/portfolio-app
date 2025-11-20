import type { Repo } from "@/types/repo";
import { Box, Link, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

interface Props {
    repos: Repo[];
}

export default function ReposSlider({ repos }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState(0);

    // Duplicamos el arreglo para lograr el efecto infinito
    const duplicated = [...repos, ...repos];

    useEffect(() => {
        if (contentRef.current) {
            setContentWidth(contentRef.current.scrollWidth / 2); // ancho real de la primera mitad
        }
    }, [repos]);

    return (
        <Box mt={10} py={4} overflow="hidden"
            style={{
                maskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
        >
            <Text color="gray.400" textAlign="center" mb={6} fontSize="sm">
                Además de eso me enfoco en el aprendizaje continuo, aplicando nuevas tecnologías en proyectos personales
            </Text>
            <Box
                ref={contentRef}
                display="flex"
                gap={6}
                style={{
                    transform: `translateX(0)`,
                    whiteSpace: "nowrap",
                    animation: contentWidth
                        ? `slide ${contentWidth / 100}s linear infinite`
                        : "none",
                }}
                _hover={{ animationPlayState: "paused" }}
            >
                {duplicated.map((repo, index) => (
                    <Box
                        key={index}
                        minW="260px"
                        px={4}
                        py={3}
                        rounded="lg"
                        border="1px solid"
                        borderColor="gray.200"
                        bg="white"
                        boxShadow="sm"
                        _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
                        transition="0.2s ease"
                    >
                        <Link
                            href={repo.html_url}
                            display="flex"
                            flexDirection="column"
                            height="100%"
                            _hover={{ textDecoration: "none" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Text fontWeight="semibold" color="gray.800" mb={2}>
                                {repo.name.charAt(0).toUpperCase() + repo.name.slice(1)}
                            </Text>
                            <Text fontSize="sm" color="gray.600">
                                {repo.description || "No description available"}
                            </Text>
                            <Text mt="auto" fontSize="xs" color="brand.700" alignSelf="flex-end">
                                {repo.language}
                            </Text>
                        </Link>
                    </Box>
                ))}
            </Box>

            {/* Animación generada dinámicamente */}
            <Box as="style">
                {`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${contentWidth}px); }
        }
      `}
            </Box>
        </Box>
    );
}
