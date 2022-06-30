import { View, Text, Button, Image, StyleSheet, ScrollView, ImageBackground, Dimensions } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const RecipeDetails = () => {
    const route = useRoute();

    return (
        <View>
            <ScrollView>
                <ImageBackground source={{uri: route.params.photo}} style={{ height: 0.45 * Dimensions.get("window").height }} />
                <View style={{ width: 0.95 * Dimensions.get("window").width, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <Text style={styles.name}>{route.params.name}</Text>
                        <View style={styles.info}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name={'laugh'} size={16} style={{ marginRight: '4%' }} />
                                <Text>{route.params.difficulty}</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name={'hourglass'} size={16} style={{ marginRight: '4%' }} />
                                <Text>{route.params.time} minutes</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name={'utensils'} size={16} style={{ marginRight: '4%' }} />
                                <Text>{route.params.servings} servings</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name={'fire'} size={16} style={{ marginRight: '4%' }} />
                                <Text>{route.params.calories} kcal</Text>
                            </View>
                        </View>
                        <Text style={styles.instruction}>Ingredients:</Text>
                        <Text style={styles.instructionItem}>{route.params.ingredients}</Text>
                        <Text style={styles.instruction}>Direcitons:</Text>
                        <Text style={styles.instructionItem}>{route.params.directions}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 28,
        textAlign: "center",
        margin: 20,
        fontWeight: '600'
    },
    details: {
        borderTopWidth: 1,
        borderTopRadius: 30,
        borderTopColor: 'red'
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: 20,
    },
    instruction: {
        marginLeft: '2%',
        marginTop: '5%',
        fontSize: 20,
        fontWeight: '600',
    },
    instructionItem: {
        marginLeft: '2%',
        marginTop: '2%',
        fontSize: 17,
    }
});

export default RecipeDetails