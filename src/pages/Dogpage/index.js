import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Dogpage() {
  const [dog, setDog] = useState();

  const [status, setStatus] = useState(false);

  const getDog = () => {
    axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      console.log(response.data.message);
      setDog(response.data.message);
      setStatus(true);
    });
  };

  return (
    <>
      <h1>Mundo Dog</h1>
      <Link to="/">Home</Link>
      <hr />
      <button
        onClick={() => {
          getDog();
        }}
      >
        Clique aqui
      </button>
      {status && <img src={dog} alt="Cachorros" />}
    </>
  );
}
