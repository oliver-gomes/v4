import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'

import movieImg from './react-movie.png'
import main from './react-movie/main.png'
import mainTwo from './react-movie/2.png'
import mainThree from './react-movie/3.png'
import mainFour from './react-movie/4.png'

export default () => (
    <Layout><div>
        <h1>React Movie</h1>
        <img src={movieImg} alt="" />

        <Tags><ButtonTag style={{ marginRight: 10 }}>React</ButtonTag><ButtonTag>API</ButtonTag></Tags>

        <a href="http://phobic-heat.surge.sh/" style={{ display: 'inline-block', background: 'none' }}><Button>Go to App</Button></a>
        <a href="https://github.com/oliver-gomes/react-movie" style={{ display: 'inline-block', background: 'none' }}><ButtonGit>Github</ButtonGit></a>


        <img src={main} alt="" style={{ borderRadius: 10, marginTop: 20 }} />
        <p>Main Section of the App is kept very simple so it's easier to navigate around the app.
            It mainly consist of Featured Movie Poster which changes according to latest most buzzed movie.
            In addition, it have name of the movie, short Plot and Search bar to search for any movie
        </p>
        <img src={mainTwo} alt="" style={{ borderRadius: 10, marginTop: 20 }} />
        <p>Scrolling down after the Main Section is List of all the New Movies that are out on Theaters at that given time.
            This section have a Load More Button at the bottom when clicked it load more new Movies.
        </p>
        <img src={mainThree} alt="" style={{ borderRadius: 10, marginTop: 20 }} />
        <img src={mainFour} alt="" style={{ borderRadius: 10, marginTop: 20 }} />
        <p>When Clicked on any Specific Movies, it brings out more information of the Movies.
            First Section includes a Movie Poster, Plot, Genres, IMDB Rating, Director/s, Running Time, Budget, and Revenue.
            At the time of this writing, Captain Marvel just got released and so the API still need to be updated from the Revenue count.
        </p>
        <p>I usually use the app to find movies to watch, which actors are in the movie, rating to use my time wisely watching a good movie.</p>
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
    cursor: pointer
}
`
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
