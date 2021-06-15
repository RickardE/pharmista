import styled from "styled-components"
import Clear from "./clear"


const StyledContainer = styled.div
    `
width: 100%;
height: auto;
padding: 10vh 0;
margin-bottom: 5vh;
position: relative;
overflow: hidden;


  :nth-child(2n) div {
        float: right;
 }

 img.test {
     float: left;
     position: absolute;
     transform: translateY(-50%);
    top: 50%;
 }

`


const Container = (props) => {

    return <StyledContainer>
        {props.children}
        <Clear></Clear>
    </StyledContainer>

}

export default Container