import React from 'react';
import ArtistCard from './ArtistCard';
import './styles/ArtistRow.css';
import { suggestedArtists } from '../data'; 

const ArtistRowComponent = ({ title, artists }) => {
    return (
        <section className="artist-row-section">
            <h2 className="row-title">{title}</h2>
            <div className="artist-row-container">
                {artists.map((artist) => (
                    <ArtistCard key={artist.id} artist={artist} />
                ))}
            </div>
        </section>
    );
};

const SuggestedArtistsRow = () => (
    <ArtistRowComponent 
        title="Suggested Artists" 
        artists={suggestedArtists} 
    />
);

export default SuggestedArtistsRow;