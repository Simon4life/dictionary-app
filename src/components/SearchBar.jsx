import {useState} from "react"
import styled from 'styled-components'
import {FiSearch} from "react-icons/fi";
import { useDictionaryContext } from '../context/dictionary_context';

const SearchBar = () => {
  const [word, setWord] = useState("");
  const {fetchWord} = useDictionaryContext();

  return (
    <Wrapper>
      <div className="section-center">
        <form onSubmit={(e) => {
          e.preventDefault();
          if(word) {
            fetchWord(word);
          }
        }} className="search-container">
        <input type="text" placeholder="Search for a word" className="search-input" 
        onInput={(e) => {
        setWord(e.target.value)
        }
        
        }
        />
        <button className="btn">
          <FiSearch className='search-icon'/>
        </button>
        </form>

      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.search-container {
  background: var(--element-bcg);
  border-radius: 10px;
  margin-top: 1.2rem;
  padding 0.3rem 0.7rem;
  display: flex;
  align-items: center;
  padding: 0 0.3rem;
  justify-content: space-between;
  .search-icon {
    font-size: 1.5rem;
    display: inline-block;
    color: var(--purple-100);
    @media (min-width: 992px) {
      margin-left: 2rem;
    }
  }
}

.search-input {
  border: none;
  background: var(--element-bcg);
  outline: none;
  width: 90%;
  height: 100%;
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--clr-font);
  display: block;
  font-family: var(--app-font);
}

.btn {
  background: transparent;
  box-shadow: 0 0 0 0;
}
`
export default SearchBar