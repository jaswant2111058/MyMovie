// screens/MovieListScreen.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

interface Movie {
  id: number;
  title: string;
  genre: string[];
  year: number;
  plot: string;
  poster: string;
}

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => (
  <View style={styles.card}>
    <Image
      source={{ uri: movie.poster }}
      style={styles.poster}
      resizeMode="cover"
    />
    <View style={styles.movieInfo}>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.genre}>
        {movie.genre.join(', ')} | {movie.year}
      </Text>
      <Text style={styles.plot} numberOfLines={3}>
        {movie.plot}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Favorite: React.FC = () => {
  // Sample data
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      genre: ["Drama", "Crime"],
      plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      poster: "https://fakeimg.pl/220x310",
    },
    {
      id: 2,
      title: "The Godfather",
      year: 1972,
      genre: ["Drama", "Crime"],
      plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      poster: "https://fakeimg.pl/220x310",
    },
    // ... more movies
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={true}
        style={styles.scrollView}
        indicatorStyle="white" // iOS only
        scrollIndicatorInsets={{ right: 3 }} // iOS only
      >
        <View style={styles.content}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    gap: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  poster: {
    width: 120,
    height: 180,
    backgroundColor: '#F0F0F0',
  },
  movieInfo: {
    flex: 1,
    padding: 16,
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  genre: {
    fontSize: 14,
    color: '#666666',
  },
  plot: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#6366F1',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 100,
    marginTop: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Favorite;