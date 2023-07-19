import React, { useEffect, useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Title, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  header: {
    marginBottom:  theme.spacing.xl * 4,
    [theme.fn.smallerThan('md')]: {
      marginBottom:  theme.spacing.xl * 2,
    },
  },

  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface SimpleHeaderProps {
    links: { link: string; label: string }[];
}

export default function SimpleHeader({ links }: SimpleHeaderProps) {
  const { pathname } = useRouter()
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  useEffect(() => {
    setActive(pathname)
  }, [pathname])

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      passHref
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
        onClick={() => setActive(link.link)}
    >
        {link.label}
    </Link>
  ));

  return (
    <Header height={60} className={classes.header}>
      <Container className={classes.headerContainer}>
        <Title order={1}>Juan Portillo</Title>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Menu shadow="md" width={200} opened={opened}>
          <Menu.Target>
            <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
          </Menu.Target>

          <Menu.Dropdown>
            {items}
          </Menu.Dropdown>
        </Menu>
        
      </Container>
    </Header>
  );
}