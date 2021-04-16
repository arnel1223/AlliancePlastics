import React, { useState } from 'react';
import { Image, SafeAreaView, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { Validator } from "@helpers";
import { COLOR } from "@config";

import styles, { width as screenWidth } from './film-selector.style';

const FilmSelectorScreen: () => React$Node = (props) => {
  const [loading, setLoading] = useState(false);
  const insets = useSafeAreaInsets();
  let isPhoneX = Validator.isIphoneXorAbove();
  let headerImage = isPhoneX ? require('@images/film-header-x.png') : require('@images/film-header.png');

  let contentPaddingTop = screenWidth / 879 * 465 - insets.top;
  if (isPhoneX) {
    contentPaddingTop = screenWidth / 879 * 515 - insets.top;
  }

  return (
    <View style={styles.rootContainer}>

      <Image source={headerImage} style={isPhoneX ? styles.logoX : styles.logo} resizeMode={"cover"} />

      <SafeAreaView style={styles.absoluteFill}>
        <View style={[styles.flexFill, {paddingTop: contentPaddingTop}]}>

          <TouchableOpacity 
            style={[styles.hamburgButton, isPhoneX && styles.hamburgButtonX]}
            onPress={() => props.navigation.openDrawer()} />

          <View style={styles.contentContainer}>

            <WebView
              source={{ uri: 'https://allianceplastics.net/cross-reference/' }}
              onLoadStart={(e) => {
                setLoading(e.nativeEvent.loading);
              }}
              onLoadEnd={(e) => {
                setLoading(e.nativeEvent.loading);
              }}
              style={styles.webView}
            />

            {loading &&
            <ActivityIndicator size={"large"} style={{position: "absolute"}} color={COLOR.PRIMARY_COLOR} /> }

          </View>

        </View>
      </SafeAreaView>
    </View>
  );
};

export default FilmSelectorScreen;