import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import { ActivityIndicator, HelperText, Searchbar } from 'react-native-paper';
import { useFetchMovies } from '../helpers/fetchMovies';
import MovieTile from '../components/MovieTile';
import { fetchRequest } from '../helpers/APIRequest';

const FavouritesScreen = (): React.JSX.Element =>  {

  const {data, loading, error} = useFetchMovies(`http://localhost:3001/favourites`);
  
  console.log('Fe : ', fetchRequest("http://localhost:3001/favourites", "POST", {"imdbID":"dsfasdf4f", "title": "Test Movie 01", "year": "1997", "poster": "adsfsadfasd"}));
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
      <View style={styles.resultContainer}>
     <FlatList
        data={data?.Search}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={(item) => <MovieTile data={item.item} /> }
        keyExtractor={item => item?.imdbID}
        ListEmptyComponent={renderEmptyList}
      />
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

export default FavouritesScreen;
