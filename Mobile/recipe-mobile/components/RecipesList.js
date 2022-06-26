import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Image, SafeAreaView, Alert, TouchableWithoutFeedback } from 'react-native';
import { recipesList, recipeAddToFavs, recipeDeleteFromFavs } from '../actions/recipesActions';
import { useDispatch, useSelector } from "react-redux";

const RecipesList = () => {
    const dispatch = useDispatch();

    const recipeList = useSelector(state => state.recipeList);
    const { loading, error, recipes } = recipeList;

    const { favs } = useSelector(state => state.favReducer);

    useEffect(() => {
        dispatch(recipesList());
    }, [dispatch])

    const addToFavs = recipe => dispatch(addBookmark(recipe));
    const removeFromFavs = recipe => dispatch(removeBookmark(recipe));

    const handleAddFavs = recipe => {
        addToFavs(recipe);
    };

    const handleRemoveFavs = recipe => {
        removeFromFavs(recipe);
    };

    const ifExists = recipe => {
        if (favs.filter(item => item.id === recipe.id).length > 0) {
            return true;
        }

        return false;
    };

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

    const ItemRender = ({ id, name, difficulty, time, servings, calories, photo }) => (
        // <TouchableWithoutFeedback onPress={() => getItem(name)}>
        <TouchableWithoutFeedback onPress={ifExists(getItem(id)) ? handleRemoveBookmark(getItem(id)) : handleAddBookmark(getItem(id))}>
            <View style={styles.view}>
                {/* <Image source={{uri: photo}} style={styles.img} /> */}
                <Image source={require('../food.jpg')} style={styles.img} />
                <View style={styles.text}>
                    <Text style={styles.item}>{name}</Text>
                    <View style={styles.info}>
                        <Text>{difficulty}</Text>
                        <Text>{time}</Text>
                        <Text>{servings}</Text>
                        <Text>{calories}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );

    return (
        <SafeAreaView style={styles.view}>
            <FlatList
                contentContainerStyle={{ paddingBottom: '25%' }}
                // data={recipes}
                data={food}
                renderItem={({ item }) =>
                    <ItemRender
                        id={item.id}
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