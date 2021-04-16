import React, { useState } from 'react';
import { Image, SafeAreaView, View, TouchableOpacity, Linking, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from "@components";
import { Validator, widthPercentageToDP as wp } from "@helpers";
import Carousel from 'react-native-snap-carousel';

import { connect } from "react-redux";
import { AppCreators } from "@redux/actions";

import Question1 from './question1';
import Question2 from './question2';
import Question3 from './question3';
import Question4 from './question4';
import Question5 from './question5';
import Question6 from './question6';
import Question7 from './question7';
import Question8 from './question8';
import Question9 from './question9';
import Question10 from './question10';
import Question11 from './question11';
import Question12 from './question12';

import styles, { width as screenWidth } from './film-questions.style';

const questions = [
  "What type of film are you using?",
  "Is the film Blown or Cast?",
  "What is the width of the film?",
  "What is the length of the roll?",
  "What is the thickness of the film in Gauge or Micron?",
  "What is the weight of the load being wrapped?",
  "Is your pallet an A, B or C load?",
  "Who is the manufacturer?",
  "What is the brand name of the film?",
  "What kind of equipment is the film running on?",
  "What is the stretch percentage?",
  "How old is the Machine?",
];

const FilmQuestionsScreen: () => React$Node = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetFlag, setResetFlag] = useState(false);

  let carouselRef = React.createRef();

  const insets = useSafeAreaInsets();
  let isPhoneX = Validator.isIphoneXorAbove();
  let headerImage = isPhoneX ? require('@images/questions-header-x.png') : require('@images/questions-header.png');

  let contentPaddingTop = screenWidth / 879 * 465 - insets.top;
  if (isPhoneX) {
    contentPaddingTop = screenWidth / 879 * 515 - insets.top;
  }

  const onNext = () => {
    if (currentIndex < 11) {
      carouselRef.snapToNext();
    } else {
      let answers = [props.question1, props.question2, props.question3, props.question4, props.question5, props.question6, 
        props.question7, props.question8, props.question9, props.question10, props.question11, props.question12];

      let allAnswers = "";
      questions.forEach((value, index) => {
        if (index === 11) {
          allAnswers = `${allAnswers}${value} : ${answers[index]}`;
        } else {
          allAnswers = `${allAnswers}${value} : ${answers[index]}\r\n`;
        }
      });

      let url = `mailto:sales@allianceplastics.net?subject=Questions and Answers&body=${allAnswers}`;
      Linking.canOpenURL(url).then((value) => {
        if (value) {
          Linking.openURL(url);

          carouselRef.snapToItem(0, true);
          setResetFlag(!resetFlag);
          props.resetQuestions();

        } else {
          Alert.alert("Error", "Can't open your email apps");
        }
      }).catch( e => {
        console.log(e);
        Alert.alert("Error", "Can't open your email apps");
      });
    }
  }

  const onPrev = () => {
    carouselRef.snapToPrev();
  }

  const renderChildView = (index) => {
    switch (index) {
      case 0:
        return <Question1 resetFlag={resetFlag} />;
      case 1:
        return <Question2 resetFlag={resetFlag} />;
      case 2:
        return <Question3 resetFlag={resetFlag} />;
      case 3:
        return <Question4 resetFlag={resetFlag} />;
      case 4:
        return <Question5 resetFlag={resetFlag} />;
      case 5:
        return <Question6 resetFlag={resetFlag} />;
      case 6:
        return <Question7 resetFlag={resetFlag} />;
      case 7:
        return <Question8 resetFlag={resetFlag} />;
      case 8:
        return <Question9 resetFlag={resetFlag} />;
      case 9:
        return <Question10 resetFlag={resetFlag} />;
      case 10:
        return <Question11 resetFlag={resetFlag} />;
      case 11:
        return <Question12 />;
      default:
        return null;
    }
  }

  return (
    <View style={styles.rootContainer}>

      <Image source={headerImage} style={isPhoneX ? styles.logoX : styles.logo} resizeMode={"cover"} />

      <SafeAreaView style={styles.absoluteFill}>
        <View style={[styles.flexFill, {paddingTop: contentPaddingTop}]}>

          <TouchableOpacity 
            style={[styles.hamburgButton, isPhoneX && styles.hamburgButtonX]}
            onPress={() => props.navigation.openDrawer()} />

          <View style={styles.contentContainer}>

            <Text style={styles.numberText}>{`${currentIndex + 1} of 12`}</Text>
            <Text style={styles.titleText}>{questions[currentIndex]}</Text>

            <Carousel
              ref={(c) => { carouselRef = c; }}
              data={questions}
              renderItem={({item, index}) => renderChildView(index)}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              scrollEnabled={false}
              onSnapToItem={(index) => setCurrentIndex(index)}
            />

            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={[styles.nextButton, currentIndex === 0 && {opacity: 0}]}
                disabled={currentIndex === 0}
                activeOpacity={0.8}
                onPress={onPrev}>
                <Text style={styles.buttonText}>PREV</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.nextButton}
                activeOpacity={0.8}
                onPress={() => onNext()}>
                <Text style={styles.buttonText}>{currentIndex === 11 ? "UPLOAD" : "NEXT"}</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </SafeAreaView>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    question1: state.app.question1,
    question2: state.app.question2,
    question3: state.app.question3,
    question4: state.app.question4,
    question5: state.app.question5,
    question6: state.app.question6,
    question7: state.app.question7,
    question8: state.app.question8,
    question9: state.app.question9,
    question10: state.app.question10,
    question11: state.app.question11,
    question12: state.app.question12,
  };
}

const mapDispatchToProps = {
  resetQuestions: AppCreators.resetQuestions,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmQuestionsScreen);