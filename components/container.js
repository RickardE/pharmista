import styled from "styled-components"
import Clear from "./clear"


const StyledContainer = styled.div
    `
width: 100%;
height: auto;
padding: 10vh 0;
float: left;




  :nth-child(2n) div {
        float: right;
 }

`


const Container = (props) => {

    return <StyledContainer>
        {props.children}
        <Clear></Clear>
    </StyledContainer>

}

export default Container