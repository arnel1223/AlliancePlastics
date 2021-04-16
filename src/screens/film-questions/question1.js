import React from 'react';
import { View } from 'react-native';
import { ScrollPicker } from "@components";
import { widthPercentageToDP as wp } from "@helpers";
import { COLOR } from '@config';

import { connect } from "react-redux";
import { AppCreators } from "@redux/actions";

const Question1: () => React$Node = (props) => {
  const answers = [
    {
      value: "Hand Wrap",
      icon: require("@images/ic_open_hands.png")
    },
    {
      value: "Machine Film",
      icon: require("@images/ic_settings.png")
    },
    {
      value: "Both",
      icon: require("@images/ic_management.png")
    }
  ];

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
      <ScrollPicker
        dataSource={answers}
        selectedIndex={1}
        wrapperHeight={wp(190)}
        wrapperWidth={wp(150)}
        wrapperBackground={"transparent"}
        itemHeight={wp(50)}
        highlightColor={COLOR.PRIMARY_TEXT_COLOR}
        highlightWidth={wp(150)}
        highlightBorderWidth={wp(0)}
        itemTextStyle={{
          flex: 1,
          textAlign: "center",
          fontSize: wp(16),
          color: COLOR.PRIMARY_INPUT_COLOR,
        }}
        activeItemTextStyle={{
          flex: 1,
          textAlign: "center",
          fontSize: wp(16),
          color: COLOR.PRIMARY_TEXT_COLOR,
        }}
        onValueChange={(value, index) => {
          props.updateQuestion1(value.value);
        }}
        icon={true}
      />
    </View>
  );
};

function mapStateToProps(state) {
  return {
    question1: state.app.question1,
  };
}

const mapDispatchToProps = {
  updateQuestion1: AppCreators.updateQuestion1,
};

export default connect(mapStateToProps, mapDispatchToProps)(Question1);