/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @oncall web_perf_infra
 */

import 'rsuite/dist/rsuite.min.css';
// import '@oracle/oraclejet-preact/dist/amd/Theme-redwood/theme.css';
// import '../node_modules/@oracle/oraclejet-preact/amd/Theme-redwood/theme.css';
import Layout from '../components/layout.jsx';
import React from 'react';

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
