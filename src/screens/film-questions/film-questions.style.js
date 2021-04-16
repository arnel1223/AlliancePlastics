import { StyleSheet, Dimensions, Platform } from "react-native";
import { widthPercentageToDP as wp } from "@helpers";
import { COLOR } from '@config';

export const { width } = Dimensions.get("window");

export default StyleSheet.create({
  rootContainer: {
    flex: 1, 
    backgroundColor: "white",
  },
  flexFill: {
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
  },
  absoluteFill: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },

  logo: {
    width: width,
    height: width / 879 * 465,
    borderBottomLeftRadius: wp(30),
  },
  logoX: {
    width: width,
    height: width / 879 * 515,
    borderBottomLeftRadius: wp(30),
  },

  hamburgButton: {
    position: "absolute",
    width: wp(60),
    height: wp(40),
    left: wp(17),
    top: Platform.OS === "ios" ? wp(20) : wp(24),
  },
  hamburgButtonX: {
    left: wp(17),
    top: wp(5),
  },

  contentContainer: {
    flex: 1,
  },
  numberText: {
    marginTop: wp(40),
    marginHorizontal: wp(40),
    fontSize: wp(11),
    fontWeight: "bold",
    color: COLOR.PRIMARY_INPUT_COLOR,
  },
  titleText: {
    marginTop: wp(10),
    marginHorizontal: wp(40),
    fontSize: wp(18),
    fontWeight: "bold",
    color: COLOR.PRIMARY_TEXT_COLOR,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: wp(20),
    marginHorizontal: wp(40),
  },
  nextButton: {
    width: wp(80),
    height: wp(40),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: wp(15),
    backgroundColor: COLOR.PRIMARY_BORDER_COLOR, 
  },
  buttonText: {
    color: COLOR.PRIMARY_INPUT_COLOR,
    fontSize: wp(14),
    fontWeight: "bold",
    textAlign: "center",
  },
});