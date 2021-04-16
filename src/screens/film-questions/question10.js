import React from 'react';
import { View, Image } from 'react-native';
import { ScrollPicker } from "@components";
import { widthPercentageToDP as wp } from "@helpers";
import { COLOR } from '@config';

import { connect } from "react-redux";
import { AppCreators } from "@redux/actions";

const images = {
  "Semi-automatic tuntable": require("@images/semi-auto-turntable.jpg"),
  "Automatic Turntable": require("@images/auto-turntable.jpg"),
  "Semi-auto spiral": require("@images/semi-auto-spiral.jpg"),
  "Automatic rotary arm": require("@images/auto-spiral-overhead.jpg"),
  "Octopus": require("@images/octopus.jpg"),
  "Robopac": require("@images/robopac.jpg")
};

const Question10: () => React$Node = (props) => {

  const answers = [
    "Semi-automatic tuntable", "Automatic Turntable", "Semi-auto spiral", "Automatic rotary arm", "Octopus", "Robopac"
  ];

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center",}}>
      <ScrollPicker
        dataSource={answers}
        selectedIndex={0}
        wrapperHeight={wp(160)}
        wrapperWidth={wp(220)}
        wrapperBackground={"transparent"}
        itemHeight={wp(40)}
        focusHeight={wp(45)}
        highlightColor={COLOR.PRIMARY_TEXT_COLOR}
        highlightWidth={wp(220)}
        highlightBorderWidth={wp(0)}
        itemTextStyle={{
          textAlign: "center",
          fontSize: wp(16),
          color: COLOR.PRIMARY_INPUT_COLOR,
        }}
        activeItemTextStyle={{
          textAlign: "center",
          fontSize: wp(16),
          color: COLOR.PRIMARY_TEXT_COLOR,
        }}
        onValueChange={(value, index) => {
          props.updateQuestion10(value);
        }}
      />
      <View style={{flex: 1}}>
        <Image source={images[props.question10]} style={{flex: 1, resizeMode: "contain"}} />
      </View>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    question10: state.app.question10,
  };
}

const mapDispatchToProps = {
  updateQuestion10: AppCreators.updateQuestion10,
};

export default connect(mapStateToProps, mapDispatchToProps)(Question10);