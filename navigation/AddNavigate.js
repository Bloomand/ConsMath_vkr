import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../screens/MainMenuScreen/Main';
import Precise from '../screens/PreciseMenuScreen/Precise';
import Estimation from '../screens/EstimationMenuScreen/Estimation';
import Context from '../screens/MathInContextMenuScreen/Context';
import RankedGame from '../screens/PreciseRankedGameScreen/RankedGame';
import EndlessGame from '../screens/PreciseEndlessGameScreen/EndlessGame';
import RankedGameEst from '../screens/EstimationRankedGameScreen/RankedGameEst';
import EndlessGameEst from '../screens/EstimationEndlessGameScreen/EndlessGameEst';
import RankedGameCont from '../screens/MathInContextRankedGameScreen/RankedGameCont';
import EndlessGameCont from '../screens/MathInContextEndlessGameScreen/EndlessGameCont';
import Registr from '../screens/RegistrationScreen/Registr';
import Login from '../screens/LoginScreen/Login';


const Stack = createNativeStackNavigator();

const AddNavigate = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registration" component={Registr} />
            <Stack.Screen name="Home" component={Main} options={{ title: ' ' }} />
            <Stack.Screen name="Precise" component={Precise} />
            <Stack.Screen name="Estimation" component={Estimation} />
            <Stack.Screen name="Context" component={Context} />
            <Stack.Screen name="RankedGame" component={RankedGame} options={{ title: 'Ranked Game' }} />
            <Stack.Screen name="EndlessGame" component={EndlessGame} options={{ title: 'Endless Game' }} />
            <Stack.Screen name="RankedGameEst" component={RankedGameEst} options={{ title: 'Ranked Game' }} />
            <Stack.Screen name="EndlessGameEst" component={EndlessGameEst} options={{ title: 'Endless Game' }} />
            <Stack.Screen name="RankedGameCont" component={RankedGameCont} options={{ title: 'Ranked Game' }} />
            <Stack.Screen name="EndlessGameCont" component={EndlessGameCont} options={{ title: 'Endless Game' }} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default AddNavigate;