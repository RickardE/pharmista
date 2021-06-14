import styled from "styled-components"

const StyledCol = styled.div
    `
    float: left; 
    width: 40%;




    @media (min-width: 0px) and (max-width: 414px) {

        width: 80%;
    }


    


    `


const Col = (props) => {


    return <StyledCol>
        {props.children}
    </StyledCol>

}

export default Col
