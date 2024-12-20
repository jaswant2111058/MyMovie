import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { Navigation, Search } from 'lucide-react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesThunkAction } from '../redux/action/movieAction';
import { AppDispatch, RootState } from '../redux/store'; 
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
  rating: number;
  poster: string;
  genre: string[];
}

const MovieList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { loading, movieData } = useSelector((state: RootState) => state.movie);
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    dispatch(getMoviesThunkAction());
  }, [dispatch]);

  const handlePress = (item: Movie) => {
    navigation.navigate('MovieDetail', { movie: item });
  };

  const renderMovieCard = ({ item }: { item: Movie }) => (
    <TouchableOpacity 
      onPress={() => handlePress(item)}
      style={styles.cardContainer}
    >
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

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#6366F1" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
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
      <FlatList
        data={movieData}
        renderItem={renderMovieCard}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.movieGrid}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No movies found</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={styles.footerSpace} />
        )}
      />
    </View>
  );
};

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2;

const styles = StyleSheet.create({
  container: {
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
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 32,
  },
  emptyText: {
    fontSize: 16,
    color: '#666666',
  },
  footerSpace: {
    height: 330
  }
});

export default MovieList;