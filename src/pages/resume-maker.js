import React from "react"
import Layout from "../components/layout"

import resume from '../images/resume-maker.mp4'
import resumePdf from '../images/newresume.pdf'

export default () => (
    <Layout><div>
        <h1>Resume Maker</h1>
        <embed src={resumePdf} width="500" height="745"
            type="application/pdf"></embed>
        <p>This is an actual resume made by the App</p>
        <video width="620" height="340" controls>
            <source src={resume} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <p>Video showcasing how it handles the data to form the PDF resume</p>
    </div></Layout>

)