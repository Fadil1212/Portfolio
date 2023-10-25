
import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-centerr justify-between  md:w-[80%]'>
        <LiIcon reference={ref} />

        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span >
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}
const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 dark:text-purple w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Education
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative md:w-full lg:w-[90%]'>

                <motion.div
                style={{scaleY: scrollYProgress}}
                    className='absolute left-7 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
                    first-letter: md:w-[2px] md:left-[30px] xs:left-[20px]'
                />
                    
        
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                   
                <Details
                        type=" Software Engineering" time="2022-2023 " 
                        place="ALX"
                        info="Different algorithms and Technologies like shellscript,sql,python,c,javascript and many more."
                        


                    />
                    <Details
                        type=" Bachelor Of Science In Computer Science" time="2021-2025 " 
                        place="KALINGA INSTITUTE OF INDUSTRIAL TECHNOLOGY"
                        info="Relevant courses included Data Structures and Algorithms, Object orientd programming,Web Technology,Artificial 
Intelligence and many more."
                        


                    />
                        <Details
                        type=" High School " time="2018-2020 " 
                        place="Ethio-National school"
                        info="Relevant courses included Fundamental Physics , Mathematics,IT."
                        


                    />
                       

                     
                </ul>
            </div>
        </div>
    )
}
export default Education