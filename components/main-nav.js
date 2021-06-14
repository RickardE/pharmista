import styled from "styled-components"

const StyledNav = styled.nav
    `
    position: relative;
    width: 40%;
    padding: 8% 0;
    float: left;
    z-index: 3;

    ul {
    width: 100%;
    text-align: left;
    padding: 0;
    margin: 0;


}

li {
    list-style: none;
    display: inline;
}

li:nth-child(2) {
       padding: 0 10%;
}
a {
    color: orange;
    font-family: filson-pro, sans-serif;    
    font-weight: 500;
    font-style: normal;
    font-size: 1rem;
    text-decoration: none;
    color: #000;
    position: relative;
    z-index: 9;
     transition: 0.3s;


}

a:hover:after {
    content: '';
    position: absolute;
    background-color: #fcdec9;
    height: 80px;
    width: 80px;
    border-radius: 40px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
       transition: 0.6s;
  
}



@media (min-width: 0) and (max-width:913px) {
display: none;
`






const MainNav = (props) => {

    return <StyledNav>
        {props.children}
    </StyledNav>

}

export default MainNav