import React from 'react';
import {View, Text} from 'react-native';

import {WebView} from 'react-native-webview';

const DetailsContent = ({route}) => {
  const htmlcontents = `<html>
     <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
      </head>
      <body>${route.params.htmlContent}</body></html>`;
  return (
    <View style={{flex: 1}}>
      <WebView
        originWhitelist={['*']}
        source={{html: htmlcontents}}
        style={{flex: 1}}
      />
    </View>
  );
};

export default DetailsContent;
