import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import pinterestImg from "../images/pinterest-clone/pinterest-main.png"

export default () => (
  <Layout>
    <div>
      <h1>Weather App</h1>
      <img src={pinterestImg} alt="" />

      <Tags>
        <ButtonTag style={{ marginRight: 10 }}>Node</ButtonTag>
        <ButtonTag style={{ marginRight: 10 }}>MongoDB</ButtonTag>
        <ButtonTag>Heroku</ButtonTag>
      </Tags>

      <a
        href="https://pinterest-nodemongo.herokuapp.com/"
        style={{ display: "inline-block", background: "none" }}
      >
        <Button>Go to App</Button>
      </a>
      <a
        href="https://github.com/oliver-gomes/pinterest-clone"
        style={{ display: "inline-block", background: "none" }}
      >
        <ButtonGit>Github</ButtonGit>
      </a>

      <p style={{ marginTop: 30 }}>
        A simple Pinterest Clone App that help user collect pictures by
        uploading them. App made using Node, Express and Database handled by
        MongoDB, Mongoose.
      </p>
    </div>
  </Layout>
)

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
  width: 10%;
  padding: 5px;
  text-align: center;
  color: #b8b8b8;

  @media only screen and (max-width: 920px) {
    width: 40%;
  }
`

const Tags = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`
