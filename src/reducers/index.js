import { combineReducers } from "redux";

const songReducer = () => {
  return [
    {
      title: 'Thrift Shop',
      duration: '4:00',
    },
    {
      title: 'Mi gente',
      duration: '5:00',
    },
    {
      title: 'Na ja',
      duration: '3:10',
    }
  ];
};

const selectedSongReducer =(selectedSong=null,action)=>{
  if(action.type==='SELECTED_SONG'){
  return action.payload;
  }
  return selectedSong;
};

//combining both reducers
export default combineReducers({
  songs : songReducer,
  songSelected : selectedSongReducer
});