import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Image, SafeAreaView, Alert, TouchableWithoutFeedback } from 'react-native';
import { recipesList, recipeAddToFavs, recipeDeleteFromFavs } from '../actions/recipesActions';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';

const RecipesList = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const recipeList = useSelector(state => state.recipeList);
    const { loading, error, recipes } = recipeList;

    const food = [
        {
            id: 1,
            name: 'Pizza',
            difficulty: 'Medium',
            time: '150 minutes',
            servings: '2',
            calories: '720 kcal',
            photo: require('../food.jpg'),
            ingredients: '1 bla \n 2 bla \n 3 bla',
            directions: '1 bla \n 2 bla \n 3 bla'
        },
        {
            id: 2,
            name: 'Mac\'n\'cheese',
            difficulty: 'Easy',
            time: '30 minutes',
            servings: '2',
            calories: '320 kcal',
            photo: require('../food.jpg'),
            ingredients: '1 bla \n 2 bla \n 3 bla',
            directions: '1 bla \n 2 bla \n 3 bla'
        },
        {
            id: 3,
            name: 'Sushi',
            difficulty: 'Medium',
            time: '100 minutes',
            servings: '2',
            calories: '400 kcal',
            photo: require('../food.jpg'),
            ingredients: '1 bla \n 2 bla \n 3 bla',
            directions: '1 bla \n 2 bla \n 3 bla'
        },
        {
            id: 4,
            name: 'Fish and chips',
            difficulty: 'Easy',
            time: '40 minutes',
            servings: '4',
            calories: '540 kcal',
            photo: require('../food.jpg'),
            ingredients: '1 bla \n 2 bla \n 3 bla',
            directions: '1 bla \n 2 bla \n 3 bla'
        },
        {
            id: 5,
            name: 'French Fries',
            difficulty: 'Easy',
            time: '30 minutes',
            servings: '3',
            calories: '500 kcal',
            photo: require('../food.jpg'),
            ingredients: '1 bla \n 2 bla \n 3 bla',
            directions: '1 bla \n 2 bla \n 3 bla'
        },
        {
            id: 6,
            name: 'Salad Cesar',
            difficulty: 'Easy',
            time: '20 minutes',
            servings: '4',
            calories: '300 kcal',
            photo: require('../food.jpg'),
            ingredients: '1 bla \n 2 bla \n 3 bla',
            directions: '1 bla \n 2 bla \n 3 bla'
        },
        {
            id: 7,
            name: 'Fruit salad',
            difficulty: 'Easy',
            time: '20 minutes',
            servings: '2',
            calories: '330 kcal',
            photo: require('../food.jpg'),
            ingredients: '1 bla \n 2 bla \n 3 bla',
            directions: '1 bla \n 2 bla \n 3 bla'
        }
    ];

    return (
        <SafeAreaView style={styles.view}>
            <FlatList
                contentContainerStyle={{ paddingBottom: '25%' }}
                // data={recipes}
                data={food}
                renderItem={({ item }) =>
                    <TouchableWithoutFeedback onPress={() =>
                        navigation.navigate('RecipeDetails', { 
                            name: item.name, 
                            difficulty: item.difficulty, 
                            time: item.time, 
                            servings: item.servings, 
                            calories: item.calories, 
                            photo: item.photo, 
                            ingredients: item.ingredients, 
                            directions: item.directions })
                    }>
                        <View style={styles.view}>
                            {/* <Image source={{uri: photo}} style={styles.img} /> */}
                            <Image source={item.photo} style={styles.img} />
                            <View style={styles.text}>
                                <Text style={styles.item}>{item.name}</Text>
                                <View style={styles.info}>
                                    <Text>{item.difficulty}</Text>
                                    <Text>{item.time}</Text>
                                    <Text>{item.servings}</Text>
                                    <Text>{item.calories}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                }
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
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
    },
    text: {
        display: 'flex',
        flexDirection: 'column'
    },
    item: {

        fontSize: 18,

    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});

export default RecipesList;