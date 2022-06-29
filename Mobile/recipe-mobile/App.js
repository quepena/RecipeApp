import RootNavigator from "./components/RootNavigator";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipesScreen from "./components/RecipesScreen";
import RecipeDetails from "./components/RecipeDetails";
import { Button } from "react-native";
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
          {/* <PersistGate loading={null} persistor={persistor}>
          <RootNavigator />
        </PersistGate> */}
        </NavigationContainer>
      </Provider>
    </>
  );
}
