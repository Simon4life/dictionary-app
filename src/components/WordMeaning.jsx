import styled from "styled-components";
import { useDictionaryContext } from "../context/dictionary_context";
import SourceUlrs from "./SourceUrl";

const WordMeaning = () => {
  const {wordData} =  useDictionaryContext();

  if(wordData.meanings) {
    const  {meanings, sourceUrls} = wordData;
    return (
    <Wrapper className="section-center">
      {
        meanings.map((item, idx) => {
          const {partOfSpeech, definitions} = item;
          return (
            <article key={idx}>
                <div className="title-container">
                  <h4>{partOfSpeech}</h4>
                  <hr></hr>
                </div>
                <p>Meaning</p>
                <ul>
                  {
                    definitions.map(item => {
                      return (
                        <li>{item.definition}</li>
                      )
                    })
                  }
               </ul>
           <article>
        {item.synonyms.length > 0 ? <p>Synonyms {item.synonyms.map(item => <a>{item}</a>)}</p> : null}
        
      </article>
      </article>
          )
        })
      }
      <hr/>
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
    }
  }
  p {
    margin-bottom: .4rem;
  }
  p, ul {
    color: var(--grey-200);

  }
  article {
    padding: 0.5rem;
    color: var(--font-clr);
    ul li {
      margin-left: 1.5rem;
    }
  }
`

export default WordMeaning;