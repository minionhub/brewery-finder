import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [breweries, setBreweries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        const response = await axios.get("https://api.openbrewerydb.org/breweries");
        setBreweries(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load breweries. Please try again later.");
        setLoading(false);
      }
    };

    fetchBreweries();
  }, []);

  if (loading) {
    return <div className="App">Loading...</div>;
  }

  if (error) {
    return <div className="App">{error}</div>;
  }

  return (
    <div className="App">
      <header>
        <h1>Brewery Finder</h1>
        <p>Explore breweries across the United States.</p>
      </header>
      <main>
        <div className="brewery-list">
          {breweries.map((brewery) => (
            <div className="brewery-card" key={brewery.id}>
              <h2>{brewery.name}</h2>
              <p>
                <strong>Type:</strong> {brewery.brewery_type}
              </p>
              <p>
                <strong>Location:</strong> {brewery.city}, {brewery.state}
              </p>
              {brewery.website_url && (
                <a
                  href={brewery.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brewery-link"
                >
                  Visit Website
                </a>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
