import React from 'react';
import { View } from 'react-native';
import { ScrollPicker } from "@components";
import { widthPercentageToDP as wp } from "@helpers";
import { COLOR } from '@config';

import { connect } from "react-redux";
import { AppCreators } from "@redux/actions";

const Question12: () => React$Node = (props) => {

  const answers = [
    "Less than 12 months", "1-3 years", "3-5 years", "5+ years"
  ];

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center",}}>
      <ScrollPicker
        dataSource={answers}
        selectedIndex={0}
        wrapperHeight={wp(190)}
        wrapperWidth={wp(180)}
        wrapperBackground={"transparent"}
        itemHeight={wp(50)}
        highlightColor={COLOR.PRIMARY_TEXT_COLOR}
        highlightWidth={wp(180)}
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
          props.updateQuestion12(value);
        }}
      />
    </View>
  );
};

function mapStateToProps(state) {
  return {
    question12: state.app.question12,
  };
}

const mapDispatchToProps = {
  updateQuestion12: AppCreators.updateQuestion12,
};

export default connect(mapStateToProps, mapDispatchToProps)(Question12);