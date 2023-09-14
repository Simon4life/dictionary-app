import styled from "styled-components";
import { useDictionaryContext } from "../context/dictionary_context";
import SourceUlrs from "./SourceUrl";

const WordMeaning = () => {
  const {wordData} =  useDictionaryContext();

  if(wordData.meanings) {
    const  {meanings, sourceUrls} = wordData;
    return (
      <Wrapper>
       {
        meanings.map((item, index) => {
          const {partOfSpeech, definitions} = item;
          return <article>
            <div className="title-container">
              <h4>{partOfSpeech}</h4>
              <hr />
            </div>
            <p>meaning</p>
            <ul>
              {
                definitions.map((item, index) => {
                  return <li key={index}>{item.definition}</li>
                })
              }
            </ul>
              {
                item.synonyms.length > 0 ? <p><span className="special">Synonyms</span> {item.synonyms.map((syn, index) => {
                  return index === item.length - 1 ? item : `${syn}, ` 
                })}</p> : null
              }
          </article>
        })
        }
        <hr />
        <SourceUlrs url={sourceUrls}/>
      </Wrapper>
    )
  }
    
}

const Wrapper = styled.div`
  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4 {
      margin-right: 1rem;
    }
    hr {
      width: 100%;
      display: inline-block;
      color: hsl(0, 0%, 0%);
    }
  }
  p {
    margin-bottom: .4rem;
  }
   p, h4, ul {
    color: var(--clr-font)

  }
  article {
    padding: 0.5rem;
    color: var(--font-clr);
    ul li {
      margin-left: 1.5rem;
    }
    .special {
      font-size: 1.2rem;
      color: var(--purple-200);
    }
  }
`

export default WordMeaning;