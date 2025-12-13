import type { Experience } from '@/types/experience';
import { Timeline, Text, Box, useBreakpointValue } from '@chakra-ui/react';
import { LuBriefcase, LuGraduationCap, LuHeart } from 'react-icons/lu';
import moment from 'moment';

interface Props {
    experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: Props) {
    return (
        <Timeline.Root
            maxW="800px"
            mx="auto"
            gap={8}
            size="xl"
        >
            {experiences.sort((a, b) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime()).map((exp) => (
                <Timeline.Item key={exp.id}>
                    <Timeline.Content width="auto">
                        <Timeline.Title whiteSpace="nowrap" fontSize="sm" fontWeight="500" >
                            {moment(exp.start_date).format("MMM YYYY")} 
                            {useBreakpointValue({ base: <><br /></>, md: ' - ' })} 
                            {exp.end_date ? moment(exp.end_date).format("MMM YYYY") : 'Presente'}
                        </Timeline.Title>
                    </Timeline.Content>
                    <Timeline.Connector>
                        <Timeline.Separator />
                        <Timeline.Indicator
                            bg="brand.800"
                            color="fg"
                        >
                            {exp.type === 'Laboral' && <LuBriefcase size={18} />}
                            {exp.type === 'Académica' && <LuGraduationCap size={18} />}
                            {exp.type === 'Voluntariado' && <LuHeart size={18} />}
                        </Timeline.Indicator>

                    </Timeline.Connector>

                    <Timeline.Content>
                        <Timeline.Title fontWeight="600" fontSize="lg" color="fg">
                            {exp.position ? `${exp.position} - ` : ""}
                            {exp.company_name}
                        </Timeline.Title>

                        <Timeline.Description textStyle="sm" color="fg.muted" >
                            {exp.goals && exp.goals.length && (
                                <Box mt={2}>
                                    <ul style={{ paddingLeft: "20px" }}>
                                        {exp.goals.map((goal) => (
                                            <li key={goal.id} style={{ marginTop: "6px" }}>
                                                <Text textStyle="sm">
                                                    {goal.description || "Descripción no disponible"}
                                                </Text>
                                            </li>
                                        ))}
                                    </ul>
                                </Box>
                            )}
                        </Timeline.Description>

                    </Timeline.Content>
                </Timeline.Item>
            ))}
        </Timeline.Root>
    )
}
