// import { useQuery } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { GET_ALL_ARTISTS } from "../graphQl/artists/queries";
import React from 'react';
import ArtistCard from './ArtistCard';
import './styles/ArtistRow.css';
import { suggestedArtists } from '../data'; 

const ArtistRowComponent = ({ title }) => {
const { loading, error, data } = useQuery(GET_ALL_ARTISTS);
  if (loading) return <p>Loading artists...</p>;
  if (error) return <p>Error loading artists</p>;
  const artists = data.allArtists;
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

// const SuggestedArtistsRow = () => (
//     <ArtistRowComponent 
//         // title="Suggested Artists" 
//         // artists={suggestedArtists} 
//     />
// );

export default ArtistRowComponent;