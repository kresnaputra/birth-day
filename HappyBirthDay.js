import React from 'react';
import { View, Text, ImageBackground, Image, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('screen');

const HappyBirthDay = () => {
  return (
    <Animatable.View animation="fadeInDown" style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/mega.jpg')}
        style={{ flex: 1 }}
      >
        <ImageBackground
          source={require('./assets/balloons.gif')}
          style={{
            width: width,
            height: height,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('./assets/surprise.png')}
              style={{ width: 80, height: 80 }}
            />
            <Text
              style={{
                fontSize: 50,
                textShadowColor: '#585858',
                textShadowOffset: { width: 5, height: 5 },
                textShadowRadius: 10,
                color: 'white',
                fontWeight: '900',
                marginHorizontal: 20,
              }}
            >
              Happy Birth Day Mega
            </Text>
            <Image
              source={require('./assets/surprise.png')}
              style={{ width: 80, height: 80 }}
            />
          </View>
          <Text
            style={{
              fontSize: 50,
              textShadowColor: '#585858',
              textShadowOffset: { width: 5, height: 5 },
              textShadowRadius: 10,
              color: 'white',
              fontWeight: '100',
              marginHorizontal: 20,
            }}
          >
            - I LOVE U -
          </Text>
        </ImageBackground>
      </ImageBackground>
    </Animatable.View>
  );
};

export default HappyBirthDay;
