import React, { useRef } from 'react';
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { GithubIcon } from '@/components/Icons'
import {motion} from "framer-motion"
import TransitionEffect from '@/components/TransitionEffect'
import { useMotionValue } from 'framer-motion';
import project1 from "../../public/images/projects/spid.jpg"
import project2 from "../../public/images/projects/google.png"
import project3 from "../../public/images/projects/house.jpg"
import project4 from "../../public/images/projects/chatbot.jpeg"
import project5 from "../../public/images/projects/mask.png"
import project6 from "../../public/images/projects/sign.png"
import project7 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import project8 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import project9 from "../../public/images/projects/crypto-screener-cover-image.jpg"

import article5 from "../../public/images/articles/oasis.jpg"


const MovingImg = ({ title, img, link }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
       imgRef.current.style.display = "inline-block";
       x.set(event.pageX);
       y.set(-10)
    }
    function handleMouseLeave(event) {
       imgRef.current.style.display = "none";
       x.set(0);
       y.set(0)
    }
    return (
        <Link href={link} target="_blank"
        
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        
        >
            
            
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{opacity:1, transition:{duration:0.2}}}
                ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' />

            </Link>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{once: true}}
            className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark 
        first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
        sm:flex-col'>
            <MovingImg title={title} img={img} link={link} />
           
            <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}



const FramerImage = motion(Image);
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 
        '>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] 
            '/>
            
            <Link href={link} target="_blank"
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
        
            
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                priority
                sizes="(max-width:768px) 100vw, 
                (max-width:1200px)50vw,
                50vw"
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg-pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-light sm:text-sm'>{type}</span>
                <Link href={link} target="_blank"
                 className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'> <GithubIcon />
                    </Link>
                    <Link href={link} target="_blank"
                     className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg 
                    font-semibold dark:bg-light dark:text-dark
                    sm:px-4 sm:text-base
                    '>Visit Project
                    </Link>

                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
            md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
               <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{ scale: 1.05 }}
                    transition={{duration:0.2}}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" 
                className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                {/* <p className='my-2 font-medium text-dark'>{summary}</p> */}
                <div className='w-full mt-2 flex items-center justify-between'>
                      <Link href={link} target="_blank" className='text-lg font-semibold underline md:text-base
                      '>Visit </Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6'> 
                    
                    <GithubIcon />{" "}
                    </Link>
                  

                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
      <>
          <Head>
              <title>Fadil| Projects Page</title>
              <meta name="description" content="any description" />

          </Head>
          <TransitionEffect />
          <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
              <Layout>
                  <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!texxt-4xl dark:text-purple' />



                  <div className='grid grid-cols-12 gap-24 gap-y-32  xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0' >
                      <div className='col-span-12'>
                          <FeaturedProject
                              
                              title="SPID"
                              img={project1}
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                              link="https://github.com/Fadil1212/SPID"
                              github="https://github.com/Fadil1212/SPID"
                              type="Featured Project"
                          
                          />
                      </div>
                      <div className='col-span-6 sm:col-span-12'>
                          <Project
                              
                              title="Google-Data-Analytics-Cyclistic-Case-Study"
                              img={project2}
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                              link="https://github.com/Fadil1212/Google-Data-Analytics-Cyclistic-Case-Study"
                              github="https://github.com/Fadil1212/Google-Data-Analytics-Cyclistic-Case-Study"
                              type="Featured Project"
                          
                          />
                      </div>
                      <div className='col-span-6 sm:col-span-12'>
                            <Project
                              
                              title="Bengaluru-House-price-Prediction"
                              img={project3}
     summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                              link="https://github.com/Fadil1212/Bengaluru-House-price-Prediction"
                              github="https://github.com/Fadil1212/Bengaluru-House-price-Prediction"
                              type="Featured Project"
                          
                          /> 
                      </div>
                        <div className='col-span-12'>
                              <FeaturedProject
                              
                              title="Chat-Bot "
                              img={project4}
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                              link="https://github.com/Fadil1212/Chat-Bot"
                              github="https://github.com/Fadil1212/Chat-Bot"
                              type="Featured Project"
                          
                          />
                      </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                              
                              title="Real-time-Face-Mask-Detection"
                              img={project5}
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                              link="https://github.com/Fadil1212/Real-time-Face-Mask-Detection"
                              github="https://github.com/Fadil1212/Real-time-Face-Mask-Detection"
                              type="Featured Project"
                          
                          />
                      </div>
                      <div className='col-span-6 sm:col-span-12'>
                            <Project
                              
                              title="Sign_language Classification"
                              img={project6}
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                              link="https://github.com/Fadil1212/Sign_language_classification"
                              github="https://github.com/Fadil1212/Sign_language_classification"
                              type="Featured Project"
                          
                          />



                          
                      </div>
                  </div>
                  
                  <Article
                          title="Boston-house-price-predictions "
                          date="September 6, 2023"
                          link="https://github.com/Fadil1212/Boston-house-price-predictions"
                           img={article5}
                      
                      />
                      <Article
                          title="CodeClause_Color-Detection"
                          date="September 6, 2023"
                          link="https://github.com/Fadil1212/CodeClause_Color-Detection"
                           img={article5}
                      
                      />
                      <Article
                          title="CodeClause_Brain-Tumor-Detection-with-Data-Science"
                          date="September 6, 2023"
                          link="https://github.com/Fadil1212/CodeClause_Brain-Tumor-Detection-with-Data-Science"
                           img={article5}
                      
                      />
                      <Article
                          title="Unimployment-analysis-using-data-science "
                          date="September 6, 2023"
                          link="https://github.com/Fadil1212/spam-mail-classifier"
                           img={article5}
                      
                      /> 
                      <Article
                      title="Spam-mail-classifier  "
                      date="September 6, 2023"
                      link="https://github.com/Fadil1212/Unimployment-analysis-using-data-science"
                       img={article5}
                  
                  />


                  
              </Layout>
              
          </main>
      </>
  )
}

export default projects