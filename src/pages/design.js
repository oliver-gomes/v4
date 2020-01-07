import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

import Img from "gatsby-image"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <div>
      <h1>Design Projects</h1>
      <p>Design Tools I have used</p>
      <TechList>
        <a href="https://reactjs.org/">
          {" "}
          <img
            src="https://unpkg.com/simple-icons@1.9.23/icons/figma.svg"
            width="32"
            height="32"
            alt=""
          />
        </a>
        <a href="https://www.gatsbyjs.org/">
          <img
            src="https://unpkg.com/simple-icons@1.9.23/icons/framer.svg"
            width="32"
            height="32"
            alt=""
          />
        </a>
        <a href="https://redux.js.org/">
          <img
            src="https://unpkg.com/simple-icons@1.9.23/icons/adobephotoshop.svg"
            width="32"
            height="32"
            alt=""
          />
        </a>
        <a href="https://www.gatsbyjs.org/">
          <img
            src="https://unpkg.com/simple-icons@1.9.23/icons/adobeillustrator.svg"
            width="32"
            height="32"
            alt=""
          />
        </a>
        <a href="https://www.gatsbyjs.org/">
          <img
            src="https://unpkg.com/simple-icons@1.9.23/icons/adobeaftereffects.svg"
            width="32"
            height="32"
            alt=""
          />
        </a>
        <a href="https://www.gatsbyjs.org/">
          <img
            src="https://unpkg.com/simple-icons@1.9.23/icons/adobepremiere.svg"
            width="32"
            height="32"
            alt=""
          />
        </a>
        <a href="https://www.gatsbyjs.org/">
          <h3 style={{ color: "black" }}>xd</h3>
        </a>
      </TechList>

      <div>
        {/* 1 */}
        <div style={{ paddingBottom: 30 }}>
          <h3>Twin Calculator App Design </h3>
          <Img fixed={data.source.edges[6].node.childImageSharp.fixed} />
          <a href="https://www.behance.net/gallery/75906275/Calculator-App-Design-Code">
            <Button>Behance</Button>
          </a>
          <p>
            Modern Calculator App made with ease of use and modern design in
            mind. The App contain Day/Night switch that switch between the two
            designs.
          </p>
        </div>
        {/* 2 */}
        <div style={{ paddingBottom: 30 }}>
          <h3>BMI Calculator App Design </h3>
          <Img
            objectFit="cover"
            fixed={data.source.edges[0].node.childImageSharp.fixed}
          />
          <a href="https://www.behance.net/gallery/75656331/BMI-Calculator-App">
            <Button>Behance</Button>
          </a>
          <p>
            The App gives a feedback on body mass index (BMI) to measure body
            fat based on height and weight. Design kept simple with two main
            color combination that are shades of black and yellow.
          </p>
        </div>

        {/* 3 */}
        <div style={{ paddingBottom: 30 }}>
          <h3>T-Shirt Design for Udacity </h3>
          <Img fixed={data.source.edges[2].node.childImageSharp.fixed} />
          <a href="https://www.behance.net/gallery/71510745/T-Shirt-Design-for-UdacityCharity-Project">
            <Button>Behance</Button>
          </a>
          <p>
            My 5 Design submission for Udacity's Grow with Google Charity Event.
            Profits made from selling the T-Shirts are donated to an educational
            charity.
          </p>
        </div>

        {/* 4 */}
        <div style={{ paddingBottom: 30 }}>
          <h3>Ride Share App Design </h3>
          <Img fixed={data.source.edges[3].node.childImageSharp.fixed} />
          <a href="https://www.behance.net/gallery/72553979/Ride-Share-App">
            <Button>Behance</Button>
          </a>
          <p>
            UI Interaction of Ride Share App. Everything done with Adobe XD, and
            prototype with interaction made with Xd's new features.
          </p>
        </div>

        {/* 5 */}

        <div style={{ paddingBottom: 30 }}>
          <h3>Photo Album Mobile App Design </h3>
          <Img fixed={data.source.edges[5].node.childImageSharp.fixed} />
          <a href="https://www.behance.net/gallery/72553979/Ride-Share-App">
            <Button>Behance</Button>
          </a>
          <p>
            UI Interaction of Photo Album. Everything done with Adobe XD, and
            prototype with interaction made with Xd's new features.
          </p>
        </div>

        {/* 6 */}
        <div style={{ paddingBottom: 30 }}>
          <h3>Design to React 01 </h3>
          <Img fixed={data.source.edges[1].node.childImageSharp.fixed} />
          <a href="https://www.behance.net/gallery/76714199/Design-to-React-Landing-Page">
            <Button>Behance</Button>
          </a>
          <p>From my Design to React Series</p>
        </div>


        {/* 7 */}
        <div style={{ paddingBottom: 30 }}>
          <h3>Design to React 02 </h3>
          <Img fixed={data.source.edges[4].node.childImageSharp.fixed} />
          <a href="https://www.behance.net/gallery/77017863/Design-to-React-Event-Page">
            <Button>Behance</Button>
          </a>
          <p>From my Design to React Series, used Figma on this project</p>
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query imageQuery {
    source: allFile(filter: { absolutePath: { regex: "/images/design/" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 500, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const TechList = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0 10px 0;

  a {
    background: none;
  }

  @media only screen and (max-width: 480px) {
    width: 50%;
    a img {
      margin-right: 40px;
    }
  }
`
const Button = styled.div`
  border: 1px solid #2eec96;
  border-radius: 10px;
  width: 12%;
  padding: 5px;
  text-align: center;
  margin-bottom: 20px;

  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 480px) {
    width: 30%;
  }
`
