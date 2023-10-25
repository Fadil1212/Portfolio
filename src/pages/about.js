import { useInView, useMotionValue, useSpring } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image';
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
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
                <title>Fadil | About Page</title>
                <meta name="description" content="any description" />
            </Head>
             <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                
                <Layout>
                    <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 dark:text-purple' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                           <p className='font-normal  text-xl '>
                         Hello I am Fadil Mohammed, a passionate Data Scientist/Anlyst  with more than of 2 Years experience in leveraging data to drive insights and user-friendly solutions. I firmly believe that data-driven decision-making is crucial in today's fast-paced world. Additionally, I am a committed designer who believes in solving problems and creating intuitive experiences for users. With my skills and passion, I am excited to collaborate on impactful data-driven projects and bring design excellence to your next endeavor. Let's work together to create valuable insights and enjoyable user experiences!</p>



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
                                    <AnimatedNumbers value={10} />+
                                </span >
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                                xl:text-center md:text-lg sm:text-base sx:text-sm' >Satisfied Clients</h2>
                            </div>
                              <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold  md:text-6xl sm:text-5xl sx:text-4xl'>
                                    <AnimatedNumbers value={10} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base sx:text-sm'>Projects Completed</h2>
                            </div>
                              <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold  md:text-6xl sm:text-5xl sx:text-4xl'>
                                    <AnimatedNumbers value={2} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base sx:text-sm'>Years of Experience</h2>
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



