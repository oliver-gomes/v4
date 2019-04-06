import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

import { FaGithub } from "react-icons/fa"
export default () => (
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
              <th>Link</th>
              <th>Github</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Take Note App</td>
              <td>React & Firebase</td>
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

const Main = styled.div`
  @media only screen and (max-width: 480px) {
  }
`
