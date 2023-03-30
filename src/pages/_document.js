import { Html, Head, Main, NextScript } from 'next/document'
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Header from './_header';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        <body>
      <Header />

          <Main />

          <NextScript />
        </body>
   
    </Html>
  );
}
