import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
    MovieList: undefined;
    GenreSelection: undefined;
    MovieDetail: {
        movie: Movie;
    };
};

interface Movie {
  id: number;
  title: string;
  genre: string[];
  year: number;
  plot: string;
  poster: string;
}

interface MovieCardProps {
  movie: Movie;
  handlePress: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, handlePress }) => (
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
      <TouchableOpacity 
        onPress={() => handlePress(movie)}
        style={styles.button}>
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Favorite: React.FC = () => {
  const { favMovies } = useSelector((state: RootState) => state.movie);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = (item: Movie) => {
    navigation.navigate('MovieDetail', { movie: item });
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={true}
        style={styles.scrollView}
        indicatorStyle="white" // iOS only
        scrollIndicatorInsets={{ right: 3 }} // iOS only
      >
        <View style={styles.content}>
          {favMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} handlePress={handlePress} />
          ))}
        </View>
        <View style={{height:200}}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
   
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
    alignSelf: 'flex-end',
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