import { useInView, useMotionValue, useSpring } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image';
import profilePic from "../../public/images/profile/Profile-2.png";
import React, { useEffect, useRef } from 'react'
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import TransitionEffect from '@/components/TransitionEffect';




const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])


    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])
        
         
    return <span ref={ref}></span>
}
const about = () => {
    return (
        <>
            <Head>
                <title>About | Fadil Mohammed Surur</title>
                <meta name="description" content="Learn about Fadil Mohammed Surur, an M.S. Data Analytics student at George Washington University working across data analytics, machine learning, AI, and big-data systems." />
            </Head>
             <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                
                <Layout>
                    <AnimatedText text="About Me" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 dark:text-purple' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                           <p className='font-normal  text-xl '>
                         Hi, I’m Fadil Mohammed Surur, an M.S. Data Analytics student at George Washington University with a background in computer science and experience across data analytics, machine learning, and AI. I enjoy transforming complex data into meaningful insights and building practical, end-to-end solutions—from data processing and visualization to predictive modeling and deployment.<br/><br/>My work spans Python, SQL, Power BI, machine learning, deep learning, and big-data technologies such as Spark and Kafka. I’ve built projects involving graph neural networks, real-time data pipelines, business intelligence dashboards, and interactive AI applications. I’m especially interested in using data and AI to solve real-world problems and support better decision-making.</p>



                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                         bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'></div>
                            <Image src={profilePic} alt="Fadil" className='w-full h-auto rounded 2xl'
                             priority
                sizes="(max-width:768px) 100vw, 
                (max-width:1200px)50vw,
                33vw"
                            
                            />
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl sx:text-4xl'>
                                    <AnimatedNumbers value={500} />K+
                                </span >
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                                xl:text-center md:text-lg sm:text-base sx:text-sm' >Records Analyzed</h2>
                            </div>
                              <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold  md:text-6xl sm:text-5xl sx:text-4xl'>
                                    <AnimatedNumbers value={10} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base sx:text-sm'>Technical Projects</h2>
                            </div>
                              <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold  md:text-6xl sm:text-5xl sx:text-4xl'>
                                    <AnimatedNumbers value={2} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base sx:text-sm'>Years of Research & Industry Experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
                
            </main>
        </>
    )
}
export default about



