import { useRef, useEffect } from 'react'
import Navbar from "./components/Navbar";
import SearchBar from './components/SearchBar';
import WordContainer from './components/WordContainer';
import WordMeaning from './components/WordMeaning';
import { useDictionaryContext } from './context/dictionary_context';

function App() {
  const {selectedFont} = useDictionaryContext();

  // useEffect(() => {
  //   document.documentElement.fontFamily = selectedFont;
  // }, [selectedFont]);
  
  return (
    <main>
      <Navbar/>
      <SearchBar/>
      <WordContainer/>
      <WordMeaning/>
    </main>
  )
}

export default App
