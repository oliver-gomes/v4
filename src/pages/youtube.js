import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'
import { FaInstagram } from 'react-icons/fa';
export default () => (
    <Layout color="red">

        <div >
            <h1>Youtube Projects</h1>
            <p>Welcome to my Creative World! Why I call Youtube my Creative World? because here I mostly experiment with new ideas and discoveries.
                I am very curious about anything exciting and love learning new things and experimenting. I started Photography, Drawing, and Design to Code videos, all while learning,
                studying, researching them as well as finding ways to present them by teaching myself on how to do design overview and do video editing. Check out my projects if curious and feel free to follow me on Instagram & Youtube</p>

            <Social>
                <a href="https://www.instagram.com/oliversjunkyard/" style={{ background: 'none', color: 'white', textDecoration: 'none' }}><div style={{ display: 'flex', flexDirection: 'row', color: "#EAEEE9" }}><h3>Photography </h3> <FaInstagram fontSize="28" color="#EAEEE9"> </FaInstagram></div></a>
                <a href="https://www.instagram.com/oliver.codes/" style={{ background: 'none', color: 'white', textDecoration: 'none' }}><div style={{ display: 'flex', flexDirection: 'row', color: "#EAEEE9" }}><h3>Coding </h3> <FaInstagram fontSize="28" color="#EAEEE9"></FaInstagram></div></a>
            </Social>
        </div>

        <Video>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TxLjRV2rMgo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Design to React Series: Event Page designed in Figma</p>
        </Video>
        <Video >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/eDnTG1RCKpg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>This is a  To-Do List App made mainly with focus on sleek modern design and interactivity with jQuery.</p>
        </Video>
        <Video >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/meEZHI-usQ8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Eyewear Shop Landing page with Responsive Design and Navigation. </p>
        </Video>
        <Video >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xIKeTDLOuRk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Card Design with focus on CSS Grid</p>
        </Video>
        <Video >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/aCjYRuDh3pk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>As one of my favorite TV show, always wanted to draw a character from this hit series. Yes, so here it goes my take on the witty and intellectual, Tyrion Lannister. </p>
        </Video>
        <Video >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3-iGsBWaAgo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Timelapse Portrait Drawing of Diletta Gomez, photograph by Alessio Albi.</p>
        </Video>
        <Video >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jKVEBNcVY00" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>First time trying out Photography with Film Camera</p>
        </Video>
    </Layout >

)



const Social = styled.div`
width: 40%;

`

const Video = styled.div`

@media only screen and (max-width: 680px) {
iframe {
    width: 100%;
}
}
`