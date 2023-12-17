import React from 'react';
import {Text, View, Image} from 'react-native';
import GlobalStyle from '../assets/styles/GlobalStyle';

const NumerologyScreen = () => {
  return (
    <View style={[GlobalStyle.container, GlobalStyle.containerStyle]}>
      <View style={GlobalStyle.containerStyle2}>
        <Image
          style={GlobalStyle.back}
          source={require('../assets/icons/back.png')}
        />
        <Text style={[GlobalStyle.headerStyle, GlobalStyle.numStyle]}>
          Names by Numerology Number
        </Text>
        <Image
          style={GlobalStyle.fav}
          source={require('../assets/icons/likes.png')}
        />
      </View>
      <View>
        <Text style={GlobalStyle.para}>
          Select the number to see names with the numerology for this number
        </Text>
      </View>
      <View style={GlobalStyle.numBoxLayout}>
        <View style={GlobalStyle.oneBox}>
          <Text style={GlobalStyle.oneStyle}>1</Text>
        </View>
        <View style={GlobalStyle.twoBox}>
          <Text style={GlobalStyle.twoStyle}>2</Text>
        </View>
        <View style={GlobalStyle.threeBox}>
          <Text style={GlobalStyle.threeStyle}>3</Text>
        </View>
      </View>
      <View style={GlobalStyle.numBoxLayout}>
        <View style={GlobalStyle.fourBox}>
          <Text style={GlobalStyle.fourStyle}>4</Text>
        </View>
        <View style={GlobalStyle.fiveBox}>
          <Text style={GlobalStyle.fiveStyle}>5</Text>
        </View>
        <View style={GlobalStyle.sixBox}>
          <Text style={GlobalStyle.sixStyle}>6</Text>
        </View>
      </View>
      <View style={GlobalStyle.numBoxLayout}>
        <View style={GlobalStyle.sevenBox}>
          <Text style={GlobalStyle.sevenStyle}>7</Text>
        </View>
        <View style={GlobalStyle.eightBox}>
          <Text style={GlobalStyle.eightStyle}>8</Text>
        </View>
        <View style={GlobalStyle.nineBox}>
          <Text style={GlobalStyle.nineStyle}>9</Text>
        </View>
      </View>
      <View style={GlobalStyle.elevenBox}>
        <Text style={GlobalStyle.elevenStyle}>11</Text>
      </View>
    </View>
  );
};

export default NumerologyScreen;
