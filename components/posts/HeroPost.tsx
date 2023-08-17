import Avatar from '../Avatar'
import DateFormatter from '../DateFormatter'
import CoverImage from './CoverImage'
import Link from 'next/link'
import { Container, Text, Title } from '@mantine/core'
import styled from '@emotion/styled'

const TitleContainer = styled.div`
  display: flex; 
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`

const TitleLink = styled.p`
  text-decoration: none;
  color: #497aab;
  cursor: pointer;
`

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <Container size="sm">
      <CoverImage title={title} src={coverImage} slug={slug} />
      <TitleContainer>
        <Avatar />
        <div>
          <Title order={2}>
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              style={{textDecoration: 'none'}}
            >
              <TitleLink>{title}</TitleLink>
            </Link>
          </Title>
          <DateFormatter dateString={date} />
        </div>
      </TitleContainer>
      <Text color="dimmed" mt="md">{excerpt}</Text>
    </Container>
  )
}

export default HeroPost