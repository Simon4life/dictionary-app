import styled from "styled-components";
import AudioPlayer from "./AudioPlayer";
import { useEffect } from "react";
import { useDictionaryContext } from "../context/dictionary_context";
import Loading from "./Loading";
import WordMeaning from "./WordMeaning"

const WordContainer = () => {
  const {fetchWord, wordData, searchTerm, errMsg, isLoading} = useDictionaryContext();
  
  useEffect(() => {
    if(searchTerm) {
      fetchWord(searchTerm);
    }
  }, [searchTerm])

  if(isLoading) {
    return <Loading/>
  }

  if(errMsg) {
    return (
      <Wrapper className="section-center">
        <h4 className="text-center">{errMsg}</h4>
      </Wrapper>
    )
  }

  return (
    <Wrapper className="section-center">
      <div className="word-header">
        <div>
        <h3>{wordData.word}</h3>
        <p>{wordData.phonetic}</p>
        </div>
        
        <AudioPlayer/>
      </div>
      
      <WordMeaning/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .word-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.7rem 0;
    padding-bottom: 0.3rem;
   p {
     color: var(--purple-200);
   }
  }
`

export default  WordContainer;
