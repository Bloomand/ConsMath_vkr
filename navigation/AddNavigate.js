import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../components/Main';
import Precise from '../screens/PreciseMenu/Precise';
import Estimation from '../screens/EstimationMenu/Estimation';
import Context from '../screens/MathInContextMenu/Context';
import RankedGame from '../screens/PreciseRankedGame/RankedGame';
import EndlessGame from '../components/Precise/EndlessGame';
import RankedGameEst from '../screens/EstimationRankedGame/RankedGameEst';
import EndlessGameEst from '../screens/EstimationEndlessGame/EndlessGameEst';
import RankedGameCont from '../components/Context/RankedGameCont';
import EndlessGameCont from '../screens/MathInContextEndlessGame/EndlessGameCont';
import Registr from '../screens/Registration/Registr';
import Login from '../screens/Login/Login';


const Stack = createNativeStackNavigator();

const AddNavigate = () => (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registr} />
            <Stack.Screen name="Home" component={Main} options={{ title: ' ' }}
            />
            <Stack.Screen name="Precise" component={Precise} />
            <Stack.Screen name="Estimation" component={Estimation} />
            <Stack.Screen name="Context" component={Context} />
            <Stack.Screen name="RankedGame" component={RankedGame} options={{ title: 'Ranked Game' }} />
            <Stack.Screen name="EndlessGame" component={EndlessGame} options={{ title: 'Endless Game' }}/>
            <Stack.Screen name="RankedGameEst" component={RankedGameEst} options={{ title: 'Ranked Game' }} />
            <Stack.Screen name="EndlessGameEst" component={EndlessGameEst} options={{ title: 'Endless Game' }}/>
            <Stack.Screen name="RankedGameCont" component={RankedGameCont} options={{ title: 'Ranked Game' }} />
            <Stack.Screen name="EndlessGameCont" component={EndlessGameCont} options={{ title: 'Endless Game' }}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default AddNavigate