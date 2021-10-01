import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import Styles from '../Styles';
import {localize} from '../../Helpers/Lang'
import { langSetter, colorSetter } from '../../Store/Actions/SettingsActions';

export default () => {


    const dispatch = useDispatch();
    const {lang, color} = useSelector((state) => state.SetterRedux);
    const localizer = localize[lang].settings;

    const setterLang = (label) => {
        dispatch(langSetter(label)); 
    };

    const htmlColor = (label) => {
        
        let tampColorName = 'red';
        let tampColor = '#rgba(255, 0, 0, 0.3)';
        let tampColorFull = '#rgba(255, 0, 0, 1)';

        if(label == 'red') {
            tampColorName = 'red';
            tampColor = '#rgba(255, 0, 0, 0.3)';
            tampColorFull = '#rgba(255, 0, 0, 1)';
        }
        else if (label == 'gold') {
            tampColorName = 'gold';
            tampColor = '#rgba(255, 214, 111, 0.3)';
            tampColorFull = '#rgba(255, 214, 111, 1)';
        }
        else if (label == 'green') {
            tampColorName = 'green';
            tampColor = '#rgba(25, 200, 12, 0.3)';
            tampColorFull = '#rgba(25, 200, 12, 1)';
        }
        else if (label == 'blue') {
            tampColorName = 'blue';
            tampColor = '#rgba(0, 17, 205, 0.3)';
            tampColorFull = '#rgba(0, 17, 205, 1)';
        }

        return  {
            colorName: tampColorName,
            color: tampColor,
            colorFull: tampColorFull
        }
    }

    const setterColor = (label) => { 
        dispatch(colorSetter(htmlColor(label))); 
    };
    
    const heighter = (type, label) => {
        if(type == 'lang') {
            if(lang == label) {return '40%';}
            else {return '30%';}
        }
        if(type == 'color') {
            if(label == color.colorName) {return '40%';}
            else {return '30%';}
        }
    }

    const styles = StyleSheet.create({
        title: {
            flex: 1,
        },
        section: {
            flex: 2,
        },
        gradiator_container: {
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
    });

    return (
        <View style={Styles.select_container}>

            <View style={styles.title}>
                <TextCustom text={localizer.title} size={4} />
            </View>
            <View style={styles.section}>

                <View style={Styles.divider}>
                    <View style={{...Styles.hrLine, backgroundColor: color.colorFull}} />
                    <TextCustom text={localizer.language} size={2} />
                    <View style={{...Styles.hrLine, backgroundColor: color.colorFull}} />
                </View>

                <View style={styles.gradiator_container}>
                    {
                        Object.entries(localizer.langChoice).map((language, index) => {
                            return(
                                <Gradiator
                                    key={index}
                                    label={language[1]}
                                    fct={() => setterLang(language[0])}
                                    styleObject={{ width: '30%', height: heighter('lang', language[0]) }}
                                    fSize={1}
                                    grCouleur={color.color}
                                />
                            )
                        })
                    }
                </View>
            </View>
            <View style={styles.section}>
                <View style={Styles.divider}>
                    <View style={{...Styles.hrLine, backgroundColor: color.colorFull}} />
                    <TextCustom text={localizer.color} size={2} />
                    <View style={{...Styles.hrLine, backgroundColor: color.colorFull}} />
                </View>
                <View style={styles.gradiator_container}>
                    {
                        Object.entries(localizer.colorChoice).map((dispoColor, index) => {
                            return(
                                <Gradiator
                                    key={index}
                                    label={dispoColor[1]}
                                    fct={() => setterColor(dispoColor[0])}
                                    styleObject={{ width: '20%', height: heighter('color', dispoColor[0]) }}
                                    fSize={1}
                                    grCouleur={color.color}
                                />
                            )
                        })
                    }
                </View>
            </View>
        </View>
    )
}