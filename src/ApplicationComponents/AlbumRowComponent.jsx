import { useQuery } from "@apollo/client/react";
import { GET_ALL_ALBUMS } from "../graphQl/albums/queries";
import React from 'react';
import AlbumCard from './AlbumCard'; 
import './styles/AlbumRow.css';
import { featuredAlbums } from '../data'; 

const AlbumRowComponent = ({ title }) => {
    const { loading, error, data } = useQuery(GET_ALL_ALBUMS);
          if (loading) return <p>Loading artists...</p>;
          if (error) return <p>Error loading artists</p>;
          const albums = data.allAlbums;
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

// export default FeaturedAlbumsRow;
export default AlbumRowComponent;