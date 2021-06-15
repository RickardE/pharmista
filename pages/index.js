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
      yPercent: 150
    })

    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.trigger3',
        start: "top center"
      }
    });


    t3.from('.test3', {
      yPercent: 150
    })


    const t4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.trigger4',
        start: "top center"
      }
    });


    t4.from('.test4', {
      yPercent: 150
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
        <div className="trigger2"></div>
        <div className='test2'>
          <img className="test" src="../assets/illustrations/glasses.png" />
          <Col>
            <H2>{content[1].header}</H2>
            <p>{content[1].body}</p>
            <Clear></Clear>
          </Col>
        </div>
        <Clear></Clear>
      </Container>

      <Container>
        <div className="trigger3"></div>
        <div className="test3">
          <H2>Powered by</H2>
          <Awards></Awards>
          <Clear></Clear>
        </div>
        <Clear></Clear>
      </Container>



      <Container>
        <div className="trigger4"></div>
        <div className='test4'>
          <img className="test" src="../assets/illustrations/bulb.png" />
          <Col>
            <H2>{content[2].header}</H2>
            <p>{content[2].body}</p>
            <Clear></Clear>
          </Col>
        </div>
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
