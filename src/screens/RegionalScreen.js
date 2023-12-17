import React from 'react';
import { Text, View, Image, ScrollView, Pressable, Alert } from 'react-native';
import GlobalStyle from '../assets/styles/GlobalStyle';

const RegionalScreen = () => {
  return (
    <View style={[GlobalStyle.container, GlobalStyle.containerStyle]}>
      <View style={GlobalStyle.containerStyle2}>
        <Image style={GlobalStyle.back} source={require('../assets/icons/back.png')} />
        <Text style={GlobalStyle.headerStyle}>Regional Names</Text>
        <Image style={GlobalStyle.fav} source={require('../assets/icons/likes.png')} />
      </View>
      <View>
        <Text style={GlobalStyle.para}>You will find unique, modern, rare, meaningful, short and beautiful baby names </Text>
      </View>
      <View style={GlobalStyle.telBox}>
        <Text style={GlobalStyle.telText}>Telugu</Text>
      </View>
      <View style={GlobalStyle.tamBox}>
        <Text style={GlobalStyle.telText}>Tamil</Text>
      </View>
      <View style={GlobalStyle.sanBox}>
        <Text style={GlobalStyle.telText}>Sanskrit</Text>
      </View>
      <View style={GlobalStyle.hinBox}>
        <Text style={GlobalStyle.telText}>Hindi</Text>
      </View>
      <View style={GlobalStyle.siBox}>
        <Text style={GlobalStyle.telText}>Sikh</Text>
      </View>
      <View style={GlobalStyle.kanBox}>
        <Text style={GlobalStyle.telText}>Kannada</Text>
      </View>
      <View style={GlobalStyle.MalBox}>
        <Text style={GlobalStyle.telText}>Malayalam</Text>
      </View>
    </View>
  );
};

export default RegionalScreen;
