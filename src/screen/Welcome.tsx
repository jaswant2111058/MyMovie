import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { COLORS } from '../utils/colors';

type RootStackParamList = {
    MovieList: undefined;
    GenreSelection: undefined;
};

interface WelcomeScreenProps {
    onNext?: (name: string) => void;
}

const Welcome: React.FC<WelcomeScreenProps> = () => {
    const [name, setName] = useState<string>('');
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    const handleNext = () => {
        navigation.navigate("GenreSelection")
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <Image 
                        source={require("../assets/Vector.png")}
                        style={styles.icon}
                    />
                </View>
                <Text style={styles.title}>Welcome to My Movies</Text>
                <Text style={styles.subtitle}>Let's get to know you!</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Your Name"
                    placeholderTextColor="#A0A0A0"
                    value={name}
                    onChangeText={setName}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleNext}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        paddingHorizontal: 10,
        marginTop: 100,
    },
    iconContainer: {

        flexDirection:"row",
        justifyContent:"center",
        marginBottom:100
    },
    icon: {

        height:40,
        width:30
       
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: '#666666',
        marginBottom: 48,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 56,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000000',
        marginBottom: 24,
        marginTop:30
    },
    button: {
        width: '100%',
        height: 56,
        backgroundColor: COLORS.primary,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Welcome;