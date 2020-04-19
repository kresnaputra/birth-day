import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    <Animatable.View animation="fadeInRight" style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text
          style={{ fontSize: 80, color: 'white', fontFamily: 'Roboto-Regular' }}
        >
          Surat Terbuka
        </Text>
        <Text style={{ fontWeight: 100, color: 'white', fontSize: 30 }}>
          Dari aku yang kamu suka
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Dah')}>
        <AntDesign name="right" size={32} color="white" />
      </TouchableOpacity>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingHorizontal: 100,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
