import React from 'react';
import {
  createStyles,
  Container,
  Title,
  Button,
  Group,
  Text,
} from '@mantine/core';
import Image from 'next/future/image';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    paddingLeft: theme.spacing.xl * 2,
    backgroundColor: '#fff',
    position: 'relative',
    borderRadius: theme.radius.sm,
    [theme.fn.smallerThan('md')]: {
      padding: theme.spacing.xl,
    },
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '65%',
      marginRight: 0,
    },
    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    position: 'absolute',
    right: '-20px',
    bottom: 0,
    [theme.fn.smallerThan('md')]: {
      width: 260,
      right: 0,
      height: 'auto',
    },
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: '#D4E1EC',
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));


export default function Hero() {
  const { classes } = useStyles();
  return (
    <Container>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
              Creative <span className={classes.highlight}>Front-End</span> <br />Software Engineer
          </Title>
          <Text color="dimmed" mt="md">
              My interests in science and technology have always influenced my hobbies in tinkering, building, exploring and learning about emerging discoveries.
          </Text> 
          <Text color="dimmed" mt="md">
              Ironically, I started my career in recruiting and HR. 🤦‍♂️ 
          </Text> 
          <Text color="dimmed" mt="md">
              Learning to code made me realize that I could merge my people focused work with my interest in tech.
              I enjoy working in a team, designing simple, elegant, responsive, and user friendly interfaces that bridge the gap between people and technology.
          </Text> 

          <Group mt={30}>
            <Link
              href={`/resume`}
              passHref
            >
              <Button radius="xl" size="md" className={classes.control}>
                Resume
              </Button>
            </Link>
            <Link
              href={`/blog`}
              passHref
            >
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                Blog
              </Button>
            </Link>
          </Group>
        </div>
          <Image 
            src={'/juan.webp'}
            width={300}
            height={537}
            priority
            className={classes.image}
            alt="Juan Portillo, Front-End Software Engineer"
          />
      </div>
    </Container>
  )
}
