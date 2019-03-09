import React from "react"
import Layout from "../components/layout"

import resume1 from '../images/react-resume/1.png'
import resume2 from '../images/react-resume/2.png'
import resume3 from '../images/react-resume/3.png'
import resume4 from '../images/react-resume/4.png'
import resume from '../images/resume-maker.mp4'
import resumePdf from '../images/react-resume.pdf'

export default () => (
    <Layout><div>
        <h1>Resume Maker</h1>
        <img src={resume1} alt="" />
        <p>The Main page includes a form on the left hand side and a pdf on the right.
            Basic idea is the fill up the form, and behind the scene React takes in the input from the form and write it into the pdf
        </p>

        <img src={resume2} alt="" />
        <p>First Page</p>

        <img src={resume3} alt="" />
        <p>Second Page</p>

        <img src={resume4} alt="" />
        <p>Third Page</p>


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