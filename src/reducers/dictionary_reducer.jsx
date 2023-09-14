const board_reducer = (state, action) => {
  if(action.type === "FETCH_WORD") {
    const data = action.payload;
    let audioUrl = data.phonetics[0].audio;
    console.log(data)
    if(audioUrl) {
      return {
        ...state, wordData: action.payload, errMsg: undefined, audioUrl, isLoading: false
      }
    }
    return {
      ...state, wordData: action.payload, errMsg: undefined, audioUrl: null, isLoading: false
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
  if(action.type === "START_LOADING") {
    return {...state, isLoading: true}
  }
  if(action.type === "STOP_LOADING") {
    return {...state, isLoading: false}
  }
  return state;
}

export default board_reducer;