import { View, Text, Button, Image, StyleSheet, ScrollView, ImageBackground, Dimensions } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";

const RecipeDetails = () => {
    const route = useRoute();

    return (
        <View>
            <ScrollView>
                <ImageBackground source={route.params.photo} style={{ height: 0.45 * Dimensions.get("window").height }} />
                <View styles={styles.details}>
                    <Text>{route.params.name}</Text>
                    <View style={styles.info}>
                        <Text>{route.params.difficulty}</Text>
                        <Text>{route.params.time}</Text>
                        <Text>{route.params.servings}</Text>
                        <Text>{route.params.calories}</Text>
                    </View>
                    <Text>{route.params.ingredients}</Text>
                    <Text>{route.params.directions}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        height: 300,
        width: 300,
        borderRadius: 50,
        margin: '3%',
        marginTop: -45,
    },
    details: {
        borderRadius: 30,
        backgroundColor: 'red'
        // marginTop: -5,
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

export default RecipeDetails