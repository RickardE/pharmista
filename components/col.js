import styled from "styled-components"

const StyledColLeft = styled.div
    `
    float: left; 
    width: 40%;



    @media (min-width: 0px) and (max-width: 414px) {

        width: 80%;
    }


    `

const StyledColright = styled.div
    `
    float: left; 
    width: 50%;


    `


const Col = (props) => {
    return <StyledColLeft>
        {props.children}
    </StyledColLeft>
}

export default Col
