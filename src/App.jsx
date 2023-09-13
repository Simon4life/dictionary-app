import Navbar from "./components/Navbar";
import SearchBar from './components/SearchBar';
import WordContainer from './components/WordContainer';
import WordMeaning from './components/WordMeaning';
import { useDictionaryContext } from './context/dictionary_context';

function App() {
  const {font} = useDictionaryContext();
  
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
