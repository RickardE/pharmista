import { useEffect } from "react"
import styled from "styled-components"
import gsap from "gsap"




const StyledWomens = styled.div
    `
    position: absolute;
    width: 40vw;
    bottom: -6vh;
    right: 0;
    overflow: hidden;


img {
    max-width: 100%;
}

`


const Womens = () => {

    useEffect(() => {

        const t1 = gsap.timeline();

        t1.set('women', {
            xPercent: 100
        })

        t1.from('.women', {
            xPercent: 100,
            ease: "linear",
            duration: 1,
            opacity: 0,
        })

    })

    return <StyledWomens><img className="women" src={'../assets/illustrations/illustration_kvinnor.svg'} /></StyledWomens>

}

export default Womens