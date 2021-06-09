import styled from "styled-components"



const StyledLogo = styled.div
    `

        width: 20%;
        position: relative;
        float: left;
 

        div {
            width: 100%;   
            margin: 0 auto;
        }

img {
    max-width: 100%;
}
`



const Logo = () => {

    return <StyledLogo><div><a href={'/'}><img src={'../assets/logos/main-logo.svg'} /></a></div></StyledLogo >

}

export default Logo