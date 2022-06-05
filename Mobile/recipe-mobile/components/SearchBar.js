import { View } from "react-native"
import { TextInput, StyleSheet } from "react-native"

const SearchBar = () => {
    return (
        <View>
            <TextInput placeholder="Search" style={styles.input}>
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 10,
        height: "38%",
        margin: '3%',
        paddingLeft: '4%',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 2,
        shadowRadius: 2,
        elevation: 1,
    }
})

export default SearchBar