import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RecipesScreen from './RecipesScreen'
import FavoritesScreen from './FavoritesScreen'

const Tabbar = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <Tabbar.Navigator>
            <Tabbar.Screen name="RecipesScreen" component={RecipesScreen}></Tabbar.Screen>
            <Tabbar.Screen name="FavoritesScreen" component={FavoritesScreen}></Tabbar.Screen>
        </Tabbar.Navigator>
    )
}

export default TabNavigator