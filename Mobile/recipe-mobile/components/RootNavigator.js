import { NavigationContainer } from '@react-navigation/native'
import Tabbar from './Tabbar'

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Tabbar/>
        </NavigationContainer>
    )
}

export default RootNavigator