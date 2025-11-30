import { Box, Heading, Text, Spinner, SimpleGrid, Card, Link, Image, HStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import type { Repo } from '../../types/repo';
import ReposSlider from '../ui/projects/ReposSlider';
import ProjectCard from '../ui/projects/ProjectCard';
import { projects } from '../../data/projects';

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('https://api.github.com/users/Nios-V/repos');
        const data = await res.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
      setLoading(false);
    };

    fetchRepos();
  }, []);

  return (
    <Box maxW="8xl" px={{ base: 5, md: 20 }} mx="auto" id="projects" py={10}>
      <Heading size={{ base: "2xl", md: "3xl" }} mb={3} color="fg" >
        Proyectos
      </Heading>

      <Text fontSize="lg" color="fg.muted" mb={10}>
        Una selección de mis proyectos más destacados, donde exploro diferentes tecnologías y soluciono problemas reales mediante código
      </Text>

      {loading ? (
        <Box display="flex" justifyContent="center" py={20}>
          <Spinner size="xl" />
        </Box>
      ) : (
        <>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </SimpleGrid>
          <ReposSlider repos={repos} />
        </>
      )}
    </Box>
  )
}
