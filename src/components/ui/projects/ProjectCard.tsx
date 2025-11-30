import type { Project } from '@/types/project'
import { Box, Card, Heading, Image, Text, HStack, Tag } from '@chakra-ui/react';
import { useState } from 'react';
import ProjectModal from '../../ui/projects/ProjectModal';

interface Props {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Card.Root
                key={project.id}
                onClick={() => setOpen(true)}
                overflow="hidden"
                rounded="xl"
                shadow="md"
                bg="bg.panel"
                border="1px solid"
                borderColor="border.subtle"
                transition="0.25s ease"
                _hover={{ transform: "translateY(-6px)", shadow: "xl" }}
            >
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

                <Box display="flex" flexDirection="column" p={4} flex="1">
                    <Heading size="lg" color="fg">
                        {project.name}
                    </Heading>

                    <Text fontSize="sm" color="fg.muted" mt={2}>
                        {project.short_description || "No description available"}
                    </Text>

                    {project.project_skills && project.project_skills.length > 0 && (
                        <HStack wrap="wrap" gap={2} mt="auto" pt={8}>
                            {project.project_skills.map((skill) => (
                                <Tag.Root key={skill.id} size="sm" bg="bg.info" color="fg.info" borderColor="border.info" border="1px solid">
                                    <Tag.Label>{skill.name}</Tag.Label>
                                </Tag.Root>
                            ))}
                        </HStack>
                    )}
                </Box>
            </Card.Root>
            <ProjectModal project={project} isOpen={open} onClose={() => setOpen(false)} />
        </>
    );
}
