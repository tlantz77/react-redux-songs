import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Plainsong', duration: '5:17'},
    { title: 'Enjoy the Silence', duration: '6:13'},
    { title: 'Love Will Tear Us Apart', duration: '3:28'},
    { title: 'Blue Monday', duration: '7:30'}
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
 