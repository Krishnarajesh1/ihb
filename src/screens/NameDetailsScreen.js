import {View, Text, Image} from 'react-native';
import React from 'react';

import GlobalStyle from '../assets/styles/GlobalStyle';

const NameDetails = () => {
  return (
    <View style={[GlobalStyle.container, GlobalStyle.containerStyle]}>
      <View style={GlobalStyle.containerStyle2}>
        <Image
          style={GlobalStyle.back}
          source={require('../assets/icons/back.png')}
        />
        <Text style={GlobalStyle.headerStyle}>Krithika Names</Text>
        <Image
          style={GlobalStyle.fav}
          source={require('../assets/icons/likes.png')}
        />
      </View>
      <View>
        <Text style={GlobalStyle.para}>
          Krittika Nakshatra is known for its dynamic and fiery energy
        </Text>
      </View>
    </View>
  );
};

export default NameDetails;
