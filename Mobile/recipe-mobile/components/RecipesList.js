import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RecipesList = () => {
    return (
        <FlatList
            data={[
                { key: 'Devin' },
                { key: 'Dan' },
                { key: 'Dominic' },
                { key: 'Jackson' },
                { key: 'James' },
                { key: 'Joel' },
                { key: 'John' },
                { key: 'Jillian' },
                { key: 'Jimmy' },
                { key: 'Jul' },
                { key: 'Dev' },
                { key: 'Da' },
                { key: 'Doic' },
                { key: 'Jaon' },
                { key: 'Jas' },
                { key: 'Jol' },
                { key: 'Jn' },
                { key: 'Jlian' },
                { key: 'Jmy' },
                { key: 'Jlie' },
            ]}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.view}>
                    <Image source={require("../food.jpg")} style={styles.img} />
                    <Text style={styles.item}>{item.key}</Text>
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({
    img: {
        height: 70,
        width: 70,
        borderRadius: 50,
        margin: '3%'
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        margin: '3%'
    },
});

export default RecipesList;