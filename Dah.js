import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';

export default function Dah({ navigation }) {
  return (
    <Animatable.View animation="fadeInRight" style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontWeight: 100, color: 'white', fontSize: 30 }}>
          Maafkuen aku sayang ku
        </Text>
        <Text
          style={{ fontSize: 80, color: 'white', fontFamily: 'Roboto-Regular' }}
        >
          Yang suka ngambul gak jelas
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Ngilang')}>
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
