import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default ({ label, fct, styleObject, fSize, couleur = 'black' }) => {

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
    text: {
      textAlign: 'center',
      textShadowColor: 'rgba(0, 0, 0, 0.5)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
      fontFamily: 'Tangerine-Bold',
      color: couleur
    },
  });

  return (
    <LinearGradient
      colors={['#rgba(255, 255, 255, 0.1)', '#rgba(0, 0, 0, 0.4)']}
      style={{ height: 40, borderRadius: 10, ...styleObject }} >
      <TouchableHighlight
        style={styles.gradiator}
        onPress={() => fct()}>
        <Text style={{...styles.text, fontSize: sizeOfFont}}> {label} </Text>
      </TouchableHighlight>
    </LinearGradient>
  )

};
