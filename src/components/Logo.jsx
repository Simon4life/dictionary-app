import React from "react";
import logo from '../assets/logo.png';
import styled from "styled-components";

const Logo = () => {
    return (
        <Wrapper>
        <img src={logo} className="app-logo" alt="logo"/>
        </Wrapper>
        
    )
}

const Wrapper = styled.div`
    position: relative;
    .app-logo {
        width: 50px;
    }
`

export default Logo;