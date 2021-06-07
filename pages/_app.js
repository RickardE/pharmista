import Layout from '../components/layout'
import '../styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import Floating from '../components/floating'
import Womens from '../components/womens'



const circleOneVariantsLeft = {
  pageInitial: {
    opacity: 1,
    x: 0,
  },
  pageAnimate: {
    opacity: 1,
    x: [-1000, 0],
  },
  pageExit: {
    x: 0,
  }
}

const circleOnePageMotionPropsLeft = {
  initial: 'pageInitial',
  animate: 'pageAnimate',
  exit: 'pageExit',
  variants: circleOneVariantsLeft
}



const circleOneVariantsRight = {
  pageInitial: {
    opacity: 1,
    x: 0,
  },
  pageAnimate: {
    opacity: 1,
    x: [1000, 0],
  },
  pageExit: {
    x: 0,
  },
  duration: 500,
}

const circleOnePageMotionPropsRight = {
  initial: 'pageInitial',
  animate: 'pageAnimate',
  exit: 'pageExit',
  variants: circleOneVariantsRight
}


const contentVariants = {
  pageInitial: {
    opacity: 1
  },
  pageAnimate: {
    opacity: 1
  },
  pageExit: {
    opacity: 0
  }
}

const contentPageMotionProps = {
  initial: 'pageInitial',
  animate: 'pageAnimate',
  exit: 'pageExit',
  variants: contentVariants
}






function MyApp({ Component, pageProps, router }) {
  return (
    <>


      <Layout>
        <AnimatePresence exitBeforeEnter>
          <motion.div key={router.route} {...contentPageMotionProps}>
            <Component {...pageProps} />
          </motion.div></AnimatePresence>
      </Layout>

      <Floating align={'left'}>
        <AnimatePresence exitBeforeEnter>
          <motion.div key={router.route} {...circleOnePageMotionPropsLeft}>

            <div className={'left-circle'}></div>
          </motion.div >
        </AnimatePresence>
      </Floating>


      <Floating align={'right'}>
        <AnimatePresence exitBeforeEnter>
          <motion.div key={router.route} {...circleOnePageMotionPropsRight}>

            <div className={'right-circle'}></div>
          </motion.div >
        </AnimatePresence>
      </Floating>
      {router.asPath === '/' ? <Womens /> : ''}
    </>

  )


}

export default MyApp
