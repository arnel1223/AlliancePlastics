import React, { useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import { ScrollPicker } from "@components";
import { widthPercentageToDP as wp, FontHelper } from "@helpers";
import { COLOR } from '@config';

import { connect } from "react-redux";
import { AppCreators } from "@redux/actions";

const Question3: () => React$Node = (props) => {
  const [width, setWidth] = useState("");
  const [unitIndex, setUnitIndex] = useState(0);

  const answers = [
    "inch", "cm"
  ];

  const onUpdateQuestion = (value, index) => {
    let nWidth = parseFloat(value === "" ? "0.0" : value);
    if (index === 1) {
      nWidth = nWidth * 0.393701;
    }
    props.updateQuestion3(`${nWidth} inch`);
  }

  useEffect(() => {
    setWidth("");
  }, [props.resetFlag]);

  return (
    <View style={{flex: 1}}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center",}}>
        <TextInput
          value={`${width}`}
          style={FontHelper.font({
            width: wp(100),
            height: wp(30),
            borderWidth: 1,
            borderRadius: wp(15),
            borderColor: COLOR.PRIMARY_BORDER_COLOR,
            color: COLOR.PRIMARY_INPUT_COLOR,
            paddingHorizontal: wp(10),
            paddingVertical: 0,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: wp(15),
            marginRight: wp(40),
          })}
          placeholder={"0.0"}
          placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
          onChangeText={(text) => {
            setWidth(text);
            onUpdateQuestion(text, unitIndex);
          }}
          keyboardType={"numeric"}
          returnKeyType={"done"} />

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
            let nWidth = parseFloat(width === "" ? "0.0" : width);
            if (index !== unitIndex) {
              if (index === 0) {
                nWidth = nWidth * 0.393701;
              } else {
                nWidth = nWidth * 2.5399986284007405;
              }
              nWidth = nWidth.toFixed(2);
              setWidth(`${nWidth}`);
            }
            setUnitIndex(index);
            onUpdateQuestion(nWidth, index);
          }}
        />
      </View>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    question3: state.app.question3,
  };
}

const mapDispatchToProps = {
  updateQuestion3: AppCreators.updateQuestion3,
};

export default connect(mapStateToProps, mapDispatchToProps)(Question3);