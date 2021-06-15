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

     @media (min-width: 0px) and (max-width: 667px) { 


         img.test {
            top: 5vh;
            position: relative;
            width: 50%;
            max-width: 100%;
            transform: none;
            margin: 0 auto;
            float: none;
         }




     }

`


const Container = (props) => {

    return <StyledContainer>
        {props.children}
        <Clear></Clear>
    </StyledContainer>

}

export default Container