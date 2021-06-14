import Link from "next/link";
import Head from 'next/head'
import Header from "../components/header.js"
import MainNav from "./main-nav.js";
import Logo from "./logo.js";
import Clear from "./clear.js";
import styled, { keyframes } from "styled-components";







const StyledContent = styled.div`
width: 100%;
margin: 0 auto;
display: block;
z-index: 9;
`






export default function Layout({
    children
}) {
    return (

        <div className={'main'}>
            <Head>
                <link rel="stylesheet" href="https://use.typekit.net/nyk0avx.css" />
            </Head>
            <Header>


                <MainNav left>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>

                        <li>
                            <Link href="/about">About us</Link>
                        </li>

                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>

                    </ul>
                </MainNav>

                <Logo></Logo>



            </Header>
            <Clear></Clear>
            <StyledContent>
                {children}
                <Clear></Clear>
            </StyledContent>
            <Clear></Clear>

        </div>
    )
}