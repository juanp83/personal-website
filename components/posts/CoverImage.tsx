import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

type Props = {
  title: string
  src: string
  slug?: string
}




const CoverImage = ({ title, src, slug }: Props) => {
  // eslint-disable-next-line react/display-name

  return (
    <div>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          <a>
            <Image
              src={src}
              alt={`Cover Image for ${title}`}
              width={800}
              height={532}
            />
          </a>
        </Link>
      ) : (
        <Image
          src={src}
          alt={`Cover Image for ${title}`}
          width={800}
          height={532}
        />
      )}
    </div>
  )
}

export default CoverImage