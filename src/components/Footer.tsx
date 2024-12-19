// components/Footer.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Home, Heart } from 'lucide-react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Define your navigation routes type
type RootStackParamList = {
  MovieList: undefined;
  Favorite: undefined;
};

interface FooterProps {
  activeTab: string;
}

const Footer: React.FC<FooterProps> = ({
  activeTab
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.tab} 
        onPress={() => navigation.navigate('MovieList')}
      >
        <Home 
          size={24} 
          color={activeTab === 'MovieList' ? '#6366F1' : '#000000'} 
          strokeWidth={activeTab === 'MovieList' ? 2.5 : 2}
        />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tab} 
        onPress={() => navigation.navigate('Favorite')}
      >
        <Heart 
          size={24} 
          color={activeTab === 'Favorite' ? '#6366F1' : '#000000'} 
          strokeWidth={activeTab === 'Favorite' ? 2.5 : 2}
          fill={activeTab === 'Favorite' ? '#6366F1' : 'transparent'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Footer;