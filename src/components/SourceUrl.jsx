import { useDictionaryContext } from "../context/dictionary_context"

import styled from "styled-components"
const SourceUlrs = ({url}) => {
  return <Wrapper>
    <p>source: <a target="_blank" href={url}>{url[0]}</a></p>
  </Wrapper>
}


const Wrapper = styled.div`
  p {
    padding: 1rem 0;
  }
`
export default SourceUlrs

