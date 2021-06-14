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



@media (min-width: 0) and (max-width:913px) {
margin: 0 auto !important;
float: none;
width: 30%;


}


`



const Logo = () => {

    return <StyledLogo><div><a href={'/'}><img src={'../assets/logos/main-logo.svg'} /></a></div></StyledLogo >

}

export default Logo