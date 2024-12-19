// screens/MovieListScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Search } from 'lucide-react-native';

interface Movie {
  id: number;
  title: string;
  rating: number;
  poster: string;
  genre: string[];
}

const MovieList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample data - replace with your actual data
  const movies = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      rating: 9.3,
      poster: 'https://fakeimg.pl/220x310/ff0000',
      genre: ['Drama']
    },
    // ... more movies
  ];

  const renderMovieCard = ({ item }: { item: Movie }) => (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.card}>
        <Image
          source={{ uri: item.poster }}
          style={styles.poster}
          resizeMode="cover"
        />
        <View style={styles.movieInfo}>
          <Text style={styles.movieTitle} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.rating}>
            Rating: {item.rating.toFixed(1)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Search color="#999" size={20} style={styles.searchIcon} />
        </View>
      </View>

      {/* Movie Grid */}
      <FlatList
        data={movies}
        renderItem={renderMovieCard}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.movieGrid}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 48 = padding and gap

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    padding: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 100,
    paddingHorizontal: 16,
    height: 48,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    marginRight: 8,
  },
  searchIcon: {
    opacity: 0.5,
  },
  listContainer: {
    padding: 16,
  },
  movieGrid: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cardContainer: {
    width: cardWidth,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  poster: {
    width: '100%',
    height: cardWidth * 1.5,
    backgroundColor: '#F0F0F0',
  },
  movieInfo: {
    padding: 12,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: '#666666',
  },
});

export default MovieList;