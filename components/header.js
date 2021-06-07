import styled from "styled-components"


const StyledHeader = styled.header
    `
    width: 80%;
    margin: 0 auto;
    display: block;
    padding: 5% 0;
    position: relative;
    z-index: 9;
    `



const Header = ({ children }) => {



    return <StyledHeader>
        {children}
    </StyledHeader>

}

export default Header