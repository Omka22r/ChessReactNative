import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import { ActivityIndicator, HelperText, Searchbar } from 'react-native-paper';
import { useFetchMovies } from '../helpers/fetchMovies';
import MovieTile from '../components/MovieTile';

const LandingScreen = (): React.JSX.Element =>  {

  const [searchTerm, setSearchTerm] = useState('');
  const {data, loading, error} = useFetchMovies(`https://www.omdbapi.com/?s=${searchTerm}&type=movie&apikey=776952d3`, searchTerm);

  const renderEmptyList = () => {
    if (data?.Error === "Too many results.") {
      return <HelperText type="info">
                Try to narrow your search!
              </HelperText>;
    }
    if (data?.Error === "Movie not found!") {
      return <HelperText type="error">
                No movies found!
              </HelperText>;
    }
    return <HelperText type="error">
              Something went wrong. Try again!
            </HelperText>;
  }
  
  return (
    <View style={styles.mainContainerStyle}>
        <Searchbar
            placeholder="Search for movies"
            value={searchTerm}
            style={styles.inputBoxStyle}
            onChangeText={text => setSearchTerm(text)}
          />
      <View style={styles.resultContainer}>
      {loading ? 
      <ActivityIndicator animating={true} color={'orange'} />
     : searchTerm ?
      <FlatList
          data={data?.Search}
          contentContainerStyle={{ paddingBottom: 80 }}
          renderItem={(item) => <MovieTile data={item.item} /> }
          keyExtractor={item => item?.imdbID}
          ListEmptyComponent={renderEmptyList}
        /> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
  },
  resultContainer: {
    justifyContent:"center"
  },
  inputBoxStyle: {
    fontSize: 24,
    fontWeight: '300',
    margin: 10,
  },
});

export default LandingScreen;
