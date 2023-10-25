import React, { useRef } from 'react';
import Head from 'next/head'
import Layout from '../components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image';
import article1 from "../../public/images/articles/supervised.jpg"
import article2 from "../../public/images/articles/alx.jpg"
import article3 from  "../../public/images/articles/da.jpg"  
import article4 from "../../public/images/articles/sync.jpg"
import article5 from "../../public/images/articles/oasis.jpg"
import article6 from "../../public/images/articles/da4.jpg"
import article7 from "../../public/images/articles/da5.jpg" 
import article8 from "../../public/images/articles/da2.jpg"
import article9 from "../../public/images/articles/da6.jpg"
import article10 from "../../public/images/articles/da1.jpg"
import article11 from  "../../public/images/articles/da3.jpg"
import article12 from "../../public/images/articles/hackerb.jpg"
import article13 from "../../public/images/articles/hackeri.jpg"
import article14 from "../../public/images/articles/icdci.jpg"
import article15 from "../../public/images/articles/insta.jpg"
import article16 from "../../public/images/articles/jpc.jpg"
import article17 from "../../public/images/articles/jps.jpg"
import article18 from "../../public/images/articles/google.jpg"
import article19 from "../../public/images/articles/skillup.jpg"
import article20 from "../../public/images/articles/addiscoder.jpg" 
import article21 from "../../public/images/articles/dev.jpg"
import article22 from  "../../public/images/articles/devback.jpg"
import { motion } from "framer-motion"
import { useMotionValue } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';



const FramerImage = motion(Image);


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

const FeaturedArticles = ({ img, title, summary, link }) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl
         dark:bg-dark dark:border-light'>

             <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl'/>
                <Link href={link} target="_blank"
                className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
        
            
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

            <Link href={link} target="_blank">
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibol dark:text-primaryDark'></span>

        </li>
    )
}
const articles = () => {
  return (
    <>
      <Head>
        <title>Fadil  | Certificates Page</title>
        <meta name="description" content="any description" />
          </Head>
          <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
              <Layout className='pt-16'>
                  
                  <AnimatedText text='Words Can Change The World' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                  <h2 className='font-bold text-4xl w-full text-center my-16 mt-32' >Certifications</h2>
          <ul className='grid grid-cols-3 gap-10 lg:gap-8 md:grid-cols-1 md:gap-y-16 '> {/* Added mx-auto and max-w-screen-lg */}
            <FeaturedArticles
             title="Supervised Machine learning: Regression and classification"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
              img={article1}
            />
            <FeaturedArticles
              title="Alx full stack software engineering"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="/"
              img={article2}
                      />
                      <FeaturedArticles
               title="Google Data Analytics"
              link="https://drive.google.com/file/d/1anVzhuK5ifsbLJCRcvUzfw-Y-GGNgOjs/view?usp=drive_link"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              img={article3}
                      />
                      <FeaturedArticles
             title="SYNC:Machine learning Virtual internship"     
             link="https://drive.google.com/file/d/1jL3Jwm9rZhWC2VpVaYrAQ15V3vQU5TxK/view?usp=drive_link"           
            summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
            img={article4}
                      />
                      <FeaturedArticles
               title="Oasis info byte:Data science internship"
               
               link="https://drive.google.com/file/d/1QBtfcvXOvoW3AdIxFRrW-tHk9ixjc-qc/view?usp=drive_link"
           
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              

              img={article5}
                      />
                      <FeaturedArticles
              title="Data analysis with R"
              
              link="https://drive.google.com/file/d/1MilonQppJa_ObKCfytnei1rqhqQaEFbu/view?usp=drive_link"
         
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              img={article6}
                      />
                                <FeaturedArticles
              title="Google Data Analytics Capstone: Complete a Case Study"
             link="https://drive.google.com/file/d/1S9adKqflZvC5htf_wNV7DUNpQ9s2alPU/view?usp=drive_link"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              img={article7}
                      />
                                <FeaturedArticles
              title="Process Data from Dirty to Clean"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="https://drive.google.com/file/d/1aItgH5atxNgAJSzuCv2E8N0m3637X12k/view?usp=drive_link"
              img={article8}
                      />
                                <FeaturedArticles
              title="Share Data Through the Art of Visualization"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="https://drive.google.com/file/d/1-DLGVfqIKQJYJeUfE2dC7Xh5RpiUTm4l/view?usp=drive_link"
              img={article9}
                      />
                                <FeaturedArticles
              title="Ask Questions to Make Data-Driven Decisions"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="https://drive.google.com/file/d/1tCZ_jy2M6vHkuZSr6Eqb0EteXhTGZ851/view?usp=drive_link"
              img={article10}
                      />
                                <FeaturedArticles
              title="Prepare Data for Exploration"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="https://drive.google.com/file/d/1bNIrjQs6m7R19L3M3yqgoZNVthqDO2uu/view?usp=drive_link"
                          img={article11}
                          
                      />
                       <FeaturedArticles
              title="HackerRank problem solving(basic)"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="https://drive.google.com/file/d/1zWZ0tK4hCI5-2matYasyxkqA34HxKj9G/view?usp=drive_link"
                          img={article12}
                          
                      />
                       <FeaturedArticles
              title="HackerRank problem solving(intermediate)"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="https://drive.google.com/file/d/1cIhVhUwyeDrUIQg6yibOLyjzrPs-9xdz/view?usp=drive_link"
                          img={article13}
                          
                      />
                       <FeaturedArticles
              title="ICDCI:2nd workshop on cyber security"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="https://drive.google.com/file/d/1e7agA6hLYdN6JZsZuXMAUsLvrxsKXmPt/view?usp=drive_link"
                          img={article14}
                          
                      />
                               <FeaturedArticles
              title="DevTown:Instagram clone"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="https://drive.google.com/file/d/1j74sNdoE9LOBLFaafk0n6k8GvC6ky4QZ/view?usp=drive_link"
                          img={article15}
                          
                      />
                               <FeaturedArticles
              title="JP Morgan :Cybersecurity Virtual Experience Program"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="https://drive.google.com/file/d/1P1IC2Emhza7fxWp4kTiOK6K2ohgKCyIP/view?usp=drive_link"
                          img={article16}
                          
                      />
                               <FeaturedArticles
              title="JP Morgan :Software Engineering Virtual Experience"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="https://drive.google.com/file/d/1dX8z0AWiLFoMuTE2cCto1YU4YxPiXZWz/view?usp=drive_link"
                          img={article17}
                          
                      />
                              
                               <FeaturedArticles
              title="Google Developers club"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="https://drive.google.com/file/d/1Feys8vAxO3h7k06WmB579TO_3DsaRfSb/view?usp=drive_link"
                          img={article18}
                          
                      />
                               <FeaturedArticles
              title="Skill up:Introduction to Cryptocurrency"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="https://drive.google.com/file/d/1Ccedf56F5Xgj42y8KjB1EqKMMF8cHktX/view?usp=drive_link"
                          img={article19}
                          
                      />
                       <FeaturedArticles
              title="Addis Coder:summer coding camp"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="https://drive.google.com/file/d/1X9ZAD-qECJsRppxdZX3L9Pvb_xVmNqJZ/view?usp=drive_link"
                          img={article20}
                          
                      />
                               <FeaturedArticles
              title="DevTown"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="https://drive.google.com/file/d/1t_T5RuuXHFy7Qt-rFzy8CyeETbURdzK_/view?usp=drive_link"
                          img={article21}
                          
                      />
                               <FeaturedArticles
              title="DevTown:Backend Web Development"
              summary="Learn how to build a custom pagination component in ReactJS from scratch
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              
              link="https://drive.google.com/file/d/1T4bvKBKy2NjZSYxM5__cs0xKYa8_vkTr/view?usp=drive_link"
                          img={article22}
                          
                      />
                  </ul>
                  <h2 className='font-bold text-4xl w-full text-center my-16 mt-32' >Featured Certificates</h2>
                  <ul className='mx-auto max-w-screen-lg'>
                      <Article
                          title="Supervised Machine learning: Regression and classification"
                          date="Feb 28, 2023"
                          link="https://drive.google.com/file/d/1D_oP0zhl8ThwDQRnmBitlRQOMvX-aFA6/view?usp=drive_link"
                          img={article1}
                      
                      />
                       <Article
                          title="Alx full stack software engineering"
                          date="Feb 23, 2023"
                          link="https://drive.google.com/file/d/1lj3u-cDYgR39dfvwQ0MjTiyM-PDrCHvE/view?usp=drive_link"
                          img={article2}
                      
                      />
                       <Article
                          title="Google Data Analytics"
                          date="June 15, 2023"
                          link="https://drive.google.com/file/d/1anVzhuK5ifsbLJCRcvUzfw-Y-GGNgOjs/view?usp=drive_link"
                          img={article3}
                      
                      />
                       <Article
                          title="SYNC:Machine learning Virtual internship"
                          date="June 06,2023"
                          link="https://drive.google.com/file/d/1jL3Jwm9rZhWC2VpVaYrAQ15V3vQU5TxK/view?usp=drive_link"
                          img={article4}
                      
                      />
                       <Article
                          title="Oasis info byte:Data science internship"
                          date="September 6, 2023"
                          link="https://drive.google.com/file/d/1QBtfcvXOvoW3AdIxFRrW-tHk9ixjc-qc/view?usp=drive_link"
                          img={article5}
                      
                      />
                       <Article
                          title="Data analysis with R"
                          date="March 23, 2023"
                          link="https://drive.google.com/file/d/1MilonQppJa_ObKCfytnei1rqhqQaEFbu/view?usp=drive_link"
                          img={article6}
                      
                      />
                       <Article
                          title="Google Data Analytics Capstone: Complete a Case Study"
                          date="june 15, 2023"
                          link="https://drive.google.com/file/d/1S9adKqflZvC5htf_wNV7DUNpQ9s2alPU/view?usp=drive_link"
                          img={article7}
                      
                      />
                  </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
