import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    select_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'black',
        elevation: 1,
    },
    backgroundImage: {
        position: 'absolute',
        resizeMode: 'contain',
        width: '100%',
        //height: 30,
        opacity: 0.5
    },
    custom_alert: {
        position: 'absolute',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        //marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
        elevation: 4,
        backgroundColor: '#rgba(0, 0, 0, 0.9)',
    },
    back_arrow_pressable: {
        marginTop: 20,
        height: 40,
        width: '50%',
        alignSelf: 'flex-start',
        paddingLeft: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    back: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
        alignSelf: 'flex-start',
    },
    hrLine: {
        width: '30%',
        
        alignSelf:'center',
        backgroundColor: '#rgba(255, 0, 0, 0.5)',
        height: 1,
        marginHorizontal: 15,
        marginTop: 7
    },
    divider: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
    },
    border: {
        borderWidth: 1,
        borderColor: '#rgba(255, 0, 0, 0.3)',
        borderRadius: 7,
    }

});