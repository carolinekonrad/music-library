// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useState, useEffect } from 'react'

function ArtistView() {
    const [ artistData, setArtistData ] = useState([])

    return (
        <div>
            <h2>The id passed was:</h2>
            <p>Artist Data Goes Here!</p>
        </div>
    )
}

export default ArtistView