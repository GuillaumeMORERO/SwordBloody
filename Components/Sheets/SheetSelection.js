import React, {useState, useRef} from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet, Animated } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { validationChoices } from '../../Store/Actions/InGameActions';

import Gradiator from '../Gradiator';
import TextCustom from '../TexteCustom';
import Styles from '../Styles';
import PersoList from './PersoList';
import AllPurposeAlert from '../AllPurposeAlert';

export default ({ navigation }) => {

    const fadeAnim = useRef(new Animated.Value(0)).current

    const inGameState = useSelector((state) => state.InGameRedux);

    const [display, setDisplay] = useState(false);
    const [dataAlert, setDataAlert] = useState({});

    const labelPara = () => { return (inGameState.paragraph !== '') ? `Paragraphe actuel : ${inGameState.paragraph}` : 'Memoriser un paragraphe'; };
    const labelNote = () => { return ( inGameState.inGameNotes.length > 0) ? `${inGameState.inGameNotes.filter(elm => elm.show).length} notes` : 'Notes'; };

    const paraSetter = () => {
        fadeIn();
        setDisplay(true);
        setDataAlert({'title': 'Paragraphe', 'message': 'Notez le paragraphe en cours', 'closeAlert': closeAlert, 'fct': 'Paragrapher'})
    };

    const paraNotes = () => {
        fadeIn();
        setDisplay(true);
        setDataAlert({'title': 'Notes', 'message': 'Prenez des notes !', 'closeAlert': closeAlert, 'fct': 'Noter'})
    };

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        }).start();
    };
    
    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start(() => setDisplay(false));
    };

    const closeAlert = () => { fadeOut();};

    const styles = StyleSheet.create({
        zone_button: {
            flex: 3,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems:'center',
            width: '80%',
        },
        zone_button_bas: {
            flex:2,
            justifyContent:'space-evenly',
            alignItems: 'center',
            width: '100%',
        },


    })

    return (
        <View style={Styles.select_container}>

            {display &&
                <Animated.View style={{...Styles.custom_alert, opacity: fadeAnim}}>
                    {AllPurposeAlert(dataAlert)}
                </Animated.View>
            }
            <View style={Styles.divider}>
                <View style={Styles.hrLine} />
                <TextCustom text={'Personnages'} size={4} bold />
                <View style={Styles.hrLine} />
            </View>

            {!inGameState.set && <TextCustom text={'Aucune selection'} size={4} bold /> }

            {inGameState.set > 0 &&
                <>
                    <View style={styles.zone_button}>
                        <FlatList
                            data={inGameState.team}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item}) => (
                                <PersoList perso={item} navigation={navigation} />
                            )}
                        />
                    </View>

                    <View style={styles.zone_button_bas}>
                        <View style={{flexDirection:'row'}} >
                            <Gradiator
                                label={labelPara()}
                                fct={() => paraSetter()}
                                styleObject={{width: '50%', margin: 10}}
                                fSize={2}
                            />
                            <Gradiator
                                label={labelNote()}
                                fct={() => paraNotes()}
                                styleObject={{width: '20%', margin: 10}}
                                fSize={2}
                            />
                        </View>


                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                            <TextCustom text='livre en cours : ' size={2} />
                            <TextCustom text={inGameState.book} size={3} />
                        </View>
                        <Gradiator
                            label={'Changer de livre'}
                            fct={() => navigation.navigate("Selection de base")}
                            styleObject={{width: '80%', margin: 10}}
                            fSize={2}
                        />
                    </View>
                </>
            }
            
        </View>
    )
}
