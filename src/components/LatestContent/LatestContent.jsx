import React, { useState, useEffect } from 'react';
import './LatestContent.css'; 

const LatestContent = () => {
    const [latestBooks, setLatestBooks] = useState([]);
    const [latestVideos, setLatestVideos] = useState([]);
    const [latestMagazines, setLatestMagazines] = useState([]);
    const [latestAudio, setLatestAudio] = useState([]);

    useEffect(() => {
        // Fetch data from API
        fetch('/api/latest-books')
            .then(response => response.json())
            .then(data => setLatestBooks(data));
        
        fetch('/api/latest-videos')
            .then(response => response.json())
            .then(data => setLatestVideos(data));
        
        fetch('/api/latest-magazines')
            .then(response => response.json())
            .then(data => setLatestMagazines(data));
        
        fetch('/api/latest-audio')
            .then(response => response.json())
            .then(data => setLatestAudio(data));
    }, []);

    const renderContent = (items, type) => (
        <div className="content-section">
            <h2>Latest {type}</h2>
            <div className="content-grid">
                {items.map(item => (
                    <div key={item.id} className="content-item">
                        <img src={item.image} alt={item.title} className="content-image" />
                        <h3 className="content-title">{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <main className="latest-content">
            {renderContent(latestBooks, 'Books')}
            {renderContent(latestVideos, 'Videos')}
            {renderContent(latestMagazines, 'Magazines')}
            {renderContent(latestAudio, 'Audio')}
        </main>
    );
};

export default LatestContent;
