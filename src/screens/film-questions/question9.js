import React from 'react';
import { View, TextInput } from 'react-native';
import { widthPercentageToDP as wp, FontHelper } from "@helpers";
import { COLOR } from '@config';

import { connect } from "react-redux";
import { AppCreators } from "@redux/actions";

const Question9: () => React$Node = (props) => {

  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 40,}}>
      <TextInput
        value={`${props.question9}`}
        style={FontHelper.font({
          width: wp(180),
          height: wp(35),
          borderWidth: 1,
          borderRadius: wp(10),
          borderColor: COLOR.PRIMARY_INPUT_COLOR,
          color: COLOR.PRIMARY_INPUT_COLOR,
          paddingHorizontal: wp(10),
          paddingVertical: 0,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: wp(15),
        })}
        placeholder={"name"}
        placeholderTextColor={COLOR.PRIMARY_INPUT_COLOR}
        onChangeText={(text) => {
          props.updateQuestion9(text);
        }}
        returnKeyType={"done"} />

    </View>
  );
};

function mapStateToProps(state) {
  return {
    question9: state.app.question9,
  };
}

const mapDispatchToProps = {
  updateQuestion9: AppCreators.updateQuestion9,
};

export default connect(mapStateToProps, mapDispatchToProps)(Question9);