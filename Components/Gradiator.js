import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import TexteCustom from './TexteCustom';

export default ({ label, fct, styleObject, fSize, couleur = '#FFD66F' }) => {

  const sizeOfFont = parseInt(fSize);

  const styles = StyleSheet.create({
    gradiator: {
      //backgroundColor: 'yellow',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',

      borderColor: '#FFD66F',
      borderRadius: 10,
      // paddingBottom: 10,
      // paddingTop: 10,

      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2
    },
  });

  return (
    <LinearGradient
      colors={['#rgba(255, 214, 111, 0.3)', '#rgba(0, 0, 0, 0.4)']}
      style={{ height: 40, borderRadius: 10, ...styleObject }} >
      <TouchableHighlight
        style={styles.gradiator}
        onPress={() => fct()}>
        <TexteCustom text={label} size={sizeOfFont} couleur={couleur} /> 
      </TouchableHighlight>
    </LinearGradient>
  )

};
