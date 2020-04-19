import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';

export default function Third({ navigation }) {
  return (
    <Animatable.View animation="fadeInDown" style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontWeight: 100, color: 'white', fontSize: 30 }}>
          Oleh karena itu
        </Text>
        <Text
          style={{ fontSize: 80, color: 'white', fontFamily: 'Roboto-Regular' }}
        >
          Aku akan membersembahkan video
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('VideoPlays')}>
        <AntDesign name="down" size={32} color="white" />
      </TouchableOpacity>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b71c1c',
    alignItems: 'center',
    paddingVertical: 100,
  },
});
