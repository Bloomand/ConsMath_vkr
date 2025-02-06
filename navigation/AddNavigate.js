import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegistrationScreen from '../screens/Authorization/RegistrationScreen/RegistrationScreen';
import LoginScreen from '../screens/Authorization/LoginScreen/LoginScreen';
import MainMenuScreen from '../screens/MainMenuScreen/MainMenuScreen';

import PreciseMenuScreen from '../screens/Precise/Menu/PreciseMenuScreen';
import PreciseRankedGameScreen from '../screens/Precise/RankedGame/PreciseRankedGameScreen';
import PreciseEndlessGameScreen from '../screens/Precise/EndlessGame/PreciseEndlessGameScreen';

import EstimationMenuScreen from '../screens/Estimation/Menu/EstimationMenuScreen';
import EstimationRankedGameScreen from '../screens/Estimation/RankedGame/EstimationRankedGameScreen';
import EstimationEndlessGameScreen from '../screens/Estimation/EndlessGame/EstimationEndlessGameScreen';

import MathInContextMenuScreen from '../screens/MathInContext/Menu/MathInContextMenuScreen';
import MathInContextRankedGameScreen from '../screens/MathInContext/RankedGame/MathInContextRankedGameScreen';
import MathInContextEndlessGameScreen from '../screens/MathInContext/EndlessGame/MathInContextEndlessGameScreen';


const Stack = createNativeStackNavigator();

const AddNavigate = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Home" component={MainMenuScreen} options={{ title: ' ' }} />
            <Stack.Screen name="Precise" component={PreciseMenuScreen} />
            <Stack.Screen name="Estimation" component={EstimationMenuScreen} />
            <Stack.Screen name="MathInContext" component={MathInContextMenuScreen} />
            <Stack.Screen name="RankedGamePrecise" component={PreciseRankedGameScreen} options={{ title: 'Ranked Game' }} />
            <Stack.Screen name="EndlessGamePrecise" component={PreciseEndlessGameScreen} options={{ title: 'Endless Game' }} />
            <Stack.Screen name="RankedGameEstimation" component={EstimationRankedGameScreen} options={{ title: 'Ranked Game' }} />
            <Stack.Screen name="EndlessGameEstimation" component={EstimationEndlessGameScreen} options={{ title: 'Endless Game' }} />
            <Stack.Screen name="RankedGameMathInContext" component={MathInContextRankedGameScreen} options={{ title: 'Ranked Game' }} />
            <Stack.Screen name="EndlessGameMathInContext" component={MathInContextEndlessGameScreen} options={{ title: 'Endless Game' }} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default AddNavigate;