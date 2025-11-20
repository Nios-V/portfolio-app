import type { Skill } from "@/types/skill";
import { Avatar, Box, Tag, Wrap, WrapItem, HoverCard, Icon, Text } from "@chakra-ui/react";
import { TbAntennaBars3, TbAntennaBars4, TbAntennaBars5 } from "react-icons/tb";
interface Props {
    skills: Skill[];
}

export default function SkillCloud({ skills }: Props) {
    const getLevelIcon = (level?: Skill["experience_level"]) => {
        switch (level) {
            case "Intermedio":
                return <Icon as={TbAntennaBars4} boxSize={6} color="brand.500" />;
            case "Avanzado":
                return <Icon as={TbAntennaBars5} boxSize={6} color="brand.500" />;
            case "Básico":
                return <Icon as={TbAntennaBars3} boxSize={6} color="brand.500" />;
            default:
                return <Icon as={TbAntennaBars3} boxSize={6} color="brand.500" />;
        }
    };

    return (
        <Box maxW="900px" mx="auto" >
            <Text fontSize="sm" color="gray.400" textAlign="center" mb={4} >
                Pasa el cursor sobre cada skill para ver mi nivel de experiencia
            </Text>
            <Wrap justify="center">
                {skills.map((skill) => (
                    <WrapItem key={skill.id}>
                        <HoverCard.Root openDelay={120} closeDelay={120}>
                            <HoverCard.Trigger>
                                <Tag.Root
                                    key={skill.id}
                                    size="xl"
                                    bg={skill.is_core ? "gray.300" : ""}
                                    color={skill.is_core ? "black" : "gray.800"}
                                    variant={skill.is_core ? "solid" : "outline"}
                                    rounded="full"
                                    boxShadow="sm"
                                    cursor="default"
                                    role="group"
                                    _hover={{
                                        transform: "scale(1.05)",
                                        transition: "0.15s ease"
                                    }}
                                    display="flex"
                                    alignItems="center"
                                    gap={2}
                                >
                                    <Tag.StartElement>
                                        <Avatar.Root
                                            size="full"
                                            alignItems="center"
                                            _hover={{ "& img": { filter: "grayscale(0%)" } }}
                                            justifyContent="center"
                                        >
                                            <Avatar.Image
                                                src={skill.icon_url}
                                                filter="grayscale(100%)"
                                                objectFit="contain"
                                                transition="filter 0.2s ease"
                                                bg="white"
                                            />
                                            <Avatar.Fallback>{skill.name.charAt(0)}</Avatar.Fallback>
                                        </Avatar.Root>
                                    </Tag.StartElement>
                                    <Tag.Label>{skill.name}</Tag.Label>
                                </Tag.Root>
                            </HoverCard.Trigger>

                            <HoverCard.Positioner>
                                <HoverCard.Content bg="gray.800" color="white" boxShadow="lg" rounded="md" p={4} textAlign="center">

                                    <Box maxW="200px" textAlign="center" fontSize="sm">
                                        {getLevelIcon(skill.experience_level)} {skill.experience_level}
                                    </Box>
                                </HoverCard.Content>
                            </HoverCard.Positioner>
                        </HoverCard.Root>
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    )
}
