// default export
import React from 'react';
import '../ApplicationComponents/styles/HeroBanner.css';
export default function HeroBanner() {
  return (
    <section className="hero-banner">
            <div className="hero-content">
                <p className="hero-tagline">NEW RELEASE</p>
                <h1 className="hero-title">
                    Dive into <br />
                    The Latest Songs
                </h1>
                <p className="hero-description">
                    Exclusive tracks, curated playlists, and trending artists—all in one place.
                    Start your journey with the freshest sounds today.
                </p>
                <button className="hero-button">
                    Listen Now
                </button>
            </div>
        </section>
    );
}
