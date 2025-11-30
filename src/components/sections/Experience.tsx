import { Box, Heading } from '@chakra-ui/react'
import ExperienceTimeline from '../ui/experience/ExperienceTimeline';
import Experiences from '../../data/experience';

export default function Exprience() {
  return (
    <Box py={10} maxW="8xl" px={{ base: 5, md: 20 }} mx="auto" id="experience">
      <Heading mb={10} textAlign="start" size={{ base: "2xl", md: "3xl" }} color="fg" >Experiencia</Heading>
      <ExperienceTimeline experiences={Experiences} />
    </Box>
  )
}
