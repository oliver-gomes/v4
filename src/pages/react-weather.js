import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'
import weatherImg from '../images/react-weather/react-weather.png'

export default () => (
    <Layout><div>
        <h1>Weather App</h1>
        <img src={weatherImg} alt="" />

        <Tags><ButtonTag style={{ marginRight: 10 }}>React</ButtonTag><ButtonTag>API</ButtonTag></Tags>

        <a href="https://oliver-gomes.github.io/projects/react-weatherapp/" style={{ display: 'inline-block', background: 'none' }}><Button>Go to App</Button></a>
        <a href="https://github.com/oliver-gomes/react-weatherapp" style={{ display: 'inline-block', background: 'none' }}><ButtonGit>Github</ButtonGit></a>


        <p style={{ marginTop: 30 }}>A Weather Finding App that gives real live weather information anywhere with openweathermap.org API.</p>

    </div></Layout>

)


const Button = styled.div`

border: 1px solid #2EEC96;
border-radius: 10px;
width: 100%;
padding: 5px;
text-align: center;
color: #2EEC96;

:hover {
    cursor: pointer
}
`

const ButtonGit = styled.div`

border: 1px solid #333333;
border-radius: 10px;
width: 100%;
padding: 5px;
margin-top: 10px;
margin-left: 20px;
text-align: center;
color: #333333;

:hover {
    cursor: pointer
}
`

const ButtonTag = styled.div`

/* border: 1px solid #E0E2E1;
border-radius: 10px; */
width: 10%;
padding: 5px;
text-align: center;
color: #B8B8B8;

}
`

const Tags = styled.div`
display: flex;
justify-content: center;
margin-bottom: 40px;
`
