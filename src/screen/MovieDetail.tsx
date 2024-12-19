import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';

interface MovieDetailProps {
  movie: {
    title: string;
    plot: string;
    year: number;
    genre: string[];
    poster: string;
  };
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Poster Image */}
        <View style={styles.posterContainer}>
          <Image
            source={{ uri: movie.poster }}
            style={styles.poster}
            resizeMode="cover"
          />
        </View>

        {/* Movie Info */}
        <View style={styles.infoContainer}>
          {/* Title */}
          <Text style={styles.title}>{movie.title}</Text>

          {/* Plot */}
          <Text style={styles.plot}>{movie.plot}</Text>

          {/* Details */}
          <View style={styles.detailsContainer}>
            {/* Release Year */}
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Year of Release:</Text>
              <Text style={styles.detailValue}>{movie.year}</Text>
            </View>

            {/* Genre */}
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Genre:</Text>
              <Text style={styles.detailValue}>
                {movie.genre.join(', ')}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  posterContainer: {
    width: width,
    height: width * 1.2,
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
});

export default MovieDetail
