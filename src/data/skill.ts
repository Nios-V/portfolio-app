import type { Skill } from '../types/skill';

const skills: Skill[] = [
    {
        id: 'a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d',
        name: 'JavaScript',
        icon_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        experience_level: 'Avanzado',
        is_core: true
    },
    {
        id: 'b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e',
        name: 'TypeScript',
        icon_url: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/5/typescript-icon-round-to2r7ctaodkd8o2drz0wsr.png/typescript-icon-round-1v1u40zhwzqebjcth7f50p.png?_a=DATAg1AAZAA0',
        experience_level: 'Avanzado',
        is_core: true
    },
    {
        id: 'c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f',
        name: 'React',
        icon_url: 'data:image/png;base64,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',
        experience_level: 'Avanzado',
        is_core: true
    },
    {
        id: 'd4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a',
        name: 'Node.js',
        icon_url: 'https://images.icon-icons.com/2699/PNG/512/nodejs_logo_icon_169910.png',
        experience_level: 'Avanzado',
        is_core: true
    },
    {
        id: 'e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8a9b',
        name: 'HTML',
        icon_url: 'https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png',
        experience_level: 'Avanzado',
        is_core: true
    },
    {
        id: 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c',
        name: 'CSS',
        icon_url: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        experience_level: 'Avanzado',
        is_core: true
    },
    {
        id: 'a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d',
        name: 'Git',
        icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png',
        experience_level: 'Intermedio',
        is_core: false
    },
    {
        id: 'b8c9d0e1-f2a3-4b4c-5d6e-7f8a9b0c1d2e',
        name: 'Python',
        icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png',
        experience_level: 'Intermedio',
        is_core: true
    },
    {
        id: 'e5f06cd4-a1be-485d-97f0-2cdcf80662de',
        name: 'Django',
        icon_url: 'https://www.svgrepo.com/show/353657/django-icon.svg',
        experience_level: 'Intermedio',
        is_core: false
    },
    {
        id: '5df2326f-8041-49ca-85be-31e007f670db',
        name: 'Flask',
        icon_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD38KsMgEwahtWc_Nfs5ZVktP9dBc36MUZA&s',
        experience_level: 'Intermedio',
        is_core: false
    },
    {
        id: 'a1d1c614-f11a-463e-914b-65443b5d1f4b',
        name: 'FastAPI',
        icon_url: 'https://cdn.worldvectorlogo.com/logos/fastapi.svg',
        experience_level: 'Básico',
        is_core: false
    },
    {
        id: 'c9d0e1f2-a3b4-4c5d-6e7f-8a9b0c1d2e3f',
        name: 'PostgreSQL',
        icon_url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
        experience_level: 'Intermedio',
        is_core: true
    },
    {
        id: 'c9d0e1f2-a3b4-4c5d-6e7f-8a9b0c1d2e3f',
        name: 'MySQL',
        icon_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb9eimO5lZLpyM-qYudMVu6KTPj4U2RL715g&s',
        experience_level: 'Intermedio',
        is_core: false
    },
    {
        id: 'd0e1f2a3-b4c5-4d6e-7f8a-9b0c1d2e3f4a',
        name: 'Docker',
        icon_url: 'https://www.stackhero.io/assets/src/images/servicesLogos/openGraphVersions/docker.png?d87f4381',
        experience_level: 'Básico',
        is_core: false
    },
    {
        id: 'e1f2a3b4-c5d6-4e7f-8a9b-0c1d2e3f4a5b',
        name: 'NestJS',
        icon_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg',
        experience_level: 'Intermedio',
        is_core: true
    },
    {
        id: 'f2a3b4c5-d6e7-4f8a-9b0c-1d2e3f4a5b6c',
        name: 'Next.js',
        icon_url: 'https://logo.svgcdn.com/devicon-plain/nextjs-plain.png',
        experience_level: 'Intermedio',
        is_core: false
    },
    {
        id: 'a3b4c5d6-e7f8-4a9b-0c1d-2e3f4a5b6c7d',
        name: 'MongoDB',
        icon_url: 'https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg',
        experience_level: 'Intermedio',
        is_core: true
    },
    {
        id: 'b4c5d6e7-f8a9-4b0c-1d2e-3f4a5b6c7d8e',
        name: 'Redis',
        icon_url: 'https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png',
        experience_level: 'Intermedio',
        is_core: false
    },
    {
        id: 'c5d6e7f8-a9b0-4c1d-2e3f-4a5b6c7d8e9f',
        name: 'Java',
        icon_url: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
        experience_level: 'Intermedio',
        is_core: false
    },
    {
        id: 'd6e7f8a9-b0c1-4d2e-3f4a-5b6c7d8e9f0a',
        name: 'Spring Boot',
        icon_url: 'https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/spring-boot-logo-icon-hd.png',
        experience_level: 'Básico',
        is_core: false
    },
    {
        id: '029c02d3-160c-4a5c-bc2a-6420b57a7e8d',
        name: 'Go',
        icon_url: 'https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png',
        experience_level: 'Intermedio',
        is_core: false
    }
];

export default skills;