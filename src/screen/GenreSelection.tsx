// GenreSelectionScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

interface GenreSelectionScreenProps {
  onNext?: (selectedGenres: string[]) => void;
}

const GenreSelection: React.FC<GenreSelectionScreenProps> = ({ onNext }) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi'];

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const handleNext = () => {
    if (onNext && selectedGenres.length > 0) {
      onNext(selectedGenres);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Movie Icon */}
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>🎬</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>Select Your Favorite{'\n'}Genres</Text>

        {/* Genres Grid */}
        <View style={styles.genresContainer}>
          {genres.map((genre) => (
            <TouchableOpacity
              key={genre}
              style={[
                styles.genreButton,
                selectedGenres.includes(genre) && styles.genreButtonSelected,
              ]}
              onPress={() => toggleGenre(genre)}
            >
              <Text
                style={[
                  styles.genreText,
                  selectedGenres.includes(genre) && styles.genreTextSelected,
                ]}
              >
                {genre}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Next Button */}
        <TouchableOpacity 
          style={[
            styles.nextButton,
            selectedGenres.length === 0 && styles.nextButtonDisabled
          ]}
          onPress={handleNext}
          disabled={selectedGenres.length === 0}
        >
          <Text style={styles.nextButtonText}>Next</Text>
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
    marginBottom: 48,
    textAlign: 'center',
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 48,
  },
  genreButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
  },
  genreButtonSelected: {
    backgroundColor: '#6366F1',
    borderColor: '#6366F1',
  },
  genreText: {
    fontSize: 16,
    color: '#000000',
  },
  genreTextSelected: {
    color: '#FFFFFF',
  },
  nextButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#6366F1',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 48,
  },
  nextButtonDisabled: {
    opacity: 0.5,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GenreSelection;