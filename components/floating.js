import styled from "styled-components"
import { gsap, Sine } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Clear from "./clear";



const StyledFloatingLeft = styled.div`
position: absolute;
z-index: -1;
left: -10vw;
top: 30vh;
`

const StyledFloatingRight = styled.div`
position: absolute;
top: 60vh;
z-index: -1;
right: -20vw;

`

const Floating = ({ children, align }) => {


    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        const t1 = gsap.timeline();

        t1.from('.lol', {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
                trigger: '.main',
                start: 'top bottom',
                // start: "top bottom", // the default values
                // end: "bottom top",
                scrub: true
            },
        })

    }, [])


    if (align === 'left') {
        return <StyledFloatingLeft>
            {children}
        </StyledFloatingLeft>

    } else {
        return <StyledFloatingRight>
            {children}

        </StyledFloatingRight>
    }

}

export default Floating