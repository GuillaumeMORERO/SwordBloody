import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    select_container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'black',
        elevation: 1
    },
    backgroundImage: {
        position: 'absolute',
        resizeMode: 'contain',
        width: '50%', 
        height: '50%',
        opacity: 0.3
    },
    custom_alert : {
        position: 'absolute',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
        elevation: 4,
        backgroundColor : '#rgba(0, 0, 0, 0.8)',
    },
});