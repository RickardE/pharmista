import styled from "styled-components"

const StyledColLeft = styled.div
    `
    float: left; 
    width: 50%;


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
