import styled from "styled-components"

const StyledCol = styled.div
    `
    float: left; 
    width: 50%;




    @media (min-width: 0px) and (max-width: 667px) {

        width: 100%;
        float: none;
        margin: 0 auto;
    }


    


    `


const Col = (props) => {


    return <StyledCol>
        {props.children}
    </StyledCol>

}

export default Col
