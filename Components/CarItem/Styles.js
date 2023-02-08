import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'cover',
    },
    titles: {
        marginTop: '30%',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: '500'
    },
    subTitle: {
        fontSize: 16,
        color: '#5c5e62',
    },
    buttons: {
        padding: 10,
        position: 'absolute',
        bottom: 50,
        width: '100%'
    },
    buttonOne: {
        backgroundColor: '#171A20CC',
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButtonOne: {
        fontSize: 12,
        fontWeight: '500',
        color: '#fff'
    },
    buttonTow: {
        backgroundColor: '#fff',
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    textButtonTow: {
        fontSize: 12,
        fontWeight: '500',
        color: '#171A20CC'
    },
});

export default styles;