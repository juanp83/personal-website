import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head />
        <body 
          style={{ 
            background: 'linear-gradient(315deg, rgba(54,89,129,1) 0%, rgba(103,171,249,1) 100%)'
          }}
        >
            <Main />
            <NextScript />
        </body>
      </Html>
    );
  }
}