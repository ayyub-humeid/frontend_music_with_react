import React from 'react';
import AlbumCard from './AlbumCard'; 
import './styles/AlbumRow.css';
import { featuredAlbums } from '../data'; 

const AlbumRowComponent = ({ title, albums }) => {
    return (
        <section className="album-row-section">
            <h2 className="row-title">{title}</h2>
            
            <div className="album-row-container">
                {albums.map((album) => (
                    <AlbumCard 
                        key={album.id} 
                        album={album} 
                    />
                ))}
            </div>
        </section>
    );
};

const FeaturedAlbumsRow = () => (
    <AlbumRowComponent 
        title="Featured Albums & Playlists" 
        albums={featuredAlbums} 
    />
);

export default FeaturedAlbumsRow;