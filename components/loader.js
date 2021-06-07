import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { useRouter } from 'next/router'


const StyledLoader = styled.div
  `
position: absolute;
z-index: 99;
background-color: #000000;
height: 100vh;
width: 100%;
`


const Loader = () => {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url) => (url === router.asPath) && setLoading(false);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return loading && (<StyledLoader></StyledLoader>);
}

export default Loader