const board_reducer = (state, action) => {
  if(action.type === "FETCH_WORD") {
    const data = action.payload;
    let audioUrl = data.phonetics[0].audio;
    if(audioUrl) {
      return {
        ...state, wordData: action.payload, errMsg: undefined, audioUrl
      }
    }
    return {
      ...state, wordData: action.payload, errMsg: undefined, audioUrl: null
    }
  }
  if(action.type === 'UPDATE_SEARCH_TERM') {
    return {...state, searchTerm: action.payload}
  }
  if(action.type === "ERROR") {
    return {...state, errMsg: action.payload};
  }
  if(action.type === "FONT_CHANGE") {
    return {...state, font: action.payload}
  }
  if(action.type  === "THEME_CHANGE") {
    return {...state, theme: action.payload}
  }
  return state;
}

export default board_reducer;