
import React from 'react'
import Post from '../../interfaces/post'
import {
    Card,
    Image,
    Text,
    createStyles,
    Container,
    SimpleGrid
  } from '@mantine/core'
import DateFormatter from '../DateFormatter';
import Link from 'next/link';

  const useStyles = createStyles((theme) => ({
    card: {
      position: 'relative',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },
  
    rating: {
      position: 'absolute',
      top: theme.spacing.xs,
      right: theme.spacing.xs + 2,
      pointerEvents: 'none',
    },
  
    title: {
      display: 'block',
      marginTop: theme.spacing.md,
    },

    excerpt: {
      marginTop: theme.spacing.xs / 2,
    },
  
    footer: {
      marginTop: theme.spacing.md,
    },
  }));


export default function MorePosts({ posts }: {posts: Post[]}) {
    const { classes, cx } = useStyles();
    
    const cards = posts.map((post) => (
      <Link
        as={`/posts/${post.slug}`}
        href="/posts/[slug]"
        key={post.title}
      >
        <Card  withBorder radius="md" className={cx(classes.card)}>
            <Card.Section>
                <Image src={post.coverImage} height={180} alt="cover image" />
            </Card.Section>
            <Text className={classes.title} weight={500}>
                {post.title}
            </Text>
            <DateFormatter dateString={post.date} />
            <Text size="sm" color="dimmed" lineClamp={4} className={classes.excerpt}>
                {post.excerpt}
            </Text>
        </Card>
      </Link>
    ))

    return (
        <Container py="xl" sx={{ marginTop: '4em' }}>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                {cards}
            </SimpleGrid>
        </Container>
    )
}
