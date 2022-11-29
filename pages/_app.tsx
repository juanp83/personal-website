import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import SimpleHeader from '../components/SimpleHeader';

const links = [{link: '/', label: 'Home'}]

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  console.log({Component})

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <SimpleHeader links={links} />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
