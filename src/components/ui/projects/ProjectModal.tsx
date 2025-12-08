"use client";

import {
    Dialog,
    Box,
    Heading,
    Text,
    Image,
    HStack,
    Tag,
    CloseButton,
} from "@chakra-ui/react";
import type { Project } from "@/types/project";

interface Props {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectDialog({ project, isOpen, onClose }: Props) {
    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose} size={{ mdDown: "xl", md: "lg" }} placement="center">
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Content
                    maxW="lg"
                    p={6}
                    rounded="xl"
                    bg="bg.panel"
                    shadow="lg"
                >
                    <Dialog.CloseTrigger> 
                        <CloseButton size="sm" />
                    </Dialog.CloseTrigger>

                    <Box h="260px" overflow="hidden" mb={4} mx={8} rounded="lg">
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

                    <Heading size="lg" mb={3}>
                        {project.name}
                    </Heading>

                    <Text color="fg.muted" fontSize="md" mb={4}>
                        {project.complete_description ||
                            project.short_description ||
                            "No description available"}
                    </Text>

                    {project.project_skills && project.project_skills.length > 0 && (
                        <HStack wrap="wrap" gap={2} mt={4}>
                            {project.project_skills.map((skill) => (
                                <Tag.Root
                                    key={skill.id}
                                    size="sm"
                                    bg="bg.info"
                                    color="fg.info"
                                    borderColor="border.info"
                                    border="1px solid"
                                >
                                    <Tag.Label>{skill.name}</Tag.Label>
                                </Tag.Root>
                            ))}
                        </HStack>
                    )}
                </Dialog.Content>
            </Dialog.Positioner>
        </Dialog.Root>
    );
}
