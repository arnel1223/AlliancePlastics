import React from 'react';
import { Image, SafeAreaView, View, TouchableOpacity, FlatList, Modal } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import YouTube from 'react-native-youtube';
import { GradientButton, Text } from "@components";
import { Validator } from "@helpers";

import styles, { width as screenWidth } from './videos.style';

const videos = [
  {title: "Airforce Vented Film", videoId: "p-SC2Qq9vd8", url: "https://www.youtube.com/watch?v=p-SC2Qq9vd8&list=PLg0RKFLYoLBjjV9VQEcHcqfuh3Mo_b7O3&index=2"},
  {title: "Titanium Reinforced film", videoId: "LMceutP5rUg", url: "https://www.youtube.com/watch?v=LMceutP5rUg&list=PLg0RKFLYoLBjjV9VQEcHcqfuh3Mo_b7O3&index=3"},
  {title: "Banding Film Steelflex Xtreme", videoId: "qn9M5p8Pq8c", url: "https://www.youtube.com/watch?v=qn9M5p8Pq8c&list=PLg0RKFLYoLBjjV9VQEcHcqfuh3Mo_b7O3&index=8"},
  {title: "55 layer Nano Xtreme 2.0 Machine Film", videoId: "BZ3THmYrtsI", url: "https://www.youtube.com/watch?v=BZ3THmYrtsI&list=PLg0RKFLYoLBjjV9VQEcHcqfuh3Mo_b7O3&index=13"},
  {title: "Nano hand film 8 microns (31 ga.)", videoId: "lWLdq44QQ_g", url: "https://www.youtube.com/watch?v=lWLdq44QQ_g"},
  {title: "Spectrum Colors hand and machine", videoId: "8gvL1nkwEbM", url: "https://www.youtube.com/watch?v=8gvL1nkwEbM"},
  {title: "How to Test Stretch Film Performance", videoId: "cif2ud7KX3I", url: "https://www.youtube.com/watch?v=cif2ud7KX3I"},
  {title: "Alliance Plastics Innovation", videoId: "uBqZUA4WjVg", url: "https://www.youtube.com/watch?v=uBqZUA4WjVg"},
];

const VideosScreen: () => React$Node = (props) => {
  const insets = useSafeAreaInsets();
  let isPhoneX = Validator.isIphoneXorAbove();
  let headerImage = isPhoneX ? require('@images/video-header-x.png') : require('@images/video-header.png');

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

          <FlatList
            data={videos}
            style={styles.videoList}
            contentContainerStyle={styles.contentContainer}
            keyExtractor={(item, index) => `video-${index}`}
            renderItem={({item: item, index}) => {
              return (
                <TouchableOpacity style={styles.listItemContainer}
                  activeOpacity={0.8}
                  onPress={() => {
                    props.navigation.navigate('VideoDetail', {videoId: item.videoId});
                  }}>
                  <View style={styles.itemImageContainer}>
                    <Image source={{uri: `https://img.youtube.com/vi/${item.videoId}/default.jpg`}} style={styles.itemImage} />
                    <Image source={require("@images/play-button.png")} style={styles.itemPlayIcon} />
                  </View>
                  <Text style={styles.itemText}>{item.title}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default VideosScreen;