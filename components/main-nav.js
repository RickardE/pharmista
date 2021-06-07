import styled from "styled-components"

const StyledNavLeft = styled.nav
    `
    position: relative;
    width: 40%;
    padding: 4% 0;
    float: left;

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


}

`


const StyledNavRight = styled.nav
    `
    position: relative;
    width: 40%;
    padding: 4% 0;
    float: right;
  


    ul {
    width: 100%;
    text-align: right;
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


}

`



const MainNav = (props) => {




    if (props.left) {
        return <StyledNavLeft>
            {props.children}
        </StyledNavLeft>

    } else if (props.right) {

        return <StyledNavRight>
            {props.children}
        </StyledNavRight>
    } else {
        return null
    }
}

export default MainNav