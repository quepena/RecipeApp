import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, SafeAreaView, Alert, TouchableWithoutFeedback } from 'react-native';
import { recipesList, recipeAddToFavs, recipeDeleteFromFavs } from '../actions/recipesActions';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const RecipesList = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const recipeList = useSelector(state => state.recipeList);
    const { loading, error, recipes } = recipeList;

    let { keyword } = ""

    const [recipesCategory, setRecipesCategory] = useState([]);
    const [categories, setCategories] = useState([]);

    const [categoryId, setCategoryId] = useState('');

    const [recipesSearch, setRecipesSearch] = useState([]);

    const handleClick = (e) => {
        setCategoryId(e)
    }

    useEffect(() => {
        if (keyword != null && !categoryId) {
            const fetchRecipes = async (keyword) => {
                const { data } = await axios.get(`/api/recipes?keyword=${keyword}`,);
                setRecipesSearch(data.recipes);
            }
            fetchRecipes(keyword);
        }
        else if (keyword == null && categoryId) {
            const fetchRecipesByCat = async (categoryId) => {
                const { data } = await axios.get(`/api/recipes?categoryId=${categoryId}`);
                setRecipesCategory(data.recipes);
            }
            fetchRecipesByCat(categoryId);
        } else {
            dispatch(recipesList())
            const fetchCategories = async () => {
                const { data } = await axios.get(`/api/categories`);
                setCategories(data.result);
            }
            fetchCategories();
        }
    }, [dispatch, keyword, categoryId])
    const food = [
        {
            id: 1,
            name: 'Pizza',
            difficulty: 'Medium',
            time: '150',
            servings: '2',
            calories: '720',
            photo: require('../food.jpg'),
            ingredients: '1 bla \n 2 bla \n 3 bla \n 4 bla \n 5 bla \n 6 bla \n 7 bla',
            directions: '1 bla \n 2 bla \n 3 bla \n 4 bla \n 5 bla \n 6 bla \n 7 bla'
        },
        {
            id: 2,
            name: 'Mac\'n\'cheese',
            difficulty: 'Easy',
            time: '30',
            servings: '2',
            calories: '320',
            photo: require('../food.jpg'),
            ingredients: '1 bla \n 2 bla \n 3 bla \n 4 bla \n 5 bla \n 6 bla \n 7 bla',
            directions: '1 bla \n 2 bla \n 3 bla \n 4 bla \n 5 bla \n 6 bla \n 7 bla'
        },
        {
            id: 3,
            name: 'Sushi',
            difficulty: 'Medium',
            time: '100',
            servings: '2',
            calories: '400',
            photo: require('../food.jpg'),
            ingredients: '1 bla \n 2 bla \n 3 bla \n 4 bla \n 5 bla \n 6 bla \n 7 bla',
            directions: '1 bla \n 2 bla \n 3 bla \n 4 bla \n 5 bla \n 6 bla \n 7 bla'
        },
        {
            id: 4,
            name: 'Fish and chips',
            difficulty: 'Easy',
            time: '40',
            servings: '4',
            calories: '540',
            photo: require('../food.jpg'),
            ingredients: '1 bla \n 2 bla \n 3 bla \n 4 bla \n 5 bla \n 6 bla \n 7 bla',
            directions: '1 bla \n 2 bla \n 3 bla \n 4 bla \n 5 bla \n 6 bla \n 7 bla'
        },
        {
            id: 5,
            name: 'French Fries',
            difficulty: 'Easy',
            time: '30',
            servings: '3',
            calories: '500',
            photo: require('../food.jpg'),
            ingredients: '1 bla \n 2 bla \n 3 bla \n 4 bla \n 5 bla \n 6 bla \n 7 bla',
            directions: '1 bla \n 2 bla \n 3 bla \n 4 bla \n 5 bla \n 6 bla \n 7 bla'
        },
        {
            id: 6,
            name: 'Salad Cesar',
            difficulty: 'Easy',
            time: '20',
            servings: '4',
            calories: '300',
            photo: require('../food.jpg'),
            ingredients: '1 bla \n 2 bla \n 3 bla \n 4 bla \n 5 bla \n 6 bla \n 7 bla',
            directions: '1 bla \n 2 bla \n 3 bla \n 4 bla \n 5 bla \n 6 bla \n 7 bla'
        },
        {
            id: 7,
            name: 'Fruit salad',
            difficulty: 'Easy',
            time: '20',
            servings: '2',
            calories: '330',
            photo: require('../food.jpg'),
            ingredients: '1 bla \n 2 bla \n 3 bla \n 4 bla \n 5 bla \n 6 bla \n 7 bla',
            directions: '1 bla \n 2 bla \n 3 bla \n 4 bla \n 5 bla \n 6 bla \n 7 bla'
        }
    ];

    return (
        <SafeAreaView style={styles.view}>
            <FlatList
                contentContainerStyle={{ paddingBottom: '25%' }}
                // data={recipes}
                data={recipes}
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
                            directions: item.directions
                        })
                    }>
                        <View style={styles.view}>
                            <Image source={{ uri: item.photo }} style={styles.img} />
                            <View style={styles.text}>
                                <Text style={styles.item}>{item.name}</Text>
                                <View style={styles.info}>
                                    <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                        <Icon name={'laugh'} size={11} style={{ marginRight: '4%' }} />
                                        <Text>{item.difficulty}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                        <Icon name={'hourglass'} size={11} style={{ marginRight: '4%' }} />
                                        <Text>{item.time} min</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                        <Icon name={'utensils'} size={11} style={{ marginRight: '4%' }} />
                                        <Text>{item.servings} serv</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                        <Icon name={'fire'} size={11} style={{ marginRight: '4%' }} />
                                        <Text>{item.calories} kcal</Text>
                                    </View>
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
        alignItems: 'center'
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
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: 11,
    },
});

export default RecipesList;