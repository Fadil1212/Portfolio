import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
    <LiIcon reference={ref} />
    <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
      <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;
        <a href={companyLink} target="_blank" rel="noreferrer" className='text-primary dark:text-primaryDark capitalize'>@{company}</a>
      </h3>
      <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>{time} | {address}</span>
      <p className='font-medium w-full md:text-sm'>{work}</p>
    </motion.div>
  </li>
}

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({ target: ref, offset: ["start end", "center start"] })
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl dark:text-purple mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
      <div ref={ref} className='w-[75%] mx-auto relative md:w-full lg:w-[90%]'>
        <motion.div style={{scaleY: scrollYProgress}} className='absolute left-7 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            position="Business Development Analyst Intern"
            company="Clinion"
            companyLink="https://clinion.com/"
            time="June 2024 – June 2025"
            address="Hyderabad, India"
            work="Analyzed business and operational data using Excel, SQL, and Python to identify trends, evaluate opportunities, and support data-driven decisions. Built reports and visualizations to track key metrics, conducted market and competitor analysis, and translated analytical findings into actionable insights for business development initiatives."
          />
          <Details
            position="Research Intern"
            company="IoT Lab, BITS Pilani"
            companyLink="https://www.bits-pilani.ac.in/"
            time="May 2023 – December 2023"
            address="India"
            work="Researched IoT and Digital Twin frameworks for smart manufacturing, focusing on sensor integration, real-time analytics, and virtual modeling. Contributed to published research on Digital Twins in Smart Manufacturing."
          />
        </ul>
      </div>
    </div>
  )
}
export default Experience