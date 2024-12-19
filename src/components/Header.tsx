// components/Header.tsx
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Home, Heart } from 'lucide-react-native';



interface HeaderProps {
    title: string;
    showBack?: boolean;
    showHomeIcon?: boolean;
    showFavoriteIcon?: boolean;
}

const Header: React.FC<HeaderProps> = ({
    title,
    showBack = false,
    showFavoriteIcon = false,
}) => {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    {showBack && (
                        <TouchableOpacity
                            onPress={() => { navigation.goBack() }}
                            style={styles.iconButton}
                        >
                            <Text style={styles.backIcon}>←</Text>
                        </TouchableOpacity>
                    )}
                </View>

                <View style={styles.centerContainer}>

                    <View
                        style={styles.homeButton}
                    >
                        {title === "Favorite" ?
                            <Home
                                size={24}
                                color={'#000000'}
                            /> :
                            <Heart
                                size={24}
                                color={'#000000'}
                            />
                        }
                        <Text style={styles.title}>{title === "Favorite" ? "Favorite Movies" : "My Movies"}</Text>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    container: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
    },
    leftContainer: {
        width: 40,
        alignItems: 'flex-start',
    },
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rightContainer: {
        width: 40,
        alignItems: 'flex-end',
    },
    iconButton: {
        padding: 8,
    },
    homeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
    },
    titleOnly: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
    },
    backIcon: {
        fontSize: 24,
        color: '#000000',
    },
    homeIcon: {
        fontSize: 20,
    },
    favoriteIcon: {
        fontSize: 24,
        color: '#000000',
    },
});

export default Header;