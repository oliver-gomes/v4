import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

import Img from "gatsby-image"
import { graphql } from "gatsby"

import { FaGithub } from "react-icons/fa"

export default ({ data }) => (
  <Layout>
    <div>
      {/* <h1>Other Projects</h1> */}
      <p>
        When I am free, I am usually waving my wand and casting away newly
        discovered spells to build creative projects
      </p>
      <iframe
        src="https://giphy.com/embed/6CovzgyTig7M4"
        width="480"
        height="304"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      />
      <p>
        <a href="https://giphy.com/gifs/magic-wand-hifw-6CovzgyTig7M4" />
      </p>
      <Main>
        <h1>Find out all about my fun side projects</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tech</th>
              <th>Preview</th>
              <th>Link</th>
              <th>Github</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>React Hooks Todo</td>
              <td>React Hooks</td>
              <td>
                <Img
                  objectFit="cover"
                  fixed={data.source.edges[11].node.childImageSharp.fixed}
                />
              </td>
              <td>
                <a href="http://hook-todo.surge.sh/">Link to App</a>
              </td>
              <td style={{ paddingLeft: 38 }}>
                <a
                  href="https://github.com/oliver-gomes/hook-list"
                  style={{ backgroundImage: "none" }}
                >
                  <FaGithub color="black" />
                </a>
              </td>
            </tr>
            <tr>
              <td>Typescript React Todo</td>
              <td>Typescript/React</td>
              <td>
                <Img
                  objectFit="cover"
                  fixed={data.source.edges[1].node.childImageSharp.fixed}
                />
              </td>
              <td>
                <a href="http://react-typescript-todo.surge.sh/">Link to App</a>
              </td>
              <td style={{ paddingLeft: 38 }}>
                <a
                  href="https://github.com/oliver-gomes/react-type-todo"
                  style={{ backgroundImage: "none" }}
                >
                  <FaGithub color="black" />
                </a>
              </td>
            </tr>
            <tr>
              <td>Take Note App</td>
              <td>React & Firebase</td>
              <td>
                <Img
                  objectFit="cover"
                  fixed={data.source.edges[0].node.childImageSharp.fixed}
                />
              </td>
              <td>
                <a href="https://take-note-app.firebaseapp.com/">Link to App</a>
              </td>
              <td style={{ paddingLeft: 38 }}>
                <a
                  href="https://github.com/oliver-gomes/take-note-reactfirebase"
                  style={{ backgroundImage: "none" }}
                >
                  <FaGithub color="black" />
                </a>
              </td>
            </tr>
            <tr>
              <td>Skypey App</td>
              <td>React/Redux</td>
              <td>
                <Img
                  objectFit="cover"
                  fixed={data.source.edges[5].node.childImageSharp.fixed}
                />
              </td>
              <td>
                <a href="http://skypey-oliver-reactredux.surge.sh/">
                  Link to App
                </a>
              </td>
              <td style={{ paddingLeft: 38 }}>
                <a
                  href="https://github.com/oliver-gomes/react-skypey"
                  style={{ backgroundImage: "none" }}
                >
                  <FaGithub color="black" />
                </a>
              </td>
            </tr>
            <tr>
              <td>Calculator App</td>
              <td>React Native</td>
              <td>
                <Img
                  objectFit="cover"
                  fixed={data.source.edges[8].node.childImageSharp.fixed}
                />
              </td>
              <td>
                <a href="https://expo.io/@ogomes/twin-modern-calculator">
                  Link to App
                </a>
              </td>

              <td style={{ paddingLeft: 38 }}>
                <a
                  href="https://github.com/oliver-gomes/react-native-calculator"
                  style={{ backgroundImage: "none" }}
                >
                  <FaGithub color="black" />
                </a>
              </td>
            </tr>
            <tr>
              <td>BMI App</td>
              <td>React Native</td>
              <td>
                <Img
                  objectFit="cover"
                  fixed={data.source.edges[4].node.childImageSharp.fixed}
                />
              </td>
              <td>
                <a href="https://expo.io/@ogomes/bmi-calculator">Link to App</a>
              </td>

              <td style={{ paddingLeft: 38 }}>
                <a
                  href="https://github.com/oliver-gomes/react-native-bmi"
                  style={{ backgroundImage: "none" }}
                >
                  <FaGithub color="black" />
                </a>
              </td>
            </tr>
            <tr>
              <td>Meme Generator</td>
              <td>React </td>
              <td>
                <Img
                  objectFit="cover"
                  fixed={data.source.edges[7].node.childImageSharp.fixed}
                />
              </td>
              <td>
                <a href="http://synonymous-class.surge.sh/">Link to App</a>
              </td>

              <td style={{ paddingLeft: 38 }}>
                <a
                  href="https://github.com/oliver-gomes/v-school-react/tree/master/meme-generator"
                  style={{ backgroundImage: "none" }}
                >
                  <FaGithub color="black" />
                </a>
              </td>
            </tr>
            <tr>
              <td>Youtube Clone</td>
              <td>React </td>
              <td>
                <Img
                  objectFit="cover"
                  fixed={data.source.edges[9].node.childImageSharp.fixed}
                />
              </td>
              <td>
                <a href="http://ordinary-brick.surge.sh/">Link to App</a>
              </td>
              <td style={{ paddingLeft: 38 }}>
                <a
                  href="https://github.com/oliver-gomes/react-stephg/tree/master/videos"
                  style={{ backgroundImage: "none" }}
                >
                  <FaGithub color="black" />
                </a>
              </td>
            </tr>
            <tr>
              <td>Picture Search </td>
              <td>React </td>
              <td>
                <Img
                  objectFit="cover"
                  fixed={data.source.edges[10].node.childImageSharp.fixed}
                />
              </td>
              <td>
                <a href="http://exuberant-nest.surge.sh/">Link to App</a>
              </td>
              <td style={{ paddingLeft: 38 }}>
                <a
                  href="https://github.com/oliver-gomes/react-stephg/tree/master/pics"
                  style={{ backgroundImage: "none" }}
                >
                  <FaGithub color="black" />
                </a>
              </td>
            </tr>
            <tr>
              <td>RoboFriends App</td>
              <td>React </td>
              <td />
              <td>
                <a href="https://oliver-gomes.github.io/projects/robofriends-app/">
                  Link to App
                </a>
              </td>
              <td style={{ paddingLeft: 38 }}>
                <a
                  href="https://github.com/oliver-gomes/webdev-2018/tree/master/react-app/robofriends"
                  style={{ backgroundImage: "none" }}
                >
                  <FaGithub color="black" />
                </a>
              </td>
            </tr>
            <tr>
              <td>Memory Game</td>
              <td>Javascript</td>
              <td>
                <Img
                  objectFit="cover"
                  fixed={data.source.edges[6].node.childImageSharp.fixed}
                />
              </td>
              <td>
                <a href="https://oliver-gomes.github.io/projects/memory-game/">
                  Link to App
                </a>
              </td>
              <td style={{ paddingLeft: 38 }}>
                <a
                  href="https://github.com/oliver-gomes/frontend-nanodegree-memory-game"
                  style={{ backgroundImage: "none" }}
                >
                  <FaGithub color="black" />
                </a>
              </td>
            </tr>
            <tr>
              <td>Color Game</td>
              <td>Javascript</td>
              <td>
                <Img
                  objectFit="cover"
                  fixed={data.source.edges[3].node.childImageSharp.fixed}
                />
              </td>
              <td>
                <a href="https://oliver-gomes.github.io/projects/color-game/">
                  Link to App
                </a>
              </td>
              <td style={{ paddingLeft: 38 }}>
                <a
                  href="https://github.com/oliver-gomes/colorgame-webdev"
                  style={{ backgroundImage: "none" }}
                >
                  <FaGithub color="black" />
                </a>
              </td>
            </tr>
            <tr>
              <td>PixelArt Game</td>
              <td>Javascript</td>
              <td>
                <Img
                  objectFit="cover"
                  fixed={data.source.edges[2].node.childImageSharp.fixed}
                />
              </td>

              <td>
                <a href="https://oliver-gomes.github.io/projects/pixel-art/">
                  Link to App
                </a>
              </td>
              <td style={{ paddingLeft: 38 }}>
                <a
                  href="https://github.com/oliver-gomes/frontend-nanodegree-pixelartmaker"
                  style={{ backgroundImage: "none" }}
                >
                  <FaGithub color="black" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </Main>
    </div>
  </Layout>
)

export const query = graphql`
  query projectQuery {
    source: allFile(filter: { absolutePath: { regex: "/images/projects/" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 200, height: 140) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const Main = styled.div`
  @media only screen and (max-width: 480px) {
  }
`
