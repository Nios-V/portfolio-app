import type { Experience } from "@/types/experience";

const experiences: Experience[] = [
    {
        "id": "7cfee267-ea74-423c-8185-ef3ad6444ece",
        "profile_id": "3b9e6193-6259-409c-82cc-157999e77a26",
        "type": "Académica",
        "company_name": "INACAP",
        "position": "Ingeniería en Informática",
        "start_date": "2019-03-01",
        "end_date": "2023-12-01",
        "order": 1,
        "goals": [
            {
                "id": "a1f5d6e2-4c3b-4f7e-9f3e-2c8b6e5f9c1d",
                "profile_id": "3b9e6193-6259-409c-82cc-157999e77a26",
                "description": "Adquirí conocimientos fundamentales en desarrollo de software, bases de datos y arquitectura de sistemas",
                "order": 1
            },
            {
                "id": "a1f5d6e2-4c3b-4f7e-9f3e-2c8b6e5f9c1e",
                "profile_id": "3b9e6193-6259-409c-82cc-157999e77a26",
                "description": "Desarrollé habilidades de análisis y resolución de problemas mediante proyectos prácticos",
                "order": 2
            }
        ]
    },
    {
        "id": "7f755110-7acb-485c-ad41-092c8d3591f6",
        "profile_id": "3b9e6193-6259-409c-82cc-157999e77a26",
        "type": "Laboral",
        "company_name": "Hospital Barros Luco Trudeau",
        "position": "Practicante",
        "start_date": "2024-02-01",
        "end_date": "2024-04-01",
        "order": 2,
        "goals": [
            {
                "id": "36c8a6fc-2269-4d6f-840a-cc7e6ac98d01",
                "profile_id": "3b9e6193-6259-409c-82cc-157999e77a26",
                "description": "Colaboré en el levantamiento de requerimientos para el desarrollo de sistemas internos, interactuando con diferentes áreas del hospital",
                "order": 1
            },
            {
                "id": "36c8a6fc-2269-4d6f-840a-cc7e6ac98d02",
                "profile_id": "3b9e6193-6259-409c-82cc-157999e77a26",
                "description": "Implementé soluciones tecnológicas para optimizar procesos administrativos y comunicación interna del área de salud",
                "order": 2
            }
        ]
    },
    {
        "id": "5befbddd-c64c-4041-9233-01467c5c67bf",
        "profile_id": "3b9e6193-6259-409c-82cc-157999e77a26",
        "type": "Laboral",
        "company_name": "Megamedia",
        "position": "Analista programador",
        "start_date": "2024-06-03",
        "order": 3,
        "goals": [
            {
                "id": "d6d37a04-30ce-4788-95f5-e9b4899af181",
                "profile_id": "3b9e6193-6259-409c-82cc-157999e77a26",
                "description": "Desarrollé y mantuve funcionalidades críticas del sistema de pagos, asegurando estabilidad, rendimiento y escalabilidad",
                "order": 1
            },
            {
                "id": "d6d37a04-30ce-4788-95f5-e9b4899af182",
                "profile_id": "3b9e6193-6259-409c-82cc-157999e77a26",
                "description": "Implementé mejoras en la arquitectura del servicio de suscripciones para optimizar flujos de cobro y reducir errores en producción",
                "order": 2
            },
            {
                "id": "d6d37a04-30ce-4788-95f5-e9b4899af183",
                "profile_id": "3b9e6193-6259-409c-82cc-157999e77a26",
                "description": "Gestioné y resolví tickets técnicos relacionados a suscripciones y pagos, garantizando soporte oportuno y mejoras continuas en la experiencia del usuario",
                "order": 3
            }
        ]
    }
];

export default experiences;