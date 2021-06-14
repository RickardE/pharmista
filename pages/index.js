import Col from '../components/col'
import H1 from '../components/h1'
import styles from '../styles/Home.module.css'
import data from './api/data.json';
import Container from '../components/container'
import Clear from '../components/clear';
import { useEffect } from 'react';
import Awards from '../components/awards';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import H2 from '../components/h2';





const Index = ({ content }) => {


  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {

    const t1 = gsap.timeline();


    t1.from('.revolution', {
      yPercent: 200,
      ease: "linear",
      duration: 1,
      opacity: 0,
    });



    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.trigger2',
        start: "top center"
      }
    });

    t2.from('.test2', {
      yPercent: 100
    })




  })
  return (
    <>
      <Container>

        <Col>
          <div className='revolution'>
            <H1>{content[0].header}</H1>
            <p>{content[0].body}</p>
          </div>
        </Col>
        <Clear></Clear>
      </Container>




      <Container>
        <Col>
          <div className="trigger2"></div>
          <div className='test2'>
            <H2>{content[1].header}</H2>
            <p>{content[1].body}</p>
            <Clear></Clear>
          </div>
        </Col>
        <Clear></Clear>
      </Container>



      <Awards></Awards>



      <Container>
        <Col>
          <div className="trigger2"></div>
          <div className='test2'>
            <H2>{content[2].header}</H2>
            <p>{content[2].body}</p>
            <Clear></Clear>
          </div>
        </Col>
        <Clear></Clear>
      </Container>

    </>
  )
}


export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const content = data;
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      content,
    },
  }
}



export default Index
