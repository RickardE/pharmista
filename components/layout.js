import Link from "next/link";
import Head from 'next/head'
import Header from "../components/header.js"
import MainNav from "./main-nav.js";
import Logo from "./logo.js";
import Clear from "./clear.js";
import styled, { keyframes } from "styled-components";







const StyledContent = styled.div`
width: 80%;
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

                <div className={'main-nav'}>
                    <MainNav left>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>

                            <li>
                                <Link href="/about">About us</Link>
                            </li>

                        </ul>
                    </MainNav>
                </div>
                <Logo></Logo>
                <div className={'main-nav'}>
                    <MainNav right>
                        <ul>
                            <li>
                                <Link href="/">Awards</Link>
                            </li>

                            <li>
                                <Link href="/">Contact</Link>
                            </li>
                        </ul>
                    </MainNav>
                </div>


            </Header>
            <Clear></Clear>
            <StyledContent>
                {children}
            </StyledContent>
            <Clear></Clear>

        </div>
    )
}