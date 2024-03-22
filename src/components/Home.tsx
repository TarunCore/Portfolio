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
import ReactIcon from "../assets/skills/react.svg"
import MUIIcon from "../assets/skills/mui.svg"
import {motion, useScroll , useTransform} from 'framer-motion';
type Props = {}

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
            <h2 className='text-2xl md:text-6xl font-poppins text-center'>
            Currently pursing CSE at VIT, Vellore. I'm focused
            on building scalable and performant apps. I take
            responsibility to craft a good user experience using
            modern frontend and backend architecture.
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


        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nobis eveniet nostrum ducimus voluptatum ex possimus, earum saepe odit mollitia cum distinctio nisi ullam molestias facilis! Nobis repudiandae deserunt fuga.
        </div>
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
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {projects.map((project, ind) => {
              return <Card key={ind} title={project.title} description={project.description} additional={project.additional} color={project.color}/>;
            })}
          </motion.div>
        </div>
      </section>
    );
  };

const cards = [2,324,1,3,4,5,6,7,8,9,12,13,14]
const projects=[{
    title: "FFCS Combogen",
    description: "Timetable Generating website for VIT students",
    additional: "Used by 6000+ VIT students",
    color: "red"
},{
    title: "Code Craft",
    description: "Many people can code at realtime similar to Google docs",
    additional: "Used by 6000+ VIT students",
    color: "white"
},
{
    title: "My School Education",
    description: "An android app for schools and students to have a centralized app ",
    additional: "Used by 6000+ VIT students",
    color: "blue"
},
{
    title: "Bull Market",
    description: "A realtime stock market indra day stocks recommender",
    additional: "Used by 6000+ VIT students",
    color: "orange"
}]

interface CardProps{
    title: string;
    description: string,
    additional: string,
    color: string
}

const Card = (props: CardProps)=> {
    return (
        <div
        className={`w-[400px] h-[250px] bg-[${props.color}] p-5`}
      >
        <h5>{props.title}</h5>
        <p>TimeTable live for wfeed</p>
        <p>6k+ users</p>
      </div>
      
    );
  };

export default Home