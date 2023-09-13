import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useDictionaryContext } from "../context/dictionary_context"; 

const FontSelect = () => {
  const {handleFontChange, updateFont, font} = useDictionaryContext();
  const fontList = ["sans", "monospace", "verdana"];

    
    useEffect(() => {
      const selectedFont = localStorage.getItem("font");
      if(selectedFont) {
        updateFont(selectedFont)
      }
    }, [])

    return (
      <Wrapper>
        <select  onChange={handleFontChange} value={font}>
        {
          fontList.map((item, idx) => {
            return <option key={idx} className="option" value={item}>{item}</option>
          })
        }
        </select>
      </Wrapper> 
    )
}

const Wrapper =  styled.div`
.dropdown {
  border-right: 2px solid var(--grey-100);
  margin-right: 1rem;
  position: relative;

}
.dropdown-btn {
  display: flex;
  align-items: center;
}
.font-select {
  border: none;
  cursor: pointer;
  display: block;
}
.dropdown-content {
  position: absolute;
  top: 50px;
  background: var(--purple-50);
  width: 150px;
  padding: .3rem;
}
select {
  border: none;
  color: var(--clr-font);
  cursor: pointer;
  background: var(--element-bcg);
  padding: .4rem;
  font-size:  1rem;
  // outline: none;
  display: inline-block;
  margin-right: .5rem;
}
`

export default FontSelect;