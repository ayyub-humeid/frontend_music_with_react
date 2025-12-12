import React from 'react';
import './styles/AlbumRow.css'; 

const AlbumCard = ({ album }) => {
    return (
        <div className="album-card">
            
            <div className="album-cover-container">
                <img 
                    src={`/images/${album.coverUrl}`} // مسار الصورة من الـ props
                    alt={album.title} 
                    className="album-cover" 
                />
                
                <button className="play-icon-btn" aria-label={`Play ${album.title}`}>
                    ▶️
                </button>
            </div>
            
            <h4 className="album-title">{album.title}</h4>
            <p className="album-artist">{album.artist.name}</p>
        </div>
    );
};

export default AlbumCard;