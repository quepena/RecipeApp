import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Image, SafeAreaView, Alert, TouchableWithoutFeedback } from 'react-native';
import { recipesList } from '../actions/recipesActions';
import { useDispatch, useSelector } from "react-redux";

const RecipesList = () => {
    const dispatch = useDispatch();

    const recipeList = useSelector(state => state.recipeList);
    const { loading, error, recipes } = recipeList;

    useEffect(() => {
        dispatch(recipesList());
    }, [dispatch])

    console.log(recipes)

    const food = [
        {
            id: 1,
            name: 'Pizza',
            difficulty: 'Medium',
            time: '150 minutes',
            servings: '2',
            calories: '720 kcal',
        },
        {
            id: 2,
            name: 'Mac\'n\'cheese',
            difficulty: 'Easy',
            time: '30 minutes',
            servings: '2',
            calories: '320 kcal',
        },
        {
            id: 3,
            name: 'Sushi',
            difficulty: 'Medium',
            time: '100 minutes',
            servings: '2',
            calories: '400 kcal',
        },
        {
            id: 4,
            name: 'Fish and chips',
            difficulty: 'Easy',
            time: '40 minutes',
            servings: '4',
            calories: '540 kcal',
        },
        {
            id: 5,
            name: 'French Fries',
            difficulty: 'Easy',
            time: '30 minutes',
            servings: '3',
            calories: '500 kcal',
        },
        {
            id: 6,
            name: 'Salad Cesar',
            difficulty: 'Easy',
            time: '20 minutes',
            servings: '4',
            calories: '300 kcal',
        },
        {
            id: 7,
            name: 'Fruit salad',
            difficulty: 'Easy',
            time: '20 minutes',
            servings: '2',
            calories: '330 kcal',
        }
    ];

    const getItem = (name) => {
        Alert.alert(name);
    }

    const ItemRender = ({ name, difficulty, time, servings, calories, photo }) => (
        <TouchableWithoutFeedback onPress={() => getItem(name)}>
            <View style={styles.view}>
                <Image source={{uri: photo}} style={styles.img} />
                <Text style={styles.text}>
                    <Text style={styles.item}>{name}</Text>
                    <Text style={styles.info}>
                        <Text>{difficulty}</Text>
                        <Text>{time}</Text>
                        <Text>{servings}</Text>
                        <Text>{calories}</Text>
                    </Text>
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );

    return (
        <SafeAreaView style={styles.view}>
            <FlatList
                contentContainerStyle={{ paddingBottom: '25%' }}
                data={recipes}
                renderItem={({ item }) =>
                    <ItemRender
                        name={item.name}
                        difficulty={item.difficulty}
                        time={item.time}
                        servings={item.servings}
                        calories={item.calories}
                        photo={item.photo}
                    />}
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
        justifyContent: 'space-between',
    },
    text: {
        display: 'flex',
        flexDirection: 'column'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        margin: '3%'
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});

export default RecipesList;