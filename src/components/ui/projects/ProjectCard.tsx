import type { Project } from '@/types/project'
import { Box, Card, Heading, Image, VStack, Text, HStack, Tag } from '@chakra-ui/react';

interface Props {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    return (
        <Card.Root
            key={project.id}
            overflow="hidden"
            rounded="xl"
            shadow="md"
            bg="white"
            border="1px solid"
            borderColor="gray.100"
            transition="0.25s ease"
            _hover={{ transform: "translateY(-6px)", shadow: "xl" }}
        >
            {/* Imagen */}
            <Box h="180px" overflow="hidden">
                <Image
                    src={
                        project.image_url ||
                        "https://static.vecteezy.com/system/resources/previews/054/064/649/non_2x/cartoon-octopus-programmer-at-dual-monitors-with-glasses-and-beanie-free-vector.jpg"
                    }
                    alt={project.name}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                />
            </Box>

            {/* Contenido flexible */}
            <Box display="flex" flexDirection="column" p={4} flex="1">
                <Heading size="lg" color="gray.800">
                    {project.name}
                </Heading>

                <Text fontSize="sm" color="gray.600" mt={2}>
                    {project.short_description || "No description available"}
                </Text>

                {/* Tags pegados abajo */}
                {project.project_skills && project.project_skills.length > 0 && (
                    <HStack wrap="wrap" gap={2} mt="auto" pt={8}>
                        {project.project_skills.map((skill) => (
                            <Tag.Root key={skill.id} size="sm" variant="subtle" colorScheme="blue">
                                <Tag.Label>{skill.name}</Tag.Label>
                            </Tag.Root>
                        ))}
                    </HStack>
                )}
            </Box>
        </Card.Root>
    );
}
