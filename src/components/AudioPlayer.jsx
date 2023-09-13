import styled from "styled-components";
import {BsFillPlayFill} from "react-icons/bs";
import { useDictionaryContext } from "../context/dictionary_context";
import { useRef, useState } from "react";

const AudioPlayer = () => {
  const {audioUrl} = useDictionaryContext();
  const refContainer = useRef(null);
  if(audioUrl) {
    return <Wrapper>
      <button className="audio-btn" onClick={() => {
        refContainer.current.play();
      }}>
        <audio  src={audioUrl} ref={refContainer}></audio>
        <BsFillPlayFill className="audio-icon"/>
      </button>
    </Wrapper>
    
  }
}

const Wrapper = styled.div`
  .audio-btn {
    padding: 0.8rem;
    border-radius: 50%;
    font-size: 1.5rem;
    background-color: var(--purple-50);
    border: none;
    outline: none;
    display: block;
    .audio-icon {
      color: var(--purple-200);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export default AudioPlayer;