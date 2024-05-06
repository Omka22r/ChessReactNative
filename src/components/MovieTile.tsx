import React, { useState } from 'react';
import {
  StyleSheet, Alert
} from 'react-native';
import { Card, Button, Text} from 'react-native-paper';

type MovieData = {
    Title: string;
    Poster: string;
    Year: string;
    imdbID: string;
};

const MovieTile = (data: any ): React.JSX.Element =>  {
  const [loading, setLoading] = useState(false);
  const { Poster, Title, Year, imdbID } = data.data;
  const [addedToFavoutites, setAddedToFavourites] = useState(false);

  const updateFavourite = async (movie: MovieData) => {
    setLoading(true);
    const requestType = data.favouritesView ? 'DELETE' : 'POST';
    try {
        await fetch(`http://localhost:3001/favourites`, {
          method: requestType,
          headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        })
          .then(response => {return response.json()})
          .then(data => { 
            console.log('data rec: ', data);
            if (data?.error) {
              return Alert.alert('An error occurred!', data?.error, [
                {text: 'Close', onPress: () => console.log('Close')},
              ]);
            }
            setAddedToFavourites(true);
          });
      } catch (error) {
        console.log('An error occurred!', error);
        Alert.alert('An error occurred!', 'Try again!', [
          {text: 'Close', onPress: () => console.log('Close')},
        ]);
      }
      finally{
        setLoading(false);
      }     
  };
  return (
    <Card style={styles.cardStyle}>
        <Text variant="titleLarge">{Title}</Text>
        <Text variant="bodyMedium">{`Year: ${Year}`}</Text>
        <Card.Cover style={{ marginVertical:4 }} resizeMode='contain' source={{ uri: Poster }} />
        <Button 
            mode="outlined" 
            style={styles.favButtonStyle}
            icon={data?.favouritesView ? "trash-can" : "heart"}
            loading={loading}
            disabled={loading || addedToFavoutites}
            mode="contained" 
            onPress={() => updateFavourite({Poster, Title, Year, imdbID})}>
            {data?.favouritesView ? 'Remove' : 'Add to Favourite'}
        </Button>
    </Card>
  );
}

const styles = StyleSheet.create({
cardStyle: {
    marginVertical: 10, 
    marginHorizontal:5, 
    padding:10
},
favButtonStyle: {
    width:'50%', 
    alignSelf: 'flex-end', 
    margin:4
}
});

export default MovieTile;
