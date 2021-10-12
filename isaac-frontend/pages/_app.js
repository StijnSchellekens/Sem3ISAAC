// import App from 'next/app'
import React from 'react';

function MyApp({Component, pageProps}) { // eslint-disable-line
  return <Component {...pageProps} />;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Head from 'next/head';
// import {ThemeProvider} from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import {CacheProvider} from '@emotion/react';
// import theme from '../src/theme';
// import createEmotionCache from '../src/createEmotionCache';

// // Client-side cache, shared for the whole session of the user in
// the browser.
// const clientSideEmotionCache = createEmotionCache();

// export default function MyApp(props) {
//  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

//   return (
//     <CacheProvider value={emotionCache}>
//       <Head>
//         <title>My page</title>
//        <meta name="viewport" content="initial-scale=1, width=device-width" />
//       </Head>
//       <ThemeProvider theme={theme}>
//         {/* CssBaseline kickstart an elegant, consistent,
//          and simple baseline to build upon. */}
//         <CssBaseline />
//         <Component {...pageProps} />
//       </ThemeProvider>
//     </CacheProvider>
//   );
// }

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   emotionCache: PropTypes.object,
//   pageProps: PropTypes.object.isRequired,
// };
