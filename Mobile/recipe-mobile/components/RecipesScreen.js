import { useState } from "react"
import { View, StyleSheet } from "react-native"
import RecipesList from "./RecipesList"
import SearchBar from "./SearchBar"

const RecipesScreen = () => {
    const [event, setEvent] = useState('')

    const handleSearch = event => {
        setEvent(event)
    }

    return (
        <View style={styles.view}>
            <SearchBar onKeyword={handleSearch}/>
            <RecipesList keyword={event}/>
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