import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Card, Button, Text} from 'react-native-paper';

const MovieTile = (data: any): React.JSX.Element =>  {

const { Poster, Title, Year } = data.data;
  return (
    <Card style={styles.cardStyle}>
        <Text variant="titleLarge">{Title}</Text>
        <Text variant="bodyMedium">{`Year: ${Year}`}</Text>
        <Card.Cover style={{ marginVertical:4 }} resizeMode='contain' source={{ uri: Poster }} />
        <Button mode="outlined" style={styles.favButtonStyle} icon="heart" mode="contained" onPress={() => console.log('Pressed')}>
            Favourite
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
