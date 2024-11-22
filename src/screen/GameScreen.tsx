import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Button
} from 'react-native';

const GameScreen = (): React.JSX.Element =>  {

    const picesList = [
      '1E01', '1H01', '1C01', '1K01', '1Q01', '1C02', '1H02', '1E02',
      '1P01','1P02','1P03','1P04','1P05','1P06','1P07','1P08',
      '2E01', '2H01', '2C01', '2K01', '2Q01', '2C02', '2H02', '2E02',
      '2P01','2P02','2P03','2P04','2P05','2P06','2P07','2P08',
    ];

    const piecePositionsInitially = { 
      '1E01': 0, '1H01': 1, '1C01': 2, '1K01':3, '1Q01': 4, '1C02': 5, '1H02': 6, '1E02': 7,
      '1P01': 8,'1P02': 9,'1P03': 10,'1P04': 11,'1P05': 12,'1P06': 13,'1P07': 14,'1P08': 15,
      '2P01': 48,'2P02': 49,'2P03': 50,'2P04': 51,'2P05': 52,'2P06': 53,'2P07': 54,'2P08': 55,
      '2E01': 56, '2H01': 57, '2C01': 58, '2K01':59, '2Q01': 60, '2C02': 61, '2H02': 62, '2E02': 63
    } ;

    const [startGame, setStartGame] = useState(false);
    const [boardPositions, setBoardPositions] = useState({});
    const [selectedPiece, setSelectedPiece] = useState(null);

  const renderChessPiece = (index, piecePositionsInitially) => {
    let chessPiece;
     picesList.forEach((item) => {
      
        
        if(piecePositionsInitially[item] === index){
         
          chessPiece = item;
        }
       

    })
    return   <TouchableOpacity style={{
                backgroundColor: selectedPiece === chessPiece ? 'blue' : ''}} onPress={() => setSelectedPiece(chessPiece)}>
                <Text style={styles.pieceStyle}>{chessPiece}</Text>
              </TouchableOpacity>    
  };

  const renderChessGrid = () => {
      const tabs = Array.from({length: 64});
       return  tabs.map((i, index) => {
            return <View style={{...styles.slotStyle, backgroundColor: index % 2 === 0 ? 'white' : 'black'}}>
                         
                               
                               {   renderChessPiece(index, boardPositions)}
                                 
                           
                            
              </View>
              
        })
  };

  return (
    <View style={styles.mainContainerStyle}>
      <View style={styles.headerContainer}>
      <View style={{flex: 1, justifyContent:'center', alignItems:'center' }}>
        {!startGame ? <Button onPress={() => {setStartGame(true); setBoardPositions(piecePositionsInitially)}} title='Start Game'/> : <Text>Player 1 move</Text>}
      </View>
      </View>
      <Text style={{alignSelf: 'center', paddingVertical:12}}>Player 1</Text>
      <View style={styles.gameContainer}>
        {renderChessGrid()}
      </View>
      <Text style={{alignSelf: 'center', paddingVertical:12}}>Player 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,

  },
  headerContainer:{
    flex:2,
    justifyContent:'center',
    alignItems: 'center'
  },
  gameContainer:{
    flex: 10,
    backgroundColor:'brown',
    justifyContent:'center',
    alignItems: 'center',
    paddingVertical:32,
    flexDirection:'row',
    flexWrap: 'wrap',
  },
  slotStyle: {
    width: '11%',
    aspectRatio: 1,
    justifyContent: 'center',
    height: 80,    
    alignItems: 'center',
    margin: 2,
  },
  pieceStyle: {
   color :'brown',
   fontSize: 12,
   fontWeight: '900'
  },
});

export default GameScreen;
