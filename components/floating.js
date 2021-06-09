import styled from "styled-components"



const StyledFloatingLeft = styled.div`

position: absolute;
top: 30vh;
z-index: -1;
  left: -10vw;


`

const StyledFloatingRight = styled.div`

position: absolute;
top: 60vh;
z-index: -1;
right: -20vw;




`





const Floating = ({ children, align }) => {
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