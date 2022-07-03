import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { recipesList } from '../actions/recipesActions';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

const RecipesList = (props) => {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const recipeList = useSelector(state => state.recipeList);
    const { loading, error, recipes } = recipeList;

    const keyword = props.keyword;

    const [recipesCategory, setRecipesCategory] = useState([]);
    const [categories, setCategories] = useState([]);

    const [categoryId, setCategoryId] = useState('');

    const [recipesSearch, setRecipesSearch] = useState([]);

    const handleClick = (e) => {
        setCategoryId(e)
    }

    useEffect(() => {
        if (keyword) {
            const fetchRecipes = async (keyword) => {
                const { data } = await axios.get(`https://recipe-book-app-react.herokuapp.com/api/recipes?keyword=${keyword}`,);
                setRecipesSearch(data.recipes);
            }
            fetchRecipes(keyword);
            setCategoryId(null)
        }
        else if (categoryId) {
            const fetchRecipesByCat = async (categoryId) => {
                const { data } = await axios.get(`https://recipe-book-app-react.herokuapp.com/api/recipes?categoryId=${categoryId}`);
                setRecipesCategory(data.recipes);
            }
            fetchRecipesByCat(categoryId);
        } else {
            dispatch(recipesList())
            const fetchCategories = async () => {
                const { data } = await axios.get(`https://recipe-book-app-react.herokuapp.com/api/categories`);
                setCategories(data.result);
            }
            fetchCategories();
        }
    }, [dispatch, keyword, categoryId])

    const renderItem = (item) =>
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
                            <Icon name={'laugh'} size={12} style={{ marginRight: '4%' }} />
                            <Text style={{ fontSize: 12 }}>{item.difficulty}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                            <Icon name={'hourglass'} size={12} style={{ marginRight: '4%' }} />
                            <Text style={{ fontSize: 12 }}>{item.time} min</Text>
                        </View>
                        <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                            <Icon name={'utensils'} size={12} style={{ marginRight: '4%' }} />
                            <Text style={{ fontSize: 12 }}>{item.servings} serv</Text>
                        </View>
                        <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                            <Icon name={'fire'} size={12} style={{ marginRight: '4%' }} />
                            <Text style={{ fontSize: 12 }}>{item.calories} kcal</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    return (
        <SafeAreaView style={{flex: 1}}>
            {keyword ?
                <View>
                    <FlatList
                        horizontal={true}
                        data={categories}
                        renderItem={({ item }) =>
                            <TouchableWithoutFeedback onPress={() => handleClick(item.id)}>
                                <View style={{display: 'flex', flexWrap: 'wrap', margin: 5, backgroundColor: 'gainsboro', borderColor: 'gainsboro', borderRadius: 10, padding: 5}}>
                                    <Text style={styles.item}>{item.name}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        }
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                    <FlatList
                        contentContainerStyle={{ paddingBottom: '25%' }}
                        data={recipesSearch}
                        renderItem={({ item }) => renderItem(item)}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                : categoryId ?
                    <View>
                        <FlatList
                            horizontal={true}
                            data={categories}
                            renderItem={({ item }) =>
                                <TouchableWithoutFeedback onPress={() => handleClick(item.id)}>
                                    <View style={{display: 'flex', flexWrap: 'wrap', margin: 5, backgroundColor: 'gainsboro', borderColor: 'gainsboro', borderRadius: 10, padding: 5}}>
                                        <Text style={styles.item}>{item.name}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            }
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                        <FlatList
                            contentContainerStyle={{ paddingBottom: '25%' }}
                            data={recipesCategory}
                            renderItem={({ item }) => renderItem(item)}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                    </View> :
                    <View>
                        <FlatList
                            horizontal={true}
                            data={categories}
                            renderItem={({ item }) =>
                                <TouchableWithoutFeedback onPress={() => handleClick(item.id)}>
                                    <View style={{display: 'flex', flexWrap: 'wrap', margin: 5, backgroundColor: 'gainsboro', borderColor: 'gainsboro', borderRadius: 10, padding: 5}}>
                                        <Text style={styles.item}>{item.name}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            }
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                        <FlatList
                            contentContainerStyle={{ paddingBottom: '10%' }}
                            data={recipes}
                            renderItem={({ item }) => renderItem(item)}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
            }
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