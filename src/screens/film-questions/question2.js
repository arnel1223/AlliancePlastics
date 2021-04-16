import React from 'react';
import { View } from 'react-native';
import { ScrollPicker } from "@components";
import { widthPercentageToDP as wp } from "@helpers";
import { COLOR } from '@config';

import { connect } from "react-redux";
import { AppCreators } from "@redux/actions";

const Question2: () => React$Node = (props) => {

  const answers = [
    "Blown", "Cast"
  ];

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center",}}>
      <ScrollPicker
        dataSource={answers}
        selectedIndex={0}
        wrapperHeight={wp(190)}
        wrapperWidth={wp(80)}
        wrapperBackground={"transparent"}
        itemHeight={wp(50)}
        highlightColor={COLOR.PRIMARY_TEXT_COLOR}
        highlightWidth={wp(80)}
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
          props.updateQuestion2(value);
        }}
      />
    </View>
  );
};

function mapStateToProps(state) {
  return {
    question2: state.app.question2,
  };
}

const mapDispatchToProps = {
  updateQuestion2: AppCreators.updateQuestion2,
};

export default connect(mapStateToProps, mapDispatchToProps)(Question2);