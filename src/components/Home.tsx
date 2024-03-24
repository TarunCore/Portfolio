import React, { useRef } from 'react'
import { Box, CssBaseline, Grid } from '@mui/material'
import { TypeAnimation } from 'react-type-animation';
import Develop from "../assets/develop.png"
import GithubIcon from "../assets/github-stroke-rounded.svg"
import LinkedInIcon from "../assets/linkedin-01-stroke-rounded.svg"
import MailIcon from "../assets/mail-01-stroke-rounded.svg"
import TwitterIcon from "../assets/twitter-stroke-rounded.svg"
import HTMLIcon from "../assets/skills/html.svg"
import CSSIcon from "../assets/skills/css.svg"
import JSIcon from "../assets/skills/js.svg"
import ExpressIcon from "../assets/skills/express.svg"
import Firebase from "../assets/skills/firebase.svg"
import MongoIcon from "../assets/skills/mongo.svg"
import TSIcon from "../assets/skills/ts.svg"
import PythonIcon from "../assets/skills/python.svg"
import JavaIcon from "../assets/skills/java.svg"
import CIcon from "../assets/skills/cpp.png"
import CppIcon from "../assets/skills/cpp2.png"
import AndroidIcon from "../assets/skills/android.svg"
import Pattern from "../assets/pattern.svg"
import ProjectBG from "../assets/project-bg.svg"
import FFCS from "../assets/ffcs.jpg"
import CRAFT from "../assets/craft.png"
import MySE from "../assets/MySE.png"
import BullMarket from "../assets/BullMarket.png"
import ReactIcon from "../assets/skills/react.svg"
import MUIIcon from "../assets/skills/mui.svg"
import {motion, useScroll , useTransform} from 'framer-motion';
import ContactMe from './ContactMe';
type Props = {}
const projects=[{
    title: "FFCS Combogen",
    description: "Timetable Generating website for VIT students",
    additional: "Used by 6000+ VIT students",
    color: FFCS,
    deployedLink: "https://ffcscombogen.in/",
    githubLink: "https://github.com/TarunCore/FFCS-Combogen-JS",
    linkedInLink: "https://www.linkedin.com/feed/update/urn:li:activity:7085654506952163328/"
},{
    title: "Code Craft",
    description: "A collaborative code editor where multiple users can edit code at same time similar to Google Docs",
    additional: "",
    color: CRAFT,
    deployedLink: "https://code-craft-live.netlify.app/",
    githubLink: "https://github.com/TarunCore/Code-Craft"
},
{
    title: "My School Education",
    description: "An android app for schools and students to have a centralized app ",
    additional: "",
    color: MySE,
    deployedLink: "https://play.google.com/store/apps/details?id=com.innocraze.myse",
    githubLink: "https://github.com/TarunCore/MySchoolEducation"
},
{
    title: "Bull Market",
    description: "A realtime stock market intra day stocks recommender with chatting features",
    additional: "",
    color: BullMarket,
    deployedLink: "https://play.google.com/store/apps/details?id=com.tweshllc.kskdhallmill",
    githubLink: "https://github.com/TarunCore/BullMarket"
}]
const Home = (props: Props) => {
  return (
    <div className='m-[20px]'>
        <Grid container minHeight={"95vh"}>
            <Grid item md={8}>
                <Box display={"flex"} flexDirection={"column"} alignContent={"flex-start"} justifyContent={"center"} gap={"15px"} height={"100%"} ml={5}>
                <h5 className='font-jetmono text-purple-600 text-xl'>Hi, my name is</h5>
                <h1 >
                    <span className='font-poppins text-5xl name relative'>Tarun E</span>
                </h1>
                <TypeAnimation
                    sequence={[
                        `I'm a full stack developer`,
                        1000,
                        'I develop Android Apps',
                        1000,
                        
                    ]}
                    wrapper="span"
                    speed={50}
                    className='font-jetmono text-3xl text-gray-400'
                    repeat={Infinity}
                />
                <div className='flex gap-4'>
                    <a href="https://github.com/TarunCore">
                        <img src={GithubIcon} alt="github-01" width="24" height="24" />
                    </a>
                    <a href="https://www.linkedin.com/in/tarun-e-931493256/">
                        <img src={LinkedInIcon} alt="linkedin-01" width="24" height="24" />
                    </a>
                    <a href="mailto:itstarun14@gmail.com">
                        <img src={MailIcon} alt="mail-01" width="24" height="24" />
                    </a>
                    <a href="https://twitter.com/tarun_hash">
                        <img src={TwitterIcon} alt="twitter-01" width="24" height="24" />
                    </a>
                </div>
                </Box>
            </Grid>
            <Grid item md={4}>
                <img src={Develop} alt="" className='max-h-[90vh] md:mt-[10vh]'/>
            </Grid>
        </Grid>

        <div className='w-full pl-10 pr-10'>
            <h2 className='text-2xl md:text-5xl font-poppins text-center text-gray-100'>
            Currently pursing CSE at VIT, Vellore. I'm dedicated to crafting top-tier applications. I focus on scalability and performance, utilizing modern frontend and backend architecture to deliver outstanding user experiences.
            </h2>
        </div>

        <Grid container>
            <Grid item md={8} m={6}>
            <div>
                    <h1 className='myskills seq text-5xl w-fit font-poppins font-medium mb-2'>My Skills</h1>
                    <h5 className='md:max-w-lg font-medium text-[1.65rem]'>I like to take responsibility to craft aesthetic user
                        experience using modern frontend architecture.</h5>
                <div className='mt-5'>
                    <h5 className='text-gray-300 mb-3 uppercase font-poppins'>Programming Languages</h5>
                    <div className='flex h-16 gap-6' >
                            <img src={PythonIcon} alt=""/>
                            <img src={CIcon} alt="" />
                            <img src={CppIcon} alt="" />
                            <img src={JavaIcon} alt="" />
                    </div>
                </div>
                <div className='mt-5'>
                    <h5 className='text-gray-300 mb-3 uppercase font-poppins'>Frontend Languages</h5>
                    <div className='flex h-16 gap-6' >
                            <img src={HTMLIcon} alt=""/>
                            <img src={CSSIcon} alt="" />
                            <img src={JSIcon} alt="" />
                            <img src={ReactIcon} alt="" />
                            <img src={TSIcon} alt="" />
                            <img src={MUIIcon} alt="" />
                            <img src={HTMLIcon} alt="" />
                    </div>
                </div>
                <div className='mt-5'>
                    <h5 className='text-gray-300 mb-3 uppercase font-poppins'>Backend Technologies</h5>
                    <div className='flex h-16 gap-6' >
                            <img src={ExpressIcon} alt=""/>
                            <img src={MongoIcon} alt="" />
                            <img src={Firebase} alt="" />
                    </div>
                </div>
                </div>
            </Grid>
            <Grid item md={4} alignItems={"center"}>
                        {/* <img src={Pattern} alt="" className='ml-16'/> */}
            </Grid>

        </Grid>
        
        <HorizontalScrollCarousel/>

        <ContactMe/>
    </div>
  )
}

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  
    return (
        <section ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex flex-col h-screen justify-center overflow-hidden">
        <h1 className='myskills seq text-5xl w-fit font-poppins font-medium mb-12 p-2'>Projects</h1>
          <motion.div style={{ x }} className="flex gap-4">
            {projects.map((project, ind) => {
              return <Card key={ind} title={project.title} description={project.description} additional={project.additional} color={project.color} githubLink={project.githubLink} deployedLink={project.deployedLink} linkedInLink={project.linkedInLink}/>;
            })}
          </motion.div>
        </div>
      </section>
    );
  };



interface CardProps{
    title: string;
    description: string,
    additional: string,
    color: any,
    deployedLink: string,
    githubLink: string,
    linkedInLink?: string
}

const Card = (props: CardProps)=> {
    return (
        <div
        className={`w-[450px] h-[360px] bg-[${props.color}] p-5 border border-white rounded-lg flex flex-col gap-2`}
      >
        <h5 className='font-medium text-3xl'>{props.title}</h5>
        <p>{props.description}</p>
        <p>{props.additional}</p>
        <div className='flex gap-2 justify-around'>
            <a href={props.deployedLink} className='text-purple-300'>Live Link</a>
            <a href={props.githubLink} className='text-purple-300'>Github Link</a>
        </div>
        <img src={props.color} alt="" />
      </div>
      
    );
  };

export default Home