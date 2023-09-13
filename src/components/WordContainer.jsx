import styled from "styled-components";
import AudioPlayer from "./AudioPlayer";
import { useEffect, useState } from "react";
import { useDictionaryContext } from "../context/dictionary_context";

const WordContainer = () => {
  const {fetchWord, wordData, searchTerm, errMsg} = useDictionaryContext();

  useEffect(() => {
    if(searchTerm) {
      fetchWord(searchTerm);
    }
  }, [searchTerm])

  if(errMsg) {
    return (
      <Wrapper className="section-center">
        <h4 className="text-center">{errMsg}</h4>
      </Wrapper>
    )
  }

  return (
    <Wrapper className="word-container section-center">
      <div className="word">
        <h3>{wordData.word}</h3>
        <p>{wordData.phonetic}</p>
      </div>
      <AudioPlayer/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.7rem 0;
  padding-bottom: 0.3rem;
  .text-center {
    margin: 0 auto;
    text-align: center;
    padding: 0.5rem 0;
  }
`

export default  WordContainer;
