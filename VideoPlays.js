import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';
import Video from './components/Video';

export default function Third({ navigation }) {
  return (
    <Animatable.View animation="fadeInDown" style={styles.container}>
      <View style={{ flex: 1 }}>
        <Video source={require('./assets/mega.mov')} />
        <Text
          style={{
            fontSize: 40,
            color: 'white',
            alignSelf: 'center',
            fontWeight: '100',
            marginTop: 50,
            marginBottom: 50,
          }}
        >
          Lihatlah senyum manis mu :)
        </Text>
        <TouchableOpacity
          style={{ alignSelf: 'center' }}
          onPress={() => navigation.navigate('TanggalUltah')}
        >
          <AntDesign name="down" size={32} color="white" />
        </TouchableOpacity>
      </View>
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
