// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import RecipesScreen from './RecipesScreen'
// import FavoritesScreen from './FavoritesScreen'
// import Ionicons from '@expo/vector-icons/Ionicons'
// import SearchBar from './SearchBar'

// const Tabbar = createBottomTabNavigator()

// const TabNavigator = () => {
//     return (
//         <Tabbar.Navigator screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//                 let iconName;

//                 if (route.name === 'Recipes') {
//                     iconName = focused
//                         ? 'ios-information-circle'
//                         : 'ios-information-circle-outline'
//                 } else if (route.name === 'Favorites') {
//                     iconName = focused ? 'ios-list' : 'ios-list'
//                 }
//                 return <Ionicons name={iconName} size={size} color={color} />;
//             },
//             tabBarActiveTintColor: 'tomato',
//             tabBarInactiveTintColor: 'gray',
//             tabBarLabelStyle: {
//                 fontSize: 15,
//                 textAlign: 'center'
//             },
//             tabBarStyle: {
//                 height: '10%',
//             }
//             // header: () => (<SearchBar />),
//             // headerStatusBarHeight: 160,
//         })}>
//             <Tabbar.Screen name="Recipes" component={RecipesScreen}></Tabbar.Screen>
//             <Tabbar.Screen name="Favorites" component={FavoritesScreen}></Tabbar.Screen>
//         </Tabbar.Navigator>
//     )
// }

// export default TabNavigator