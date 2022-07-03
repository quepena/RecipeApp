import { Provider } from "react-redux";
import { store } from './store';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipesScreen from "./components/RecipesScreen";
import RecipeDetails from "./components/RecipeDetails"
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Recipes" component={RecipesScreen} options={({ title: 'Recipes' })} />
            <Stack.Screen name="RecipeDetails" component={RecipeDetails} options={({ route }) => ({
              title: route.params.name
            })} header={({ navigation }) => ({ left: <Icon name={'arrow-left'} onPress={() => { navigation.goBack() }} /> })} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
