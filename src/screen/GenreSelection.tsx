import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
    MovieList: undefined;
    GenreSelection: undefined;
};

interface GenreSelectionScreenProps {
  onNext?: (selectedGenres: string[]) => void;
}

const GenreSelection: React.FC<GenreSelectionScreenProps> = (  ) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi'];

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  
      const handleNext = () => {
          navigation.navigate("MovieList")
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

        <Text style={styles.title}>Select Your Favorite{'\n'}Genres</Text>
    
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
        <TouchableOpacity
          style={[
            styles.nextButton,
          ]}
          onPress={handleNext}
          disabled={selectedGenres.length === 0}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#FFFFFF',
  },
  content: {
   
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginTop:100,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 100
  },
  icon: {

    height: 40,
    width: 30

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
   
    marginTop:100,
   
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GenreSelection;