import React from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import * as RootNavigation from '../navigation/RootNavigation';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => RootNavigation.navigatioRef('Globomantics')}
            >
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                //onPress={() => RootNavigation.navigatioRef('Globomantics')}
            >
                <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                //onPress={() => RootNavigation.navigatioRef('Globomantics')}
            >
                <Text>Quote</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                //onPress={() => RootNavigation.navigatioRef('Globomantics')}
            >
                <Text>Catalog</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    btn: {
        padding: 20
    }
});

export default Footer;