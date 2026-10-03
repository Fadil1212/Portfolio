import React from 'react'
import { motion } from "framer-motion"

const Skill = ({ name, x, y }) => (
  <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
    whileHover={{ scale: 1.05 }}
    initial={{ x: 0, y: 0 }}
    whileInView={{ x, y, transition: { duration: 1.5 } }}
    viewport={{once: true}}>
    {name}
  </motion.div>
)

const Skills = () => (
  <>
    <h2 className='font-bold text-8xl mt-64 w-full dark:text-purple text-center md:text-6xl md:mt-32'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
      <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs'
        whileHover={{scale:1.05}}>Data Analytics & AI</motion.div>
      <Skill name="Python" x='-22vw' y='-3vw' />
      <Skill name="SQL" x='-7vw' y='-13vw' />
      <Skill name="Power BI" x='-22vw' y='-16vw' />
      <Skill name="Pandas / NumPy" x='15vw' y='-14vw' />
      <Skill name="PyTorch" x='30vw' y='-5vw' />
      <Skill name="Scikit-learn" x='3vw' y='-21vw' />
      <Skill name="Spark" x='-26vw' y='17vw' />
      <Skill name="Kafka" x='19vw' y='18vw' />
      <Skill name="PostgreSQL" x='23vw' y='7vw' />
      <Skill name="AWS / Docker" x='0vw' y='14vw' />
      <Skill name="LLMs / LangChain" x='-14vw' y='8vw' />
    </div>
  </>
)

export default Skills