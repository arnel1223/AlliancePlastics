import React, { useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import { ScrollPicker } from "@components";
import { widthPercentageToDP as wp, FontHelper } from "@helpers";
import { COLOR } from '@config';

import { connect } from "react-redux";
import { AppCreators } from "@redux/actions";

const Question6: () => React$Node = (props) => {
  const [weight, setWeight] = useState("");
  const [unitIndex, setUnitIndex] = useState(0);

  const answers = [
    "lb", "kg"
  ];

  const onUpdateQuestion = (value, index) => {
    let nWeight = parseFloat(value === "" ? "0.0" : value);
    props.updateQuestion6(`${nWeight} ${answers[index]}`);
  }

  useEffect(() => {
    setWeight("");
  }, [props.resetFlag]);

  return (
    <View style={{flex: 1}}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center",}}>
        <TextInput
          value={`${weight}`}
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
            setWeight(text);
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
            let nValue = parseFloat(weight === "" ? "0.0" : weight);
            if (index !== unitIndex) {
              if (index === 0) {
                nValue = nValue * 2.2075055187637966;
              } else {
                nValue = nValue * 0.453;
              }
              nValue = nValue.toFixed(2);
              setWeight(`${nValue}`);
            }
            setUnitIndex(index);
            onUpdateQuestion(nValue, index);
          }}
        />
      </View>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    question6: state.app.question6,
  };
}

const mapDispatchToProps = {
  updateQuestion6: AppCreators.updateQuestion6,
};

export default connect(mapStateToProps, mapDispatchToProps)(Question6);