import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import './App.css';
import CharacterDetail from "./CharacterDetail";

function RickAndMortySearch() {
  const [query, setQuery] = useState("");
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState("");
  const [locations, setLocations] = useState([]);
  const [showDetails, setShowDetails] = useState(false); 
  const [showLocations, setShowLocations] = useState(false); 

  const navigate = useNavigate();
  const videoPath = "/imagenes/ricky.mp4";

  const fetchCharacters = async (query) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
      const data = await response.json();

      if (data.results) {
        setCharacters(data.results);
        setError("");
      } else {
        setError("No se encontraron personajes.");
        setCharacters([]);
      }
    } catch (error) {
      setError("Hubo un error al obtener los personajes.");
      console.error("Error:", error);
    }
  };

  const fetchLocations = async () => {
    if (showLocations) {
      setShowLocations(false); 
      return;
    }

    try {
      const response = await fetch(`https://rickandmortyapi.com/api/location`);
      const data = await response.json();

      if (data.results) {
        setLocations(data.results);
        setShowLocations(true); 
        setError("");
      } else {
        setError("No se encontraron ubicaciones.");
        setLocations([]);
      }
    } catch (error) {
      setError("Hubo un error al obtener las ubicaciones.");
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim() === "") {
      setError("Por favor, ingrese un nombre de personaje.");
      setCharacters([]);
      return;
    }
    setCharacters([]);
    fetchCharacters(query);
  };

  return (
    <div className="app-container">
      <div className="video-background">
        <video autoPlay loop muted className="video-frame">
          <source src={videoPath} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>

      {!showDetails && (
        <div className="container">
          <h1>Buscar Personajes de Rick and Morty</h1>

          <div className="search-box">
            <input
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Escribe el nombre de un personaje..."
            />
            <button onClick={handleSearch}>Buscar</button>
            <button onClick={fetchLocations}>
              {showLocations ? "Ocultar Ubicaciones" : "Mostrar Ubicaciones"}
            </button>
          </div>

          {error && <p className="error">{error}</p>}

          <div className="results-container">
            {characters.map((character) => (
              <div key={character.id} className="character-card">
                <img src={character.image} alt={character.name} />
                <h3>{character.name}</h3>
                <Link to={`/character/${character.id}`}>
                  <button onClick={() => setShowDetails(true)}>Ver más info</button>
                </Link>
              </div>
            ))}
          </div>

          {showLocations && (
            <div className="locations-container">
              {locations.map((location) => (
                <div key={location.id} className="location-card">
                  <h3>{location.name}</h3>
                  <p><strong>Tipo:</strong> {location.type}</p>
                  <p><strong>Dimensión:</strong> {location.dimension}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <Routes>
        <Route
          path="/character/:id"
          element={<CharacterDetail setShowDetails={setShowDetails} />}
        />
      </Routes>
    </div>
  );
}

export default RickAndMortySearch;
