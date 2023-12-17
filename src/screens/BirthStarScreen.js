import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import GlobalStyle from '../assets/styles/GlobalStyle';

const BirthStarScreen = () => {
  return (
    <ScrollView>
      <View style={[GlobalStyle.container, GlobalStyle.containerStyle]}>
        <View style={GlobalStyle.containerStyle2}>
          <Image
            style={GlobalStyle.back}
            source={require('../assets/icons/back.png')}
          />
          <Text style={GlobalStyle.headerStyle}>Names by Birth Star</Text>
          <Image
            style={GlobalStyle.fav}
            source={require('../assets/icons/likes.png')}
          />
        </View>
        <View>
          <Text style={GlobalStyle.para}>
            Hindu girl baby and boy baby names suitable for birth star krithika.
          </Text>
        </View>
        <View style={GlobalStyle.telBox}>
          <Text style={GlobalStyle.telText}>Anuraadha</Text>
        </View>
        <View style={GlobalStyle.tamBox}>
          <Text style={GlobalStyle.telText}>Ashlesha</Text>
        </View>
        <View style={GlobalStyle.sanBox}>
          <Text style={GlobalStyle.telText}>Aswini</Text>
        </View>
        <View style={GlobalStyle.hinBox}>
          <Text style={GlobalStyle.telText}>Arudhra</Text>
        </View>
        <View style={GlobalStyle.siBox}>
          <Text style={GlobalStyle.telText}>Bharani</Text>
        </View>
        <View style={GlobalStyle.kanBox}>
          <Text style={GlobalStyle.telText}>Chitta</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Dhanishta</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Hastha</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Jyeshta</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Krithika</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Makha</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Mrugasira</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Moola</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Punarvasu</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Pubba</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Poorvabhadra</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Pushyami</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Poorvashaada</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Rohini</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Revathi</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Shathabhisha</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Swaathi</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Sravanam</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Utharashada</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Uttara</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Uthrabhadra</Text>
        </View>
        <View style={GlobalStyle.MalBox}>
          <Text style={GlobalStyle.telText}>Vishaakha</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default BirthStarScreen;
