import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './CharacterDetail.css';

function CharacterDetail({ setShowDetails }) {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCharacterDetail();
  }, [id]);

  if (!character) return <p className="loading">Cargando información...</p>;


  const traducirEstado = (estado) => {
    switch (estado) {
      case "Alive":
        return "Vivo";
      case "Dead":
        return "Muerto";
      case "unknown":
        return "Desconocido";
      default:
        return estado;
    }
  };


  const traducirGenero = (genero) => {
    switch (genero) {
      case "Male":
        return "Masculino";
      case "Female":
        return "Femenino";
      case "Genderless":
        return "Sin género";
      case "unknown":
        return "Desconocido";
      default:
        return genero;
    }
  };

  return (
    <div className="character-detail-container">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p><strong>Estado:</strong> {traducirEstado(character.status)}</p>
      <p><strong>Especie:</strong> {character.species}</p>
      <p><strong>Género:</strong> {traducirGenero(character.gender)}</p>
      <p><strong>Origen:</strong> {character.origin?.name}</p>
      <p><strong>Ubicación actual:</strong> {character.location?.name}</p>

      <button
        className="back-button"
        onClick={() => {
          setShowDetails(false);
          navigate("/");
        }}
      >
        Buscar otro personaje
      </button>
    </div>
  );
}

export default CharacterDetail;
