import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';

export default function Ngilang({ navigation }) {
  return (
    <Animatable.View animation="fadeInDown" style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text
          style={{ fontSize: 80, color: 'white', fontFamily: 'Roboto-Regular' }}
        >
          Ngilang
        </Text>
        <Text style={{ fontWeight: 100, color: 'white', fontSize: 30 }}>
          Gak ada angin gak ada hujan dan tanpa sebab
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Third')}>
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
