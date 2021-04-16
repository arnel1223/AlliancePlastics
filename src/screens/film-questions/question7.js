import React from 'react';
import { View, Image } from 'react-native';
import { ScrollPicker } from "@components";
import { widthPercentageToDP as wp } from "@helpers";
import { COLOR } from '@config';

import { connect } from "react-redux";
import { AppCreators } from "@redux/actions";

const images = {
  "Less than 3 inches": require("@images/7-a.png"),
  "3-6 inches": require("@images/7-b.png"),
  "More than 6 inches": require("@images/7-c.png"),
};

const Question7: () => React$Node = (props) => {
  const answers = [
    "Less than 3 inches", "3-6 inches", "More than 6 inches"
  ];

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center",}}>
      <ScrollPicker
        dataSource={answers}
        selectedIndex={0}
        wrapperHeight={wp(190)}
        wrapperWidth={wp(170)}
        wrapperBackground={"transparent"}
        itemHeight={wp(50)}
        highlightColor={COLOR.PRIMARY_TEXT_COLOR}
        highlightWidth={wp(170)}
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
          props.updateQuestion7(value);
        }}
      />
      <Image source={images[props.question7 === "" ? "Less than 3 inches" : props.question7]} 
        style={{flex: 1, resizeMode: 'contain'}} />
    </View>
  );
};

function mapStateToProps(state) {
  return {
    question7: state.app.question7,
  };
}

const mapDispatchToProps = {
  updateQuestion7: AppCreators.updateQuestion7,
};

export default connect(mapStateToProps, mapDispatchToProps)(Question7);