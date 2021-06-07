import styled from "styled-components"


const StyledH1 = styled.h1
`
font-family: filson-pro, sans-serif;
font-weight: 500;
font-style: normal;
font-size: 2.5rem;
color: #ef765e;
`

const H1 = (props) => {
    return <StyledH1>{props.children}</StyledH1>
}

export default H1