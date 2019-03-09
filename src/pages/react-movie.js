import React from "react"
import Layout from "../components/layout"

import movieImg from '../images/react-movie.png'

export default () => (
    <Layout><div>
        <h1>React Movie</h1>
        <img src={movieImg} alt="" />
        <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
    </div></Layout>

)