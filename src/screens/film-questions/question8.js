import React from 'react';
import { View } from 'react-native';
import { ScrollPicker } from "@components";
import { widthPercentageToDP as wp } from "@helpers";
import { COLOR } from '@config';

import { connect } from "react-redux";
import { AppCreators } from "@redux/actions";

const Question8: () => React$Node = (props) => {

  const answers = [
    "Berry Plastics", "Amtopp", "Intertape", "Paragon", "Malpack", "Sigma", "Signode/Mima", "Western Plastics", "Wraptite", "5 Point Films", "Hi-Tech Industries"
  ];

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center",}}>
      <ScrollPicker
        dataSource={answers}
        selectedIndex={0}
        wrapperHeight={wp(190)}
        wrapperWidth={wp(150)}
        wrapperBackground={"transparent"}
        itemHeight={wp(50)}
        highlightColor={COLOR.PRIMARY_TEXT_COLOR}
        highlightWidth={wp(150)}
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
          props.updateQuestion8(value);
        }}
      />
    </View>
  );
};

function mapStateToProps(state) {
  return {
    question8: state.app.question8,
  };
}

const mapDispatchToProps = {
  updateQuestion8: AppCreators.updateQuestion8,
};

export default connect(mapStateToProps, mapDispatchToProps)(Question8);