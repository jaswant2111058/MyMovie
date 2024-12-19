import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

interface WelcomeScreenProps {
  onNext?: (name: string) => void;
}

const Welcome: React.FC<WelcomeScreenProps> = ({ onNext }) => {
  const [name, setName] = useState<string>('');

  const handleNext = () => {
    if (onNext) {
      onNext(name);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Movie Icon */}
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>🎬</Text>
        </View>

        {/* Welcome Text */}
        <Text style={styles.title}>Welcome to My Movies</Text>
        <Text style={styles.subtitle}>Let's get to know you!</Text>

        {/* Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#A0A0A0"
          value={name}
          onChangeText={setName}
        />

        {/* Next Button */}
        <TouchableOpacity 
          style={styles.button}
          onPress={handleNext}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 32,
  },
  icon: {
    fontSize: 48,
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
  },
  button: {
    width: '100%',
    height: 56,
    backgroundColor: '#6366F1', // Purple color from the image
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