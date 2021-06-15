import styled from "styled-components"


const logos = [
    '../assets/logos/almi.png',
    '../assets/logos/idea-venture-cup.png',
    '../assets/logos/malmo-university.png',
    '../assets/logos/smile.png',
    '../assets/logos/leapfrogs.png'
]

const StyledAwards = styled.div
    `

    width: 100%;
    display: inline;
    float: left;

    img {
        max-width: 16%;
        margin: 1% 2%;

    }
    
    `

const Awards = () => {
    return <>
        <StyledAwards>
            {logos.map((i) =>
                <img src={i} />
            )}
        </StyledAwards>
    </>
}


export default Awards