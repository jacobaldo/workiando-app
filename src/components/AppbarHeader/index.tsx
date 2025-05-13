/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Appbar} from 'react-native-paper';
import {StatusBar, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Typography} from '../Typography';
import {
  styles,
  stylesIcon,
  stylesTitle,
  styleTitleBox,
  stylesappBarCenter,
  styleIconRight,
} from './style';
import * as RootNavigation from '../../utils/navigationref/RootNavigation';
import {Props} from './types';

const AppbarHeader = ({
  title,
  style = {},
  backButon = true,
  backPress,
  variant = {type: 'default'},
  resetNavigationOnBack = false,
  iconRight = {type: 'default'},

  backPressGeneric = undefined,
}: Props) => {
  const centerStyle = backButon
    ? styles.appBar
    : stylesappBarCenter[variant.type];
  const barStyle = {
    ...centerStyle,
    ...styles[variant.type],
    ...style,
  };
  const isHomePage = iconRight.type === 'Home';

  const IconRight = () => {
    if (iconRight.type === 'Support') {
      return <Icon name="arrow-left" />;
    }
    return <Icon name="arrow-left" />;
  };

  const onBackButtonPressed = () => {
    if (resetNavigationOnBack) {
      RootNavigation.reset('Home');
      return;
    }

    if (backPressGeneric) {
      RootNavigation.navigate(backPressGeneric);
      return;
    }

    if (backPress) {
      backPress();
      return;
    }

    RootNavigation.goBack();
  };

  return (
    <Appbar.Header style={barStyle}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={
          ['white', 'blueLight'].includes(variant.type)
            ? 'light-content'
            : 'dark-content'
        }
      />

      {!!title && (
        <View style={[styleTitleBox[variant.type], {zIndex: -1}]}>
          <View style={styles.titleContainer}>
            <Typography
              style={{
                ...stylesTitle[variant.type],
                ...(isHomePage && styles.TitleStyleHome),
              }}
              variant={{type: 'subtitleS2'}}>
              {title}
            </Typography>
          </View>
          {variant.type === 'secondary' && (
            <View style={styleIconRight[iconRight.type]}>
              <IconRight />
            </View>
          )}
        </View>
      )}

      {backButon && (
        <View style={styles.buttonTitlePresseable}>
          <TouchableOpacity
            hitSlop={{top: 12, bottom: 12, left: 12, right: 12}}
            onPress={onBackButtonPressed}
            testID="filter-back-btn">
            <Icon
              name="arrow-left"
              style={stylesIcon[variant.type]}
              size={20}
            />
          </TouchableOpacity>
        </View>
      )}
    </Appbar.Header>
  );
};

export default AppbarHeader;
