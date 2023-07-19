import {
    createStyles,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    Image,
  } from '@mantine/core';
import Link from 'next/link';
  
  const projects = {
        professional: [
            {
              title: 'Discovery Genie App',
              url: 'https://app.discoverygenie.com',
              description: 'Discovery Genie is a cloud-native SaaS platform aimed at lawyers and paralegals involved in litigation. The web application allows litigation professionals to produce and index electronic documents and email archives for discovery with maximum efficiency and minimum expense.',
              technologies: 'Typescript, React, React Router, Material UI, Emotion, React Hook Form, React Testing Library, Stripe',
              // image: {src: '/icons/js-icon.png', alt: 'Javascript Icon'},
            },
            {
              title: 'Discovery Genie Website',
              url: 'https://www.discoverygenie.com',
              description: 'The Discovery Genie website is the entry point for users. This website is where all Discovery Genie marketing efforts point. Within the website users are able to schedule a demo of the app, sign up, and learn everything they need to know to decide whether Discovery Genie is a goot fit for their practice.',
              // image: {src: '/icons/js-icon.png', alt: 'Javascript Icon'},
            },
            {
              title: 'Support Genie App',
              url: null,
              description: "Support Genie is an app designed to streamline administrative and support tasks as well as provide useful analytics for the Discovery Genie app. Support Genie allows seamless user, firm, case, and document set administration. Whether it's managing user permissions, tracking case progress, or troubleshooting support tickets, Support Genie simplifies the entire process.",
              technologies: 'React, React Router, Material UI, Styled Components, Stripe, React Testing Library',
              // image: {src: '/icons/js-icon.png', alt: 'Javascript Icon'},
            },
            
        ],
        personal: [
            {
              title: 'Personal Website',
              url: 'https://www.juanportillo.dev',
              description: 'Discovery Genie is a cloud-native SaaS platform aimed at lawyers and paralegals involved in litigation. The web application allows litigation professionals to produce and index electronic documents and email archives for discovery with maximum efficiency and minimum expense.',
              technologies: 'Next.js, React, Typescript, Mantine, Emotion',
              // image: {src: '/icons/js-icon.png', alt: 'Javascript Icon'},
            }, 
        ]
    }
  
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: 34,
      fontWeight: 900,
      color: '#fff',
      [theme.fn.smallerThan('sm')]: {
        fontSize: 24,
      },
    },
    subTitle: {
      fontSize: 26,
      fontWeight: 700,
      color: '#fff',
      [theme.fn.smallerThan('sm')]: {
        fontSize: 20,
      },
    },
  
    description: {
      maxWidth: 600,
      margin: 'auto',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: 45,
        height: 2,
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  
    card: {
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    cardTitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: 45,
        height: 2,
        marginTop: theme.spacing.sm,
      },
    },

    container: {
        marginTop:  theme.spacing.xl * 4,
        marginBottom:  theme.spacing.xl * 4,
        [theme.fn.smallerThan('md')]: {
          marginTop:  theme.spacing.xl * 2,
          marginBottom:  theme.spacing.xl * 2,
        },
    }
  }));
  
  export default function Projects() {
    const { classes, theme } = useStyles();
    const professionalProjects = projects.professional.map((project) => (
      <Card key={project.title} shadow="md" radius="md" className={classes.card} p="xl">
        {/* <div style={{ display: 'flex' }}>
            <Image src={project.image.src} width={50} style={{marginRight: '.5em'}} alt={project.image.alt} />
        </div> */}
        <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
          {project.title}
        </Text>
        <Text size="sm" mt="sm">
          {project.description}
        </Text>
      </Card>
    ));
    const personalProjects = projects.personal.map((project) => (
      <Card key={project.title} shadow="md" radius="md" className={classes.card} p="xl">
        <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
          {project.title}
        </Text>
        <Text size="sm" mt="sm">
          {project.description}
        </Text>
      </Card>
    ));
    return (
      <Container size="lg" py="xl" className={classes.container}>
  
        <Title order={2} className={classes.title} align="center" mt="sm">
          Projects
        </Title>

        <Title order={2} className={classes.subTitle} align="left" mt="sm">
          Professional
        </Title>
  
        <SimpleGrid cols={3} spacing="xl" mt={25} breakpoints={[{ maxWidth: 'sm', cols: 1 }, { maxWidth: 'md', cols: 2 }]}>
          {professionalProjects}
        </SimpleGrid>
        <Title order={2} className={classes.subTitle} align="left" mt="sm">
          Personal & Learning
        </Title>
        <SimpleGrid cols={3} spacing="xl" mt={25} breakpoints={[{ maxWidth: 'sm', cols: 1 }, { maxWidth: 'md', cols: 2 }]}>
          {personalProjects}
        </SimpleGrid>
      </Container>
    );
  }