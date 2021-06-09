import styled from "styled-components"
import Clear from "./clear"


const StyledHeader = styled.header
    `
    width: 100%;
    margin: 0 auto;
    display: block;
    padding: 5% 0;
    position: relative;
    z-index: 9;
    `



const Header = ({ children }) => {



    return <StyledHeader>
        {children}
        <Clear></Clear>
    </StyledHeader>

}

export default Header