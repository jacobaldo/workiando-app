import React from 'react';
import {WebView} from 'react-native-webview';
import {TermsAndConditionsProps} from './types';
import {View} from 'react-native';

const TermsAndConditions = ({navigation}: TermsAndConditionsProps) => {
  console.log(navigation);

  return (
    <View style={{flex: 1}}>
      <WebView
        source={{
          uri: 'https://workiandoapp.web.app/auth/terms',
        }}
      />
    </View>
  );
};

export default TermsAndConditions;
