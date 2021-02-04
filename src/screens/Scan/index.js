import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import styles from './styles';

import {SquareCard} from '../../components';

import data from '../../utils/data';

const Scan = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}> SnapFill</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <SquareCard key={item.id} title={item.title} image={item.image} />
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default Scan;
