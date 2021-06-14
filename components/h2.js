import styled from "styled-components"


const StyledH2 = styled.h2
    `
font-family: filson-pro, sans-serif;
font-weight: 500;
font-style: normal;
font-size: 2.5rem;
line-height: 3rem;
color: #ef765e;
`

const H2 = (props) => {
    return <StyledH2>{props.children}</StyledH2>
}

export default H2
