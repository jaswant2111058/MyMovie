import { useRoute, RouteProp } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { RootState } from '../redux/store';
import { addToFavorites, removeFromFavorites } from '../redux/reducer/movieSlice';

type RootStackParamList = {
  MovieDetail: {
    movie: Movie;
  };
};

interface Movie {
  id: number;  // Added id as it's needed for favorites
  title: string;
  plot: string;
  year: number;
  genre: string[];
  poster: string;
}

const MovieDetail: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'MovieDetail'>>();
  const { movie } = route.params;
  const dispatch = useDispatch();
  const favMovies = useSelector((state: RootState) => state.movie.favMovies);

  const toggleFavorite = (movie: Movie) => {
    if (isFav(movie)) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  }

  const isFav = (movie: Movie): boolean => {
    return favMovies.some(favMovie => favMovie.id === movie.id);
  }

  return (
    <View style={styles.container}>
      <ScrollView>    
        <View style={styles.posterContainer}>
          <Image
            source={{ uri: movie.poster }}
            style={styles.poster}
            resizeMode="cover"
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.plot}>{movie.plot}</Text>
          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Year of Release:</Text>
              <Text style={styles.detailValue}>{movie.year}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Genre:</Text>
              <Text style={styles.detailValue}>
                {movie.genre.join(', ')}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.nextButton]}
          onPress={() => toggleFavorite(movie)}
        >
          <Text style={styles.nextButtonText}>
            {`Mark as ${isFav(movie) ? "Unfavorite" : "Favorite"}`}
          </Text>
        </TouchableOpacity>
        <View style={{ height: 200 }}></View>
      </ScrollView>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  posterContainer: {
    width: width,
    height: width-100,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F0F0F0',
  },
  poster: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  plot: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 24,
    marginBottom: 24,
  },
  detailsContainer: {
    gap: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 16,
    color: '#666666',
  },
  detailValue: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
  },
  nextButton: {
    width: '95%',
    height: 50,
    backgroundColor: '#6366F1',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:"auto",
    marginRight:"auto"

  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MovieDetail;