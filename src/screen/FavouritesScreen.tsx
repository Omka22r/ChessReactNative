import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import { HelperText, ActivityIndicator } from 'react-native-paper';
import { useFetchMovies } from '../helpers/fetchMovies';
import MovieTile from '../components/MovieTile';

const FavouritesScreen = (): React.JSX.Element =>  {

  const {data, loading, error} = useFetchMovies(`http://localhost:3001/favourites`, '');
  
  const renderEmptyList = () => {
    if (data?.favourite.length === 0) {
      return <HelperText type="info">
                No movies added to favourites!
              </HelperText>;
    }
    return <HelperText type="error">
              Something went wrong with local backend API. Try again!
            </HelperText>;
  }

  return (
    <View style={styles.mainContainerStyle}>
      <View style={styles.resultContainer}>
        {
    loading ? 
      <ActivityIndicator animating={true} color={'orange'} /> 
      :
      <FlatList
      data={data?.favourite}
      contentContainerStyle={{ paddingBottom: 80 }}
      renderItem={(item) => <MovieTile data={{...item.item, saved: true}} favouritesView /> }
      keyExtractor={item => item?.imdbID}
      ListEmptyComponent={renderEmptyList}
    />}
     
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
