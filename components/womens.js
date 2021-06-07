import styled from "styled-components"


const StyledWomens = styled.div
    `
    position: absolute;
    width: 40vw;
    bottom: -6vh;
    right: 0;


img {
    max-width: 100%;
}

`


const Womens = () => {

    return <StyledWomens><img src={'../assets/illustrations/illustration_kvinnor.svg'} /></StyledWomens>

}

export default Womens