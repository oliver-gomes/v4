import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'

import project1 from '../images/twin-calculator.png'
import project2 from '../images/bmi-calculator.png'
import project3 from '../images/dtor-1.png'
import project4 from '../images/dtor-2.png'
export default () => (
    <Layout>

        <div>
            <h1>Design Projects</h1>
            <p>Design Tools I have used</p>
            <TechList><a href="https://reactjs.org/"> <img src="https://unpkg.com/simple-icons@1.9.23/icons/figma.svg" width="32" height="32" alt="" /></a>
                <a href="https://www.gatsbyjs.org/"><img src="https://unpkg.com/simple-icons@1.9.23/icons/framer.svg" width="32" height="32" alt="" /></a>
                <a href="https://redux.js.org/"><img src="https://unpkg.com/simple-icons@1.9.23/icons/adobephotoshop.svg" width="32" height="32" alt="" /></a>
                <a href="https://www.gatsbyjs.org/"><img src="https://unpkg.com/simple-icons@1.9.23/icons/adobeillustrator.svg" width="32" height="32" alt="" /></a>
                <a href="https://www.gatsbyjs.org/"><img src="https://unpkg.com/simple-icons@1.9.23/icons/adobeaftereffects.svg" width="32" height="32" alt="" /></a>
                <a href="https://www.gatsbyjs.org/"><img src="https://unpkg.com/simple-icons@1.9.23/icons/adobepremiere.svg" width="32" height="32" alt="" /></a>
                <a href="https://www.gatsbyjs.org/"><h3 style={{ color: 'black' }}>xd</h3></a>
            </TechList>

            <div>
                <div style={{ paddingBottom: 30 }}>
                    <h3>Twin Calculator App Design </h3>
                    <img src={project1} width="600" alt="" />
                    <Button>Behance</Button>
                </div>
                <div style={{ paddingBottom: 30 }}>
                    <h3>BMI Calculator App Design </h3>
                    <img src={project2} width="600" alt="" />
                    <Button>Behance</Button>
                </div>
                <div style={{ paddingBottom: 30 }}>
                    <h3>Design to React 01 </h3>
                    <img src={project3} width="600" alt="" />
                    <Button>Behance</Button>
                </div>
                <div style={{ paddingBottom: 30 }}>
                    <h3>Design to React 02 </h3>
                    <img src={project4} width="600" alt="" />
                    <Button>Behance</Button>
                </div>
            </div>
        </div>
    </Layout >

)



const TechList = styled.div`
width: 40%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 20px 0 10px 0;

a {
  background: none;

}
`
const Button = styled.div`

border: 1px solid #2EEC96;
border-radius: 10px;
width: 12%;
padding: 5px;
text-align: center;

:hover {
    cursor: pointer
}
`