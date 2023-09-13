import React, { useEffect } from "react";
import styled from "styled-components";

import { useDictionaryContext } from "../context/dictionary_context";
const ToggleTheme = () => {
  const {theme, handleThemeChange} = useDictionaryContext();

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

return (
	<Wrapper className="container">
	<div className="toggle-switch">
		<input type="checkbox" className="checkbox"
			name="theme" id="theme" onChange={(e) => {
       if(e.target.checked) {
        handleThemeChange("dark-theme")
       }else {
        handleThemeChange("light-theme")
       }
       
      }}/>
		<label className="label" htmlFor="theme">
		<span className="inner" />
		<span className="switch" />
		</label>
	</div>
	</Wrapper>
);
};

const Wrapper = styled.div`
	.toggle-switch {
  position: relative;
  width: 60px;
  overflow: hidden;
  display: inline-block;
  text-align: left;
  border-radius: 20px;
  height: 30px;
}

.checkbox {
  display: none;
}

.inner {
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
}

.inner:before,
.inner:after {
  float: left;
  width: 50%;
  height: 36px;
  padding: 0;
  line-height: 36px;
  color: #fff;
  font-weight: bold;
  box-sizing: border-box;
}

.inner:before {
  content: "";
  padding-left: 10px;
  background-color: var(--purple-100);
  color: #fff;
}

.inner:after {
  content: "";
  padding-right: 10px;
  background-color: #bbb;
  color: #fff;
  text-align: right;
}

.switch {
  display: block;
  width: 20px;
  margin: 5px;
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 40px;
  border: 0 solid #bbb;
  border-radius: 20px;
  transition: all 0.3s ease-in 0s;
  cursor: pointer;
}

.checkbox:checked+.label .inner {
  margin-left: 0px;
}

.checkbox:checked+.label .switch {
  right: 0px;
}
`


export default ToggleTheme;
