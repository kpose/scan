import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

import {HorrizontalCard} from '../../components';

const camera = require('../../assets/images/camera.png');
const chat = require('../../assets/images/chat-bot.png');
const audio = require('../../assets/images/audio.png');

const FirstTimeSetup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {' '}
        Let us help you get started with Snapfill
      </Text>
      <HorrizontalCard image={camera} title="Continue with document Scanner" />
      <HorrizontalCard image={chat} title="Continue with chat bot" />
      <HorrizontalCard image={audio} title="Continue with audio assistant" />
    </View>
  );
};

export default FirstTimeSetup;
