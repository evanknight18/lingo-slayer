import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ScalesPage = () => {
  // Assume you might fetch this data from your API
  const [scales, setScales] = useState([]);

  useEffect(() => {
    // Fetch scales from the API
    // Replace with the actual logic to fetch scales from your server
    fetch('/api/scales')
      .then((response) => response.json())
      .then((data) => setScales(data))
      .catch((error) => console.error('Error fetching scales:', error));
  }, []);

  return (
    <div className="scales-page">
      <h2>Explore Scales</h2>
      <div className="scales-list">
        {scales.length > 0 ? (
          scales.map((scale) => (
            <div key={scale.id} className="scale-item">
              <Link to={`/scales/${scale.id}`}>
                <h3>{scale.name}</h3>
                <p>{scale.description}</p>
                {/* Perhaps you can include an interactive play button to hear the scale */}
              </Link>
            </div>
          ))
        ) : (
          <p>Loading scales...</p>
        )}
      </div>
    </div>
  );
};

export default ScalesPage;
