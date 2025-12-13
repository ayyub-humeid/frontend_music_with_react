import { useQuery } from "@apollo/client/react";
import { GET_ALL_SONGS } from "../graphQl/songs/queries";
import React from 'react';
import './styles/TrackListRow.css'; 
import { trendingTracks } from '../data'; 

const TrackItem = ({ track, index }) => {
    return (
        <div className="track-item">
            <div className="track-index">{index + 1}</div>
            
            <div className="track-details">
                <h4 className="track-title">{track.title}</h4>
                <p className="track-artist">{track.album.artist.name}</p>
            </div>
            
            <button className="track-play-btn" aria-label={`Play ${track.title}`}>
                ▶️ 
            </button>
            
            <div className="track-duration">{track.duration}</div>
        </div>
    );
};

const TrackListRow = ({ title }) => {
    const {loading,error,data}=useQuery(GET_ALL_SONGS);
     if (loading) return <p>Loading songs...</p>;
          if (error) return <p>Error loading songs</p>;
          const songs = data.allSongs;
    return (
        <section className="track-list-section">
            <h2 className="row-title">{title}</h2>
            <div className="track-list-container">
                {songs.map((song, index) => (
                    <TrackItem 
                        key={song.id} 
                        track={song} 
                        index={index} 
                    />
                ))}
            </div>
        </section>
    );
};

// const TrendingTracks = () => (
//     <TrackListRow 
//         title="Trending Tracks" 
//         tracks={trendingTracks} 
//     />
// );

// export default TrendingTracks;
export default TrackListRow;