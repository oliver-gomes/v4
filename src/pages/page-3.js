import React from 'react'
import { Link } from 'gatsby'

export default function ThirdPage() {
    return (
        <div>
            <h1>This is the 3rd page!</h1>
            <a href="/">Home by Anchor</a>
            <br></br>
            <Link to="/">Navigate to Home</Link>
            <br></br>
            <Link to="/page-2">Navigate to Page 2</Link>
        </div>
    )
}
