import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'

import project1 from '../images/twin-calculator.png'
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
            </TechList>

            <div>
                <img src={project1} width="600" alt="" />

            </div>
        </div>
    </Layout>

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
const iframe = styled.div`
`