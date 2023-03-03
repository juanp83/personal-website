import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import SimpleHeader from '../components/SimpleHeader';
import { FooterSocial } from '../components/FooterSocial';

const links = [
  {link: '/', label: 'Home'},
  {link: '/blog', label: 'Blog'},
  {link: '/resume', label: 'Resume'}
]

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Juan Portillo | Front-End Software Engineer</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          colors: {
            brand: ['#e2eaf3','#8cabcf','#7ea1c9','#6f96c3','#618cbd','#4281b7', '#497aab', '#426d9e', '#3c6390', '#365981'],
          },
          primaryColor: 'brand',
          black: '#18283a', 
        }}
      >
        <SimpleHeader links={links} />
        <Component {...pageProps} />
        <FooterSocial />
      </MantineProvider>
    </>
  )
}
