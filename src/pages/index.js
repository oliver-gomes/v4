import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
// import Typist from 'react-typist';
import { FaLinkedinIn, FaGithub, FaInstagram, FaBehance } from 'react-icons/fa';


import styled from 'styled-components'

export default () => (
  <Layout>

    <h1>I am Oliver, nice to meet you 😄!</h1>
    <h3>Software developer with focus on Front End Development</h3>
    <p>
    I love to design and develop web & mobile apps <br></br>that harmonizes the passion put behind it
      
    </p>

    <IconList>
      <a href="https://www.linkedin.com/in/oliver-gomes/"><FaLinkedinIn fontSize={30}/></a>
      <a href="https://github.com/oliver-gomes"><FaGithub fontSize={30}/></a>
      <a href="https://www.instagram.com/oliver.codes/"><FaInstagram fontSize={30}/></a>
      <a href="https://www.behance.net/oliver-gomes/"><FaBehance fontSize={30}/></a>
    
    </IconList>
    <p >ogomesphoto@gmail.com</p>
    <Float style={{marginBottom: 60, marginTop: 60}}>
      <svg width="229" height="36" viewBox="0 0 229 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 2C7.66667 4 16.4 8 18 16C20 26 27 34 36 34" stroke="#EAEEE9" stroke-width="3" />
        <path d="M97 2C103.667 4 112.4 8 114 16C116 26 123 34 132 34" stroke="#EAEEE9" stroke-width="3" />
        <path d="M194 2C200.667 4 209.4 8 211 16C213 26 220 34 229 34" stroke="#EAEEE9" stroke-width="3" />
        <path d="M55 6L78.5 29.5" stroke="#EAEEE9" stroke-width="3" />
        <path d="M54 29.5L77.5 6" stroke="#EAEEE9" stroke-width="3" />
        <path d="M151 6L174.5 29.5" stroke="#EAEEE9" stroke-width="3" />
        <path d="M150 29.5L173.5 6" stroke="#EAEEE9" stroke-width="3" />
      </svg>

    </Float>
    <h3 >Highlighted Projects</h3>
    {/* 1 */}
    <Link to="/react-movie" style={{ color: '#333333' }}>
      <ProjectTitle className="font">React Movie</ProjectTitle>
      <ProjectDetail >Modern fast movie database web app with React using The Movie DB API.</ProjectDetail>
    </Link>
 
    {/* 2 */}
    <Link to="/resume-maker" style={{ color: '#333333' }}>
      <ProjectTitle className="font">Resume Maker</ProjectTitle>
      <ProjectDetail >Create your own Resume, download PDF or print right from the App</ProjectDetail>
    </Link>
    {/* 3 */}
    <Link to="/react-weather" style={{ color: '#333333' }}>
      <ProjectTitle className="font">Weather App</ProjectTitle>
      <ProjectDetail >A Weather Finding App that gives real live weather information anywhere <br></br>with openweathermap.org API.</ProjectDetail>
    </Link>
    <Float style={{marginBottom: 60, marginTop: 60}}>
      <svg width="229" height="36" viewBox="0 0 229 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 2C7.66667 4 16.4 8 18 16C20 26 27 34 36 34" stroke="#EAEEE9" stroke-width="3" />
        <path d="M97 2C103.667 4 112.4 8 114 16C116 26 123 34 132 34" stroke="#EAEEE9" stroke-width="3" />
        <path d="M194 2C200.667 4 209.4 8 211 16C213 26 220 34 229 34" stroke="#EAEEE9" stroke-width="3" />
        <path d="M55 6L78.5 29.5" stroke="#EAEEE9" stroke-width="3" />
        <path d="M54 29.5L77.5 6" stroke="#EAEEE9" stroke-width="3" />
        <path d="M151 6L174.5 29.5" stroke="#EAEEE9" stroke-width="3" />
        <path d="M150 29.5L173.5 6" stroke="#EAEEE9" stroke-width="3" />
      </svg>

    </Float>


    <p>Tech I like to Work with</p>
    <TechList><a href="https://reactjs.org/"> <img src="https://unpkg.com/simple-icons@1.9.23/icons/react.svg" width="32" height="32" alt="" /></a>
      <a href="https://redux.js.org/"><img src="https://unpkg.com/simple-icons@latest/icons/redux.svg" width="32" height="32" alt="" /></a>
      <a href="https://www.gatsbyjs.org/"><img src="https://unpkg.com/simple-icons@latest/icons/gatsby.svg" width="32" height="32" alt="" /></a>
      <a href="https://nodejs.org/en/"><img src="https://unpkg.com/simple-icons@1.9.23/icons/node-dot-js.svg" width="32" height="32" alt="" /></a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/"><img src="https://unpkg.com/simple-icons@1.9.23/icons/javascript.svg" width="32" height="32" alt="" /></a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/"><img src="https://unpkg.com/simple-icons@1.9.23/icons/css3.svg" width="32" height="32" alt="" /></a>
      
    </TechList>

  </Layout>
)

const IconList = styled.div`
width: 20%;
display: flex;
flex-direction: row;
margin: 10px 0 10px 0;

a {
  background: none;
  color:#2EEC96 ;
  padding-right: 20px
}
`
const TechList = styled.div`
width: 30%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 20px 0 10px 0;

a {
  background: none;

}
`

const ProjectTitle = styled.p`
margin: 2px 0;
font-size: 22px;
color: #2EEC96 
`
const ProjectDetail = styled.p`
font-size: 16px;
`

const Float = styled.div`
transform: translatey(0px);
	animation: float 6s ease-in-out infinite;
@keyframes float {
	0% {
		
		transform: translatey(0px);
	}
	50% {
		
		transform: translatey(-10px);
	}
	100% {
	
		transform: translatey(0px);
	}
}
`