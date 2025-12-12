import React from 'react';
import './styles/TrackListRow.css'; 
import { trendingTracks } from '../data'; 

const TrackItem = ({ track, index }) => {
    return (
        <div className="track-item">
            <div className="track-index">{index + 1}</div>
            
            <div className="track-details">
                <h4 className="track-title">{track.title}</h4>
                <p className="track-artist">{track.artist.name}</p>
            </div>
            
            <button className="track-play-btn" aria-label={`Play ${track.title}`}>
                ▶️ 
            </button>
            
            <div className="track-duration">{track.duration}</div>
        </div>
    );
};

const TrackListRow = ({ title, tracks }) => {
    return (
        <section className="track-list-section">
            <h2 className="row-title">{title}</h2>
            <div className="track-list-container">
                {tracks.map((track, index) => (
                    <TrackItem 
                        key={track.id} 
                        track={track} 
                        index={index} 
                    />
                ))}
            </div>
        </section>
    );
};

const TrendingTracks = () => (
    <TrackListRow 
        title="Trending Tracks" 
        tracks={trendingTracks} 
    />
);

export default TrendingTracks;