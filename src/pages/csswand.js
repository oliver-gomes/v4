import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

import Img from "gatsby-image"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <div>
      <h1>CSSWand</h1>
      <div style={{ textAlign: "center" }}>
        <Img
          imgStyle={{ objectFit: "cover" }}
          style={{ margin: "1rem", borderRadius: "20px" }}
          fixed={data.source.edges[2].node.childImageSharp.fixed}
        />
      </div>

      <Tags>
        <ButtonTag style={{ marginRight: 10 }}>React</ButtonTag>
        <ButtonTag>Firebase</ButtonTag>
        <ButtonTag>Ant Design</ButtonTag>
        <ButtonTag>Emotion</ButtonTag>
      </Tags>

      <a
        href="https://www.csswand.dev/"
        style={{ display: "inline-block", background: "none" }}
      >
        <Button>Go to App</Button>
      </a>
      <a
        href="https://github.com/oliver-gomes/csswand/"
        style={{ display: "inline-block", background: "none" }}
      >
        <ButtonGit>Github</ButtonGit>
      </a>
      <div
        style={{
          textAlign: "center",

          marginTop: "20px",
        }}
      >
        <Img
          style={{ borderRadius: "20px" }}
          fixed={data.source.edges[3].node.childImageSharp.fixed}
        />
      </div>

      <p>
        Took a modern design approach to represent this app with focus on
        minimal styling.
      </p>

      <div
        style={{
          textAlign: "center",

          marginTop: "20px",
        }}
      >
        <Img fixed={data.source.edges[0].node.childImageSharp.fixed} />
      </div>

      <p>
        Then you click on your chosen styling a modal window will pop-up
        showcasing the HTML and CSS code along with Copy button. The Copy button
        copies the code and allows the user to paste it in their work
      </p>
      <div
        style={{
          textAlign: "center",

          marginTop: "20px",
        }}
      >
        <Img fixed={data.source.edges[1].node.childImageSharp.fixed} />
      </div>
      <p>
        New Features are added timely and the newest one is a color picker.
        Where user can find out their favorite color from the picker and copy it
        to use it in their project
      </p>
      <p>
        This app became popular on Product Hunt and was voted #2 Product of the
        Day. Feel free to check it out and use it in your workspace
      </p>
    </div>
  </Layout>
)

export const query = graphql`
  query csswandQuery {
    source: allFile(filter: { absolutePath: { regex: "/images/csswand/" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 820, height: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const Button = styled.div`
  border: 1px solid #2eec96;
  border-radius: 10px;
  width: 100%;
  padding: 5px;
  text-align: center;
  color: #2eec96;

  :hover {
    cursor: pointer;
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
    cursor: pointer;
  }
`
const ButtonTag = styled.div`

/* border: 1px solid #E0E2E1;
border-radius: 10px; */
width: 12%;
padding: 5px;
text-align: center;
color: #B8B8B8;
@media only screen and (max-width: 720px) {
    width: 40%;
  }
}
`

const Tags = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`
