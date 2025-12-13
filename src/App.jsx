import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './ApplicationComponents/HeaderComponent'
import HeroBanner from './ApplicationComponents/HeroBanner'
// import SuggestedArtistsRow from './ApplicationComponents/ArtistRowComponent';
import ArtistRowComponent from './ApplicationComponents/ArtistRowComponent';
// import TrendingTracks from './ApplicationComponents/TrackListRow';
import TrackListRow from './ApplicationComponents/TrackListRow';
// import FeaturedAlbumsRow from './ApplicationComponents/AlbumRowComponent';
import AlbumRowComponent from './ApplicationComponents/AlbumRowComponent';
import FooterComponent from './ApplicationComponents/FooterComponent';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <HeaderComponent/>
    <HeroBanner/>
    {/* <FeaturedAlbumsRow /> */}
    <AlbumRowComponent title={'ALl Album'} />
    {/* <TrendingTracks /> */}
    <TrackListRow />
    <ArtistRowComponent title={"ALL Artists"} />
    <FooterComponent />
    </>
  )
}

export default App
