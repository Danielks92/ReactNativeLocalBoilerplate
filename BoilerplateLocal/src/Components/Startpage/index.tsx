import React from 'react';
import {StyleSheet, View} from 'react-native';

const Startpage = () => {
  return (
    <View>
      <View style={{backgroundColor: 'blue'}}>
        <View style={styles.headerStyle} />
      </View>
      <View style={[styles.headerStyle, {backgroundColor: 'blue'}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    width: '100%',
    height: 150,
    backgroundColor: 'red',
    borderWidth: 0,
    borderBottomLeftRadius: 100,
  },
});

export default Startpage;
