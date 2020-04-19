import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';

export default function TanggalUltah({ navigation }) {
  return (
    <Animatable.View animation="fadeInRight" style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text
          style={{ fontSize: 80, color: 'white', fontFamily: 'Roboto-Regular' }}
        >
          Pada tanggal 20 April 2020
        </Text>
        <Text style={{ fontWeight: 100, color: 'white', fontSize: 30 }}>
          Dari lubuk hatiku yang dalam aku akan mengatakan ....
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('HappyBirthDay')}>
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
