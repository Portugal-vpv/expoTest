import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from '../../assets/images/poke.jpg';

const Header = (props) => {
    return(
        <View style={styles.header}>
            <Image source={logo} style={{width: 35, height: 35}}/>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    textWrapper: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: '600'
    }
   
});

export default Header;