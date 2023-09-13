import Logo from "./Logo"
import ToggleTheme from "./ThemeToggle"
import FontSelect from "./FontSelect";
import styled from "styled-components";

const Navbar = () => {
    return (
        <Wrapper>
        <nav className="section-center">
            <div className="nav-container">
                <Logo/>
                <div className="nav-content">
                    <FontSelect/>
                    <ToggleTheme/>
                </div>
            </div>
        </nav>
        </Wrapper>
        
    )
}

const Wrapper = styled.div`
.nav-container {
  display: flex;
  align-items: center;
  justify-content:space-between;
  height: 4rem;
  margin: 0 auto;
  width: 90vw;
  max-width: var(--max-width);
  .nav-content {
  display: flex;
  align-items: center;
}
}
`

export default Navbar