import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    image: {
        margin: width * 0.03,
        width: width * 0.22,
        height: width * 0.2
    },
    image_text: {
        width: width * 0.3,
        fontSize: width * 0.045,
        textAlign: 'center'
    }
});

