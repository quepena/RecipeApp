import { View, Text, StyleSheet } from "react-native"
import RecipesList from "./RecipesList"
import SearchBar from "./SearchBar"

const RecipesScreen = () => {
    return (
        <View style={styles.view}>
            <SearchBar/>
            <RecipesList/>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'white'
    },
})

export default RecipesScreen