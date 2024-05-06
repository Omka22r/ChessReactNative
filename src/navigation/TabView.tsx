import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import LandingScreen from '../screen/LandingScreen';
import FavouritesScreen from '../screen/FavouritesScreen';

const SearchTab = () => <LandingScreen/>;

const TabView = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'search', title: 'Search', focusedIcon: 'file-search', unfocusedIcon: 'file-search-outline'},
    { key: 'favourites', title: 'Favourites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },

  ]);

  const renderScene = BottomNavigation.SceneMap({
    search: SearchTab,
    favourites:() => <FavouritesScreen/>,

  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default TabView;