import { View } from "react-native"
import { TextInput, StyleSheet } from "react-native"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"

const SearchBar = (props) => {
    // const navigation = useNavigation();
    const [keyword, setKeyword] = useState('')

    // console.log(keyword);

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