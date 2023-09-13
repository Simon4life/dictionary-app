import axios from "axios";
import React, { useContext, useReducer } from "react";
import reducer from "../reducers/dictionary_reducer";

const DictionaryContext = React.createContext();

const initialState = {
  searchTerm: "",
  wordData: {},
  errMsg: undefined,
  font: localStorage.getItem("font") || "verdana",
  theme: "light-theme",
  audioUrl: null
}

export const DictionaryProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  const updateSearchTerm = (e) => {
    const searchTerm = e.target.value;
    dispatch({type: 'UPDATE_SEARCH_TERM', payload: searchTerm})
  }

  const fetchWord = async (word) => {
    try {
    const response = await axios(`${url}${word}`)
    const data = await response.data;

    dispatch({type: "FETCH_WORD", payload: data[0]}); 
    } catch (error) {
      if(error.message === "Network Error") {
        dispatch({type: "ERROR", payload: `Network Error, Pls Check your connection`})
      } else if(error.response.status === 404) {
        dispatch({type: "ERROR", payload: "Word Not Found"})
      }
    } 
  }

  const handleThemeChange = (theme) => {
    dispatch({type: "THEME_CHANGE", payload: theme})
  }

  const handleFontChange = (e) => {
    const selectedFont = e.target.value;
    document.documentElement.style.setProperty("--app-font", selectedFont);
    localStorage.setItem("font", selectedFont)
    dispatch({type: "FONT_CHANGE", payload: selectedFont});
  }

  const updateFont = (font) => {
    document.documentElement.style.setProperty("--app-font", font);
    dispatch({type: "FONT_CHANGE", payload: font})
  }

  return <DictionaryContext.Provider value={{...state, fetchWord, updateSearchTerm, handleFontChange, handleThemeChange, updateFont}}>{children}</DictionaryContext.Provider>
}

export const useDictionaryContext = () => {
  return useContext(DictionaryContext);
}