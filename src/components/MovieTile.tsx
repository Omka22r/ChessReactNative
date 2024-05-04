import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Card } from 'react-native-paper';

const MovieTile = (data: any): React.JSX.Element =>  {

console.log('d: ', data);
const { Poster, Title, Year } = data.data;
  return (
    <Card style={{marginVertical: 10, marginHorizontal:5 }}>
    <Card.Title title={Title} subtitle={`Year: ${Year}`}  />
    <Card.Cover style={{ marginVertical:4 }} resizeMode='contain' source={{ uri: Poster }} />
   
    {/* <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions> */}
</Card>
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

export default MovieTile;
