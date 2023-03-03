import Avatar from '../Avatar'
import DateFormatter from '../DateFormatter'
import CoverImage from './CoverImage'
import { Title } from '@mantine/core'
import styled from '@emotion/styled'

const TitleContainer = styled.div`
  display: flex; 
  flex-direction: row;
  gap: 1rem;
  align-items: flex-start;
`

type Props = {
  title: string
  coverImage: string
  date: string
}

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <TitleContainer>
        <div>
          <Title order={2}>
            {title}
          </Title>
          <DateFormatter dateString={date} />
        </div>
      </TitleContainer>
      <div style={{ marginTop: '1em' }}>
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  )
}

export default PostHeader