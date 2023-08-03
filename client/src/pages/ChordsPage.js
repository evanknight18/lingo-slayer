import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ChordsPage = () => {
  // Assume you might fetch this data from your API
  const [chords, setChords] = useState([]);

  useEffect(() => {
    // Fetch chords from the API
    // Replace with the actual logic to fetch chords from your server
    fetch('/api/chords')
      .then((response) => response.json())
      .then((data) => setChords(data))
      .catch((error) => console.error('Error fetching chords:', error));
  }, []);

  return (
    <div className="chords-page">
      <h2>Explore Chords</h2>
      <div className="chords-list">
        {chords.length > 0 ? (
          chords.map((chord) => (
            <div key={chord.id} className="chord-item">
              <Link to={`/chords/${chord.id}`}>
                <h3>{chord.name}</h3>
                <p>{chord.description}</p>
                {/* You may also include a visual representation or interactive play button for the chord */}
              </Link>
            </div>
          ))
        ) : (
          <p>Loading chords...</p>
        )}
      </div>
    </div>
  );
};

export default ChordsPage;
