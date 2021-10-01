import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import TexteCustom from './TexteCustom';

export default ({ label, fct, styleObject, fSize, fCouleur = '#FFD66F', grCouleur='#rgba(255, 0, 0, 0.3)' }) => {

  const styles = StyleSheet.create({
    gradiator: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: grCouleur,
      borderRadius: 6,
    },
  });

  return (
    <LinearGradient
      colors={[grCouleur, 'black', grCouleur]}
      style={{ alignItems: 'center',justifyContent: 'center',height: 40, borderRadius: 6, ...styleObject }} >
      <TouchableHighlight
        style={styles.gradiator}
        onPress={() => fct()}>
        <TexteCustom text={label} size={fSize} couleur={fCouleur} /> 
      </TouchableHighlight>
    </LinearGradient>
  )

};
