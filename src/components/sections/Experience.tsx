import { Box, Heading } from '@chakra-ui/react'
import ExperienceTimeline from '../ui/experience/ExperienceTimeline';
import Experiences from '../../data/experience';

export default function Exprience() {
  return (
    <Box py={10} maxW="900px" mx="auto" id="experience">
      <Heading mb={10} textAlign="center" size={{ base: "2xl", md: "3xl" }}>Experiencia</Heading>
      <ExperienceTimeline experiences={Experiences} />
    </Box>
  )
}
