import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
} from 'react-native';

const macbook = require('./mackbook.jpg');


const StylingReactNativeComponent = () => {
    return (
        <View>
            <Text style={styles.text}>Styling Component</Text>
            <View
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: '#0abde3',
                    borderWidth: 2,
                    borderColor: '#5f27cd',
                    marginTop: 20,
                    marginLeft: 20,
                }}
            />
            <Image
                source={macbook}
                style={{ width: 100, height: 100, marginTop: 20, marginLeft: 20 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#10ac84',
        marginLeft: 20,
        marginTop: 40,
    },
});

export default StylingReactNativeComponent;
