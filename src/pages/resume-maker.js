import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'

import resume1 from '../images/react-resume/1.png'
import resume2 from '../images/react-resume/2.png'
import resume3 from '../images/react-resume/3.png'
import resume4 from '../images/react-resume/4.png'
import resumeImg from '../images/react-resume/react-resume.png'
import resume from '../images/resume-maker.mp4'
import resumePdf from '../images/react-resume.pdf'

export default () => (
    <Layout><div>
        <h1>Resume Maker</h1>
        <img src={resumeImg} alt="" />

        <Tags><ButtonTag style={{ marginRight: 10 }}>React</ButtonTag></Tags>

        <a href="http://react-resume-oliver.surge.sh/" style={{ display: 'inline-block', background: 'none' }}><Button>Go to App</Button></a>
        {/* <a href="https://github.com/oliver-gomes/react-movie" style={{ display: 'inline-block', background: 'none' }}><ButtonGit>Github</ButtonGit></a> */}



        <img src={resume1} alt="" style={{ borderRadius: 10, marginTop: 40 }} />



        <p style={{ marginTop: 20 }}>The Main page includes a form on the left hand side and a pdf on the right.
            Main idea of the app is to fill up the form which then get written into a PDF, and behind the scene React does just that, it takes in the input from the form and write it into the pdf
        </p>

        <img src={resume2} alt="" style={{ borderRadius: 10, marginTop: 20 }} />
        <p>The First Page of the form includes some basic information starting with names, role, study, contact information and experience. The layout at which the input is written on to the PDF was
            implemented by CSS Grid and Flexbox. I played around with some design and ended up settling down for this simple layout</p>

        <img src={resume3} alt="" style={{ borderRadius: 10, marginTop: 20 }} />
        <p>The Secone Page consists of addition information of experience, projects and portfolio link. The Pages are navigated by swiping right/left to involve smooth transition and better user experience.</p>

        <img src={resume4} alt="" style={{ borderRadius: 10, marginTop: 20 }} />
        <p>The Last page of the form includes skills, tools and interests. After filling up everything, I can hover over to the top of the pdf which will bring Download and Print icon. If clicked the app download or print straight from the browser.</p>


        <embed src={resumePdf} width="500" height="745"
            type="application/pdf"></embed>
        <p>This is the resume made from the above inputs</p>
        <video width="700" height="400" controls>
            <source src={resume} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <p>Video showcasing the app in action</p>
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
// const ButtonGit = styled.div`

// border: 1px solid #333333;
// border-radius: 10px;
// width: 100%;
// padding: 5px;
// margin-top: 10px;
// margin-left: 20px;
// text-align: center;
// color: #333333;

// :hover {
//     cursor: pointer
// }
// `

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

