import { View, Text, Image } from 'react-native';
import { styles } from './GameModeOption.styles';

const GameModeOption = ({ imageSource, title, subtitle }) => (
    <View>
        <Image style={styles.image} source={imageSource} />
        <Text style={styles.image_text}>{title}</Text>
        {subtitle && <Text style={styles.image_text}>{subtitle}</Text>}
    </View>
);

export default GameModeOption;