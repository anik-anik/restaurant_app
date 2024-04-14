import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DashboardScreen, HomeScreen } from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Home'
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name='Home' component={HomeScreen} />
					<Stack.Screen
						name='Dashboard'
						component={DashboardScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</GestureHandlerRootView>
	);
};

export default App;
