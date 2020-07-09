import React, { useState, FormEvent } from "react";
import api from "../../services/api";
import { Title, Form, Movies, Error } from "./style";
import logo from "../../assets/logo.svg";


interface MovieDTO {
  Title: string;
  imdbID: string;
  Year: string;
  Type: string;
  Poster: string;
}

const Dashboard: React.FC = () => {
  
  const [newMovie, setNewMovies] = useState("");
  
  const [movies, setMovies] = useState<MovieDTO[]>([]); 
  const [inputError, setInputEror] = useState('');

  async function handleAddMovies(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault(); 

    if (!newMovie) {
      setInputEror('Type the movie, series or tv show for find');
      return;
    }

    try {
     
      const response = await api.get(`?s=${newMovie}&apikey=suachave`);
      const allItens = response.data.Search;
      setMovies(allItens);
      setNewMovies('');
      setInputEror('');
    } catch (err) {
      setInputEror('Not found');
    }
  }

  return (
    <>
      <img src={logo} alt="movie explorer" />
      <Title>
        <span>Find</span> your favorite movie, series or tv shows
      </Title>

      <Form onSubmit={handleAddMovies}>
        <input
          value={newMovie}
          onChange={(e) => setNewMovies(e.target.value)}
          placeholder="Just type the name of ur favorite show"
        />
        <button>Find</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Movies>
        {movies.map((item, i) => (

          <div key={i} className="container">
            <div className="img">
              <img src={item.Poster} alt={item.Title} />
            </div>
            <h2>{item.Title}</h2>
            <div className="info">
              <p>{item.Year}</p>
              <p>{item.Type}</p>
            </div>
            <a href="teste">explore</a>
          </div>

        ))}
      </Movies>
    </>
  );
};

export default Dashboard;
