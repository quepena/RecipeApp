import { View, Text, StyleSheet } from "react-native"

const FavoritesScreen = () => {
    return (
        <View style={styles.view}>
            <Text>FavoritesScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'white'
    },
})

export default FavoritesScreen