import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList, Image, TouchableWithoutFeedback} from 'react-native';

const Homepage = ({navigation}) => {
    const [dataLoading, finishLoading] = useState(true);
    const [newsData, setData] = useState([]);

    useEffect(() =>{
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then((response) => response.json())
            .then((responseJson) => setData(responseJson))
            .catch((error) => console.error(error))
            .finally(() => finishLoading(false));
    },[]);

    const storyItem = ({item}) => {
        return(
            <TouchableWithoutFeedback
                onPress={() => 
                    navigation.navvigate('NewsDetail', {url:item.url})
                }
                >
                    <View>
                        <Text></Text>
                    </View>
                </TouchableWithoutFeedback>
        );
    };
    return (
        <View style={styles.container}>
            <Text>This will be our Homepage</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Homepage;