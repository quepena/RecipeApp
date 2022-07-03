import { View } from "react-native"
import { TextInput, StyleSheet } from "react-native"

const SearchBar = (props) => {
    return (
        <View>
            <TextInput placeholder="Search" style={styles.input} onChangeText={(keyword) => { props.onKeyword(keyword)}}>
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: '4%',
        padding: '3%',
        backgroundColor: 'gainsboro',
        borderColor: 'transparent',
        borderRadius: 20,
        fontSize: 15
    }
})

export default SearchBar