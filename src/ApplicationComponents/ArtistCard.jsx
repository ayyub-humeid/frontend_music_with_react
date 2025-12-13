import React from 'react';
import './styles/ArtistRow.css'; 

const ArtistCard = ({ artist }) => {
    return (
        <div className="artist-card">
            
            <div className="artist-image-container">
                <img 
                    
                    alt={artist.name} 
                    className="artist-image" 
                />
            </div>
            
            <h4 className="artist-name">{artist.name}</h4>
            {/* <p className="artist-genre">{artist.genre}</p> */}
        </div>
    );
};

export default ArtistCard;