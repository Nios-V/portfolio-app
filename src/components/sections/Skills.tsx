import { Box, Heading, Text, Stack } from '@chakra-ui/react'
import SkillCloud from '../ui/skill/SkillCloud';
import skills from '../../data/skill';

export default function Skills() {
  return (
    <Box id='skills' py={10} px={{ base: 5, md: 20 }} maxW="8xl" mx="auto" >
      <Box mb={10}>
        <Heading
          size={{ base: "2xl", md: "3xl" }}
          mb={3}
          color="gray.900"
        >
          Habilidades
        </Heading>

        <Stack gap={2} color="gray.600">
          <Text fontSize="lg" color="gray.700">
            Estas son algunas de las tecnologías que utilizo en mis proyectos.
          </Text>
          <Text>
            Incluyen las herramientas que domino en profundidad y otras que sigo perfeccionando.
          </Text>
        </Stack>
      </Box>
      <SkillCloud skills={skills} />
    </Box>
  )
}
