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
      <Skill name="Pandas" x='15vw' y='-14vw' />
      <Skill name="NumPy" x='14vw' y='-22vw' />
      <Skill name="PyTorch" x='30vw' y='-5vw' />
      <Skill name="TensorFlow" x='31vw' y='6vw' />
      <Skill name="Scikit-learn" x='3vw' y='-21vw' />
      <Skill name="Spark" x='-26vw' y='17vw' />
      <Skill name="Kafka" x='19vw' y='18vw' />
      <Skill name="PostgreSQL" x='23vw' y='7vw' />
      <Skill name="AWS" x='0vw' y='14vw' />
      <Skill name="Docker" x='8vw' y='21vw' />
      <Skill name="Git" x='-8vw' y='21vw' />
      <Skill name="LLMs / LangChain" x='-14vw' y='8vw' />
    </div>
    <div className="mx-auto mt-12 max-w-5xl px-4 text-center">
      <h3 className="mb-3 text-3xl font-bold dark:text-light md:text-2xl">Cloud Engineering & CI/CD</h3>
      <p className="mx-auto mb-6 max-w-3xl text-base text-dark/75 dark:text-light/75 md:text-sm">
        Hands-on deployment, automation, container orchestration, and resilience testing across AWS ECS and EKS.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Amazon ECS', 'Amazon EKS', 'Amazon ECR', 'CloudFormation', 'CI/CD', 'Git'].map((tool) => (
          <span key={tool} className="rounded-full border border-solid border-dark/20 bg-light px-4 py-2 text-sm font-semibold text-dark shadow-sm dark:border-light/30 dark:bg-dark dark:text-light">
            {tool}
          </span>
        ))}
      </div>
      <a href="https://github.com/Fadil1212/aws-ecs-eks-cicd-pipeline" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block font-semibold text-primary underline underline-offset-4 dark:text-primaryDark">
        Explore my ECS & EKS CI/CD project
      </a>
    </div>
  </>
)

export default Skills