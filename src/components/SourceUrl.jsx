import styled from "styled-components"

const SourceUlrs = ({url}) => {
  return <Wrapper>
    <p>source: <a target="_blank" href={url}>{url[0]}</a></p>
  </Wrapper>
}


const Wrapper = styled.div`
  p {
    padding: 1rem 0;
    a {
      color: grey;
      text-decoration: underline;
    }
  }
`
export default SourceUlrs

