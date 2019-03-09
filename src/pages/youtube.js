import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'
import { FaInstagram } from 'react-icons/fa';
export default () => (
    <Layout color="red">

        <div >
            <h1>Youtube Projects</h1>
            <p>This page is where my creativity really shines, I would say. I am a very curious person, so if i find someone doing mindblowing photography, i would go out of my way to try
                learning from it and eventually creating my own. Over the years, I started Photography, Drawing, and Design to Code videos,
                all of the skills acquired by making these contents made me much stronger individuals </p>

            <Social>
                <a href="https://www.instagram.com/oliversjunkyard/" style={{ background: 'none', color: 'white', textDecoration: 'none' }}><div style={{ display: 'flex', flexDirection: 'row', }}><h3>Photography </h3> <FaInstagram fontSize="28" color="white"></FaInstagram></div></a>
                <a href="https://www.instagram.com/oliver.codes/" style={{ background: 'none', color: 'white', textDecoration: 'none' }}><div style={{ display: 'flex', flexDirection: 'row', color: "#EAEEE9" }}><h3>Coding </h3> <FaInstagram fontSize="28" color="#EAEEE9"></FaInstagram></div></a>
            </Social>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/TxLjRV2rMgo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Design to React Series: Event Page designed in Figma</p>
        </div>
        <div >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/eDnTG1RCKpg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>This is a  To-Do List App made mainly with focus on sleek modern design and interactivity with jQuery.</p>
        </div>
        <div >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/meEZHI-usQ8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Eyewear Shop Landing page with Responsive Design and Navigation. </p>
        </div>
        <div >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xIKeTDLOuRk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Card Design with focus on CSS Grid</p>
        </div>
        <div >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/aCjYRuDh3pk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>As one of my favorite TV show, always wanted to draw a character from this hit series. Yes, so here it goes my take on the witty and intellectual, Tyrion Lannister. </p>
        </div>
        <div >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3-iGsBWaAgo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Timelapse Portrait Drawing of Diletta Gomez, photograph by Alessio Albi.</p>
        </div>
        <div >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jKVEBNcVY00" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>First time trying out Photography with Film Camera</p>
        </div>
    </Layout >

)



const Social = styled.div`
width: 40%;
display: flex;
justify-content: space-evenly;

a:first-child {
    margin-right: 50px;
}
`