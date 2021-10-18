//action creator
export const slectSong = (song) => {
  //return an action
  return {
    type: 'SELECTED_SONG',
    payload: song
  };
};
