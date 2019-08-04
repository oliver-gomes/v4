import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

import Img from "gatsby-image"
import { graphql } from "gatsby"

import movieImg from "../images/react-movie/react-movie.png"
import main from "../images/react-movie/main.png"
import mainTwo from "../images/react-movie/2.png"
import mainThree from "../images/react-movie/3.png"
import mainFour from "../images/react-movie/4.png"

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
        Main Section of the App is kept very simple so it's easier to navigate
        around the app. It mainly consist of Featured Movie Poster which changes
        according to latest most buzzed movie. In addition, it have name of the
        movie, short Plot and Search bar to search for any movie
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
        Scrolling down after the Main Section is List of all the New Movies that
        are out on Theaters at that given time. This section have a Load More
        Button at the bottom when clicked it load more new Movies.
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
        When Clicked on any Specific Movies, it brings out more information of
        the Movies. First Section includes a Movie Poster, Plot, Genres, IMDB
        Rating, Director/s, Running Time, Budget, and Revenue. At the time of
        this writing, Captain Marvel just got released and so the screenshot
        didn't have the updated API revenue count.
      </p>
      <p>
        I usually use the app to find movies to watch, which actors are in the
        movie, rating to use my time wisely watching a good movie.
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
