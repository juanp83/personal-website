import { createStyles, Container, Group, ActionIcon, Title } from '@mantine/core';
import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: theme.spacing.xl * 4,
    backgroundColor: '#fff',
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('md')]: {
      marginTop:  theme.spacing.xl * 2,
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Title order={1}>Juan Portillo</Title>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <a href="https://twitter.com/JuanPDev" target="_blank" rel="noreferrer">
            <ActionIcon size="lg">
              <IconBrandTwitter size={18} stroke={1.5} />
            </ActionIcon>
          </a>
          <a href="https://www.linkedin.com/in/juanportillo/" target="_blank" rel="noreferrer">
            <ActionIcon size="lg">
              <IconBrandLinkedin size={18} stroke={1.5} />
            </ActionIcon>
          </a>
          <a href="https://github.com/juanp83" target="_blank" rel="noreferrer">
          <ActionIcon size="lg">
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
          </a>
        </Group>
      </Container>
    </div>
  );
}