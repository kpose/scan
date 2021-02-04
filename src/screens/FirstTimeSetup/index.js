import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

import {HorrizontalCard} from '../../components';

const camera = require('../../assets/images/camera.png');
const chat = require('../../assets/images/chat-bot.png');
const audio = require('../../assets/images/audio.png');

const FirstTimeSetup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {' '}
        Let us help you get started with Snapfill
      </Text>
      <HorrizontalCard
        image={camera}
        title="Continue with document Scanner"
        onPress={() => navigation.navigate('Home')}
      />
      <HorrizontalCard
        image={chat}
        title="Continue with chat bot"
        onPress={() => navigation.navigate('Home')}
      />
      <HorrizontalCard
        image={audio}
        title="Continue with audio assistant"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default FirstTimeSetup;
